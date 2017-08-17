/**
 * Created by zhe on 28/10/2016.
 */

;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.nav', [])
        .constant('uibNavConfig', {
            activeClass: 'active',
            toggleClass: 'on-sub',
            toggleEvent: 'click'
        })
        .controller('UibNavController', ['$scope', '$element', '$attrs', '$parse', 'uibNavConfig', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function ($scope, $element, $attrs, $parse, selectConfig, $animate, $position, $document, $compile, $templateRequest) {

            var self = this;
            this.activeClass = selectConfig.activeClass || 'active';
            this.toggleClass = selectConfig.toggleClass || 'on-sub';
            this.toggleEvent = selectConfig.toggleEvent || 'click';
            this.uibNavList = [];
            this.uibNavSubList = [];
            $scope.onSub = false;

            //model > ui
            this.$render = function () {
                //强制收起菜单
                if($scope.forceOffSub){
                    $scope.onSub = false;
                    $scope.forceOffSub = false;
                    $element.hasClass(self.toggleClass) && $element.removeClass(self.toggleClass);
                    return;
                }

                var onSub = false;
                //判断当前是否在二级菜单
                for (var i = 0; i < self.uibNavSubList.length; i++) {
                    var uibNavSub = self.uibNavSubList[i];
                    if (uibNavSub === $scope.current) {
                        onSub = true;
                    }
                }
                //如果不在二级菜单
                if(!onSub){
                    var onTop = false;
                    //判断当前是否在一级菜单
                    for (var j = 0; j < self.uibNavList.length; j++) {
                        var uibNav = self.uibNavList[j];
                        if (uibNav === $scope.current) {
                            onTop = true;
                        }
                    }
                    //如果不在一级菜单
                    if(!onTop){
                        //即不在一级菜单 也不在二级菜单，则菜单不做任何反馈
                        return;
                    }
                }
                $scope.onSub = onSub;
                if ($scope.onSub) {
                    !$element.hasClass(self.toggleClass) && $element.addClass(self.toggleClass);
                } else {
                    $element.hasClass(self.toggleClass) && $element.removeClass(self.toggleClass);
                }
            };
        }])
        .directive('uibNav', function () {
            return {
                controller: 'UibNavController',
                link: function (scope, element, attrs, navCtrl) {
                    element.addClass('uib-nav');
                    //ui > model
                    scope.$watch(attrs["uibNav"], function (current) {
                        scope.current = current;
                        navCtrl.$render();
                    });
                }
            };
        })
        .directive('uibNavToggle', function () {
            return {
                restrict: 'A',
                require: '?^uibNav',
                link: function (scope, element, attrs, navCtrl) {
                    element.addClass('uib-nav-toggle');
                    element.on(navCtrl.toggleEvent, function(){
                        if(scope.onSub){
                            scope.forceOffSub = true;
                        }
                        navCtrl.$render();
                    })
                }
            };
        })
        .directive('uibNavList', function () {
            return {
                restrict: 'A',
                require: '?^uibNav',
                link: function (scope, element, attrs, navCtrl) {
                    element.addClass("uib-nav-list");
                }
            };
        })
        .directive('uibNavListItem', function () {
            return {
                restrict: 'A',
                require: '?^uibNav',
                link: function (scope, element, attrs, navCtrl) {
                    scope.$on('$destroy', function () {
                        navCtrl.uibNavList = [];
                    });
                    navCtrl.uibNavList.push(scope.$eval(attrs["uibNavListItem"]))
                }
            };
        })
        .directive('uibNavSubList', function () {
            return {
                restrict: 'A',
                require: '?^uibNav',
                link: function (scope, element, attrs, navCtrl) {
                    element.addClass("uib-nav-sub-list");
                }
            };
        })
        .directive('uibNavSubListItem', function () {
            return {
                restrict: 'A',
                require: '?^uibNav',
                link: function (scope, element, attrs, navCtrl) {
                    scope.$on('$destroy', function () {
                        navCtrl.uibNavSubList = [];
                    });
                    navCtrl.uibNavSubList.push(scope.$eval(attrs["uibNavSubListItem"]))
                }
            };
        });
})(window, angular);
