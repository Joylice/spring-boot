/**
 * Created by cuiyy on 2017/6/27.
 */
(function (window, angular) {
    var bmsApp = angular.module('bmsApp');

    bmsApp.config(['$httpProvider', function ($httpProvider) {
        $httpProvider.interceptors.push(['$q', '$rootScope', function ($q, $rootScope) {
            return {
                'request': function (config) {
                    config.tmeout = 60000;
                    config.headers['X-Requested-With'] = 'XMLHttpRequest';
                    return config;
                },
                'requestError': function (rejection) {
                    $rootScope.alert.alert({type: "danger", msg: "数据请求失败，请稍后重试"});
                    return $q.reject(rejection);
                },
                'response': function (response) {
                    return response;
                },
                'responseError': function (rejection) {
                    if (rejection && !isNaN(rejection.status) && rejection.status.toString().charAt(0) == 4) {
                        //TODO 根据不同的Status Code做不同的提示 http://baike.baidu.com/subview/1790469/1790469.htm
                    } else {
                        if (angular.isDefined(rejection.status)) {
                            $rootScope.alert.alert({type: 'danger', msg: '服务器错误，请稍后重试。(' + rejection.status + ')'});
                        }
                    }
                    return $q.reject(rejection);
                }
            }
        }])
    }]);
    bmsApp.config(['$resourceProvider', function ($resourceProvider) {
        $resourceProvider.defaults.stripTrailingSlashes = false;
        $resourceProvider.defaults.actions = {
            insert: {method: 'POST'},
            select: {method: 'GET'},
            selectAll: {method: 'GET', isArray: true},
            update: {method: 'PUT'},
            delete: {method: 'DELETE'},
            post: {method: 'POST'},
            query: {method: 'POST', isArray: true},
            get: {method: 'GET'},
            getAll: {method: 'GET', isArray: true}
        };
    }]);
    bmsApp.config(['$stateProvider', '$urlRouterProvider', function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise('/');
        //angular.forEach(window.menuData, function (menu) {
        //    var config = angular.merge({}, menu, {});
        //    $stateProvider.state(config);
        //});
        $.ajax({
            async: false,
            url: '/menu/state',
            type: 'get',
            dataType: 'json',
            success: function (data) {
                window.menuData = data;
                $urlRouterProvider.otherwise('/');
                angular.forEach(data, function (menu) {
                    if (menu.name === 'bms') {
                        menu = angular.merge({}, menu, {
                            "resolve": {
                                "authorize": ["authorization", function (authorization) {
                                    return authorization.authorize();
                                }]
                            }
                        });
                        $stateProvider.state(menu);
                    } else {
                        $stateProvider.state(menu);
                    }
                });
            },
            error: function (error) {
                console.log(error)
            }
        });
    }]);
    bmsApp.run(['$rootScope', '$state', '$stateParams', 'authorization', 'principal', 'AuthService', function ($rootScope, $state, $stateParams, authorization, principal, authService) {
        $rootScope.range = angular.range;
        $rootScope.toNgStyle = angular.toNgStyle;

        $rootScope.signout = authService.signout;

        //右下角信息提示
        $rootScope.alert = {
            alerts: [],
            alert: function (params) {
                params = angular.merge({}, {
                    type: 'info',
                    dismissOnTimeout: 5000
                }, params);
                this.alert.unshift(params);
            },
            close: function (index) {
                this.alert.splice(index, 1);
            }
        };
        //菜单
        $rootScope.nav = {
            header: {
                items: []
            },
            left: {
                items: []
            },
            leftSub: {
                items: []
            }
        };
        //url变化监听
        (function () {
            $rootScope.$on('$stateChangeStart', function (event, toState, toStateParams, fromState) {
                $rootScope.toState = toState;
                $rootScope.toStateParams = toStateParams;
                if (principal.isIdentityResolved()) {
                    authorization.authorize(fromState);
                }
            });
            $rootScope.$on('$viewContentLoading', function (event, viewConfig) {
            });
            $rootScope.$on('$stateChangeSuccess', function (event, toState, toParams, fromState, fromParams) {
                $rootScope.currentState = toState;
                (function () {
                    var headerNavs = [],
                        leftNavs = [], leftSubNavs = [],
                        currentMenu = getMenu(toState.name);

                    //先重置所有的激活状态
                    (function resetState() {
                        for (var i = 0; i < window.menuData.length; i++) {
                            window.menuData[i].active = false;
                        }
                    })();
                    //根据stateName获取state对象
                    function getMenu(name) {
                        for (var i = 0; i < window.menuData.length; i++) {
                            var menu = window.menuData[i];
                            if (name === menu.name) {
                                return menu;
                            }
                        }
                        return null;
                    }

                    //根据stateName获取最后一级父节点为m的state对象
                    function getMx(menu) {
                        if (angular.isObject(menu)) {
                            var parent = null;
                            for (var i = 0; i < window.menuData.length; i++) {
                                var obj = window.menuData[i];
                                if (menu.parent === obj.name) {
                                    parent = obj;
                                    obj.active = true;

                                    //获取三级菜单
                                    if (/m\d/.test(obj.parent)) {
                                        angular.forEach(window.menuData, function (menu) {
                                            if (menu.parent === obj.name) {
                                                if (currentMenu === menu) {
                                                    menu.active = true;
                                                }
                                                if (!(menu.forceHide === true || menu.forceShow === false)) {
                                                    leftNavs.push(menu);
                                                }
                                            }
                                        });
                                    }
                                    break;
                                }
                            }
                            if (parent === null) {
                                return null;
                            } else if (parent.name === 'm') {
                                return menu;
                            } else {
                                return getMx(parent);
                            }
                        } else {
                            return getMx(getMenu(menu));
                        }
                    }

                    if (currentMenu !== null) {
                        var mx = getMx(currentMenu);
                        if (angular.isObject(mx)) {
                            angular.forEach(window.menuData, function (menu) {
                                if (menu.parent === mx.name) {
                                    if (currentMenu === menu) {
                                        menu.active = true;
                                    }
                                    if (!(menu.forceHide === true || menu.forceShow === false)) {
                                        headerNavs.push(menu);
                                    }
                                }
                            })
                        }
                    }
                    $rootScope.nav.header.items = headerNavs;
                    $rootScope.nav.left.items = leftNavs;
                    $rootScope.nav.leftSub.items = leftSubNavs;
                    $rootScope.nav.currentStateName = currentMenu.name;
                    if (leftNavs.length > 0) {
                        $rootScope.thirdMenuName = leftNavs[0].parent;
                        for (var o = 0; o < headerNavs.length; o++) {
                            if (headerNavs[o].name === $rootScope.thirdMenuName) {
                                $rootScope.thirdMenuName = headerNavs[o].label;
                            }
                        }
                    }
                    document.title = "待完善";
                    //注入state层的默认值
                    for (var key in toParams || {}) {
                        var paramsCache = angular.fromJson(window.localStorage.getItem("_PARAMS_")) || {};
                        //当参数没有值时，先从本次缓存中获取参数，不存在再从菜单配置中获取默认值
                        if (toParams[key] === undefined) {
                            if (paramsCache[key] !== undefined) {
                                toParams[key] = paramsCache[key];
                            } else if (angular.isObject(currentMenu.defaultArgs)) {
                                toParams[key] = currentMenu.defaultArgs[key];
                            }
                        } else {
                            //当菜单有值时，将其缓存到localStorage
                            paramsCache[key] = toParams[key];
                            window.localStorage.setItem("_PARAMS_", angular.toJson(paramsCache))
                        }
                    }
                })();
            });
            $rootScope.$on('$viewContentLoaded', function (event, loadedState) {
            });
            $rootScope.$on('$stateNotFound', function (event, unfoundState, fromState, fromParams) {
            });
        })();
    }]);
})(window, angular);