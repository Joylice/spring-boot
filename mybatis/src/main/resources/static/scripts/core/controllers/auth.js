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
            current: undefined
        };
        $scope.bridge_back_image="";
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
            $scope.randomize = function() {
                var indexes = generateIndexesArray();
                assignNewIndexesToSlides(indexes);
            };

            for (var i = 0; i < backIamges.length; i++) {
                $scope.addSlide(i);
            }

            // //轮播
            // $scope.activeTabIndex=-1;
            // if($scope.status.bridges.length>1){
            //     var bg_Rotate = null;
            //     var bg_Rotate_bridge = function () {
            //         if(bg_Rotate !== null){
            //             $timeout.cancel(bg_Rotate);
            //         }
            //         //轮播的循环
            //         if($scope.activeTabIndex >= $scope.status.bridges.length-1){
            //             $scope.activeTabIndex=-1;
            //         }
            //         $scope.activeTabIndex = $scope.activeTabIndex+1;
            //         $scope.bridge_back_image = backIamges[$scope.activeTabIndex];
            //         bg_Rotate = $timeout(bg_Rotate_bridge, 6000);
            //     }
            //     bg_Rotate_bridge();
            // }
            // else if($scope.status.bridges.length ==1){
            //     $scope.bridge_back_image = backIamges[0];
            // }
        });
        // $scope.select = function (bridge,index) {
        //     $scope.status.current = bridge;
        //     $scope.activeTabIndex = index;
        //     $scope.bridge_back_image = backIamges[index];
        // }

        $scope.$watch('status.current', function (value, oldValue) {
            if(value !== oldValue){
                updateRtData();
            }
        });

        $scope.$on("$destroy", function () {
            if(timeout !== null){
                $timeout.cancel(timeout);
            }
        });

        var timeout = null;
        function updateRtData(){
            if(timeout !== null){
                $timeout.cancel(timeout);
            }
            if(!angular.isObject($scope.status.current)){
                return;
            }
            service.get("bridge", {action: "publicRt", id: $scope.status.current.id}).then(function (response) {
                $scope.status.current.rtData = response.data;
                timeout = $timeout(updateRtData, rtInterval);
            });
        }
        $scope.signin = function () {
            $scope.status.signingin = true;
            authService.signin({
                rememberme: this.rememberme,
                username: this.username,
                password: this.password
            }, function (response) {
                $scope.status.signinErrMsg = '';

                //登录成功后，初始化登录的用户信息和UI配置信息
                $q.all([service.get("user", {action: "me"}), service.selectAll("uiConfig")]).then(function (dataArr) {
                    var myInfo = dataArr[0].data;
                    var configArr = dataArr[1].data;

                    $rootScope.currentUser = myInfo;

                    var config = {};
                    for (var i = 0; i < configArr.length; i++) {
                        config[configArr[i].key] = configArr[i].value;
                    }
                    $rootScope.uiConfig = config;

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