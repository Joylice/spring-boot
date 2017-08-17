/**
 * Created by zhe on 7/14/16.
 */
;(function (window, angular) {
    'use strict';
    var core = angular.module("core");
    core.controller('AuthCtrl', ['$scope', '$rootScope', '$state', 'principal', 'AuthService', 'BaseService', '$q', '$timeout', function ($scope, $rootScope, $state, principal, authService, service, $q, $timeout) {
        if (principal.isIdentityResolved()) {
            $state.go('home');
        }
        $scope.status = {
            signingin: false,
            signinErrMsg: "",
            bridges: [],
            current: undefined,
            username: '',
            password: ''
        };
        var backIamges = [];

        service.getAll("bridge", {action: "publicInfo"}).then(function (response) {
            $scope.status.bridges = response.data;
            angular.forEach(response.data, function(item){
                backIamges.push(item.background);
            });

            //初始化UICOnfig
            var configKeys =
                [
                    "BridgeName",
                    "BridgeAlias",
                    "BridgeProfile",
                    "LoginBridgeOutline",
                    "LoginBridgeManagerName",
                    "LoginBridgeManagerProfile",
                    "LoginBridgeManagerLogo",
                    "LoginDesignerName",
                    "LoginDesignerProfile",
                    "LoginDesignerLogo",
                    "LoginBackgroundImage",
                    "LoginDesignerShow",
                    "BMSPlatformName",
                    "BMSPlatformEnName",
                    "HeaderImage"];

            service.getAll("uiConfig", {action: 'item', keys: configKeys}).then(function (response) {
                var dataArr = response.data;
                var config = {};
                for (var i = 0; i < dataArr.length; i++) {
                    config[dataArr[i].key] = dataArr[i].value;
                }
                $rootScope.uiConfig = config;
            });

            if ($scope.status.bridges.length > 0){
                $scope.status.current = $scope.status.bridges[0];
            }

            //轮播的参数配置
            $scope.myInterval = 5000;
            $scope.noWrapSlides = false;
            $scope.active = 0;
            var slides = $scope.slides = [];
            var currIndex = 0;
            $scope.addSlide = function(index) {
                slides.push({
                    image: backIamges[index],
                    name:$scope.status.bridges[index].name,
                    nameEn:$scope.status.bridges[index].nameEn,
                    id: currIndex++
                });
            };
            for (var i = 0; i < backIamges.length; i++) {
                $scope.addSlide(i);
            }

        });
        $scope.signin = function () {
            $scope.status.signingin = true;
            authService.signin({
                rememberme: $scope.rememberme,
                username: $scope.status.username,
                password: $scope.status.password
            }, function (response) {
                $scope.status.signinErrMsg = '';

                //登录成功后，初始化登录的用户信息和UI配置信息
                $q.all([service.get("user", {action: "me"}), service.selectAll("uiConfig"), service.selectAll("config")]).then(function (dataArr) {
                    var myInfo = dataArr[0].data;
                    var uiConfigArr = dataArr[1].data;
                    var configArr = dataArr[2].data;

                    $rootScope.currentUser = myInfo;

                    var uiConfig = {};
                    for (var i = 0; i < uiConfigArr.length; i++) {
                        uiConfig[uiConfigArr[i].key] = uiConfigArr[i].value;
                    }
                    $rootScope.uiConfig = uiConfig;

                    var config = {};
                    for (var k = 0; k < configArr.length; k++) {
                        config[configArr[k].key] = configArr[k].value;
                    }
                    $rootScope.config = config;

                    principal.authenticate(myInfo);
                    if ($scope.returnToState) {
                        $state.go($scope.returnToState.name, $scope.returnToStateParams);
                    } else {
                        $state.go('home');
                    }
                    $scope.status.signingin = false;
                }, function(){
                    $scope.status.signinErrMsg = "登录失败";
                    try {
                        console.error(response.data.message);
                    } catch (e) {

                    }
                    $scope.status.signingin = false;
                });
            }, function (response) {
                $scope.status.signinErrMsg = "登录失败";
                try {
                    console.error(response.data.message);
                } catch (e) {

                }
                $scope.status.signingin = false;
            });
        };
    }
    ]);
})(window, angular);