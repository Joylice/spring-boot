/**
 * Created by zhe on 7/13/16.
 */
(function (window, angular) {
    'use strict';

    var core = angular.module("core", ['ui.select', 'ngSanitize', 'angular-bind-html-compile', 'selector', 'ui.calendar', 'ui.bootstrap']);

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
                if (!_authenticated || !_identity.authorities) return false;

                for (var i = 0; i < authorities.length; i++) {
                    if (this.isInAuthority(authorities[i])) return true;
                }

                return false;
            },
            authenticate: function (identity) {
                _identity = identity;
                _authenticated = identity != null;

                /*if (identity) {
                 localStorage.setItem("bms.identity", angular.toJson(identity))
                 } else {
                 localStorage.removeItem("bms.identity");
                 }*/
            },
            deauthenticate: function () {
                _identity = null;
                _authenticated = false;
                /*localStorage.removeItem("bms.identity");*/

            },
            identity: function (force) {
                var deferred = $q.defer();

                if (force === true) _identity = undefined;

                // check and see if we have retrieved the
                // identity data from the server. if we have,
                // reuse it by immediately resolving
                if (angular.isDefined(_identity)) {
                    deferred.resolve(_identity);
                    return deferred.promise;
                }

                //登录成功后，初始化登录的用户信息和UI配置信息
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
    }
    ]);
    core.factory('authorization', ['$rootScope', '$state', 'principal', '$log', 'T',
        function ($rootScope, $state, principal, $log, T) {
            return {
                authorize: function (fromState) {
                    debugger
                    return principal.identity().then(function () {
                        var isAuthenticated = principal.isAuthenticated();
                        if ($rootScope.toState.authorities && $rootScope.toState.authorities.length > 0 && !principal.isInAnyAuthority($rootScope.toState.authorities)) {
                            if (isAuthenticated) {
                                $state.go(fromState.name);
                                $rootScope.alert.alert({type: 'danger', msg: T.T('warning.permission.prevent.label')});
                            } else {
                                // user is not authenticated. stow the state they wanted before you
                                // send them to the signin state, so you can return them when you're done
                                $rootScope.returnToState = $rootScope.toState;
                                $rootScope.returnToStateParams = $rootScope.toStateParams;

                                // now, send them to the signin state so they can log in
                                $state.go('signin');
                            }
                        }
                    });
                }
            };
        }
    ]);
    core.filter('trusted', ['$sce', function ($sce) {
        return function (text) {
            return $sce.trustAsHtml(text);
        };
    }]);

    //首字母大写
    core.filter("UpperFirst", function () {
        return function (str) {
            var arr = str.split(" ");
            arr = arr.map(function (ele) {
                if (ele && ele[0].charCodeAt() >= 97 && ele[0].charCodeAt() <= 122) {
                    ele = ele[0].toUpperCase() + ele.substring(1);
                }
                return ele;
            });
            return arr.join(" ");
        }
    })
})(window, angular);