/**
 * Created by cuiyy on 2017/6/27.
 */
(function (window, angular) {
    var core = angular.module("core");
    core.factory('principal', ['$q', '$http', '$timeout', 'BaseService', '$rootScope', function ($q, $http, $timeout, service, $rootScope) {
        var _identity = undefined,
            _authenticated = false;

        return {
            isIdentityResolved: function () {
                return angular.isDefined(_identity);
            },
            isAuthenticated: function () {
                return _authenticated;
            },
            isInAuthority: function (authority) {
                if (!_authenticated || !_identity.authorities) return false;

                var _authorities = [];
                for (var i = 0; i < _identity.authorities.length; i++) {
                    _authorities.push(_identity.authorities[i]['authority']);
                }
                return _authorities.indexOf(authority) != -1;
            },
            isInAnyAuthority: function (authorities) {
                if (!_authenticated || !_identity.authorities)return false;
                for (var i = 0; i < authorities.length; i++) {
                    if (this.isInAuthority(authorities[i]))return true;
                }
                return false;
            },
            authenticate: function (identity) {
                _identity = identity;
                _authenticated = identity != null;
            },
            deauthenticate: function () {
                _identity = null;
                _authenticated = false;
            },
            identity: function (force) {
                var deferred = $q.defer();
                if (force === true) _identity = undefined;
                if (angular.isDefined(_identity)) {
                    deferred.resolve(_identity);
                    return deferred.promise;
                }
                //登录成功后，初始化登录用户信息和UI配置信息
                $q.all([service.get("user", {action: "me"}), service.selectAll("config"), service.selectAll("uiConfig")]).then(function (dataArr) {
                    var myInfo = dataArr[0].data;
                    var configArr = dataArr[1].data;
                    var uiConfigArr = dataArr[2].data;

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

                    _identity = myInfo;
                    _authenticated = true;
                    deferred.resolve(_identity);
                }, function () {
                    _identity = null;
                    _authenticated = false;
                    deferred.resolve(_identity);
                });
                return deferred.promise;
            }
        };
    }]);
    core.factory('authorization', ['$rootScope', '$state', 'principal', '$log',
        function ($rootScope, $state, principal, $log) {
            return {
                authorize: function (fromState) {
                    return principal.identity().then(function () {
                        var isAuthenticated = principal.isAuthenticated();
                        if ($rootScope.toState.authorities && $rootScope.toState.authorities.length > 0 && !principal.isInAnyAuthority($rootScope.toState.authorities)) {
                            if (isAuthenticated) {
                                $state.go(fromState.name);
                                $rootScope.alert.alert({type: 'danger', msg: "警告"});
                            } else {
                                $rootScope.returnToState = $rootScope.toState;
                                $rootScope.returnToStateParams = $rootScope.toStateParams;
                                $state.go('signin');
                            }
                        }
                    });
                }
            };
        }
    ]);
})