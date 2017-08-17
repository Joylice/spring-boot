/**
 * Created by zhe on 28/10/2016.
 */
;(function (window, angular) {
    'use strict';

    angular.module("uib/template/tree.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("uib/template/tree.html",
            '<div uib-dropdown>' +
            '<div uib-dropdown-toggle><span class="uib-tree-label">{{getLabel()}}</span><span class="caret"></span></div>' +
            '<div ui-tree class="col-md-12 col-sm-12 col-xs-12 dropdown-menu" data-drag-enabled="false">' +

            '<ul uib-dropdown-ztree ztree ztree-setting="uibTreeSetting" ztree-options="uibTreeOptions" ng-model="status.form.model[column.name]"></ul>' +
            '</div>' +
            '</div>'
        );
    }]);


    angular.module('ui.bootstrap.tree', [])
        .constant('uibTreeConfig', {
            activeClass: 'active',
            toggleEvent: 'click',
            uibTreeMode: 'single',
            optionValue: 'id',
            optionKey: 'name'
        })
        .controller('uibTreeController', ['$scope', '$element', '$attrs', '$parse', 'uibTreeConfig', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', 'BaseService', '$http',
            function ($scope, $element, $attrs, $parse, treeConfig, $animate, $position, $document, $compile, $templateRequest, service, $http) {
                var self = this;
                this.activeClass = treeConfig.activeClass;
                this.toggleEvent = treeConfig.toggleEvent;
                this.optionKey = 'name'//$scope.column.optionKey || treeConfig.optionKey;
                this.optionValue = 'id'//$scope.column.optionValue || treeConfig.optionValue;
                this.uibTreeMode = $scope.uibTreeMode = $scope.$eval($attrs.uibTreeMode) || treeConfig.uibTreeMode;
                this.autoClose = $scope.$eval($attrs.autoClose) || this.uibTreeMode === 'single';

                this.init = function (ngModelCtrl) {
                    $scope.getLabel = function () {
                        var label = '';
                        if (angular.isArray(ngModelCtrl.$modelValue)) {
                            for (var m = 0; m < ngModelCtrl.$modelValue.length; m++) {
                                if (m > 0) {
                                    label += ','
                                }
                                label += ngModelCtrl.$modelValue[m][self.optionKey];
                            }
                        }else if (angular.isObject(ngModelCtrl.$modelValue)) {
                            label = ngModelCtrl.$modelValue[self.optionKey];
                        }
                        return label === null ? $scope.placeholder : label;
                    };

                    $scope.$watch($attrs.uibTreeOptions, function (uibTreeOptions) {
                        $scope.uibTreeOptions = uibTreeOptions;
                    });
                    $scope.$watch($attrs.uibTreeSetting, function (uibTreeSetting) {
                        $scope.uibTreeSetting = _.merge({
                            check: {
                                enable: self.uibTreeMode === 'multiple'
                            }
                        }, uibTreeSetting);
                    });
                };
            }])
        .directive('uibTree', function () {
            return {
                scope: false,
                require: ['uibTree', 'ngModel'],
                controller: 'uibTreeController',
                link: function ($scope, element, attrs, ctrls) {
                    var treeCtrl = ctrls[0], ngModelCtrl = ctrls[1];
                    element.addClass("uib-tree");
                    treeCtrl.init(ngModelCtrl);
                },
                templateUrl: 'uib/template/tree.html'
            };
        }).directive('uibDropdownZtree', function () {
        return {
            controller: 'uibTreeController',
            scope: false,
            link: function ($scope, $element, attrs, treeCtrl) {
                $element.on(treeCtrl.toggleEvent, function (event) {
                    if (event.target === $element[0] || $element[0].contains(event.target)) {
                        // if (!treeCtrl.autoClose) {
                        //     event.stopPropagation();
                        // }
                        // if ('multiple' === treeCtrl.uibTreeMode) {
                        //     event.stopPropagation();
                        // }
                        event.stopPropagation();
                    }
                });
            }
        };
    });

})(window, angular);