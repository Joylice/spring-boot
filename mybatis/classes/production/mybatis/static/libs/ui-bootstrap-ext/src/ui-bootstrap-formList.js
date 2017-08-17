/**
 * Created by wunana on 16/12/30.
 */
;(function (window, angular) {
    'use strict';
    angular.module('uib/template/formList.html', []).run(["$templateCache", function ($templateCache) {
        $templateCache.put('uib/template/formList.html',
            '<div class="form-list-content"></div>');
        $templateCache.put('uib/template/formList/a/single.html',
            '<a style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;" ng-if="obj.a == null || obj.a == true || column.a != \'dynamic\'" href="javascript:" ng-click="column.onClick(obj)" xmlns="http://www.w3.org/1999/html">' +
            '{{label}}' +
            '</a>' +
            '<span ng-if="obj.a == false && column.a == \'dynamic\'">{{label}}</span>'
        );
        $templateCache.put('uib/template/formList/a/multiple.html',
            '<a href="javascript:" ng-click="column.onClick(obj)" ng-repeat="o in obj[column.name]  track by $index">' +
            '{{o.name}},' +
            '</a>'
        );
        $templateCache.put('uib/template/formList/datetime/single.html',
            '<span>' +
            '{{label | date:\'yyyy-MM-dd HH:mm\'}}' +
            '</span>'
        );
        $templateCache.put('uib/template/formList/date/single.html',
            '<span>' +
            '{{obj[column.name] | date:\'yyyy-MM-dd\'}}' +
            '</span>'
        );
        $templateCache.put('uib/template/formList/boolean/single.html',
            '<span  class="fa" ng-class="{\'fa-check-circle\': obj[column.name], \'fa-times-circle\': !obj[column.name]}"></span>'
        );
        $templateCache.put('uib/template/formList/span/single.html',
            '<span style="display:block;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">' +
            '{{label}}' +
            '</span>'
        );
        $templateCache.put('uib/template/formList/img/single.html',
            '<div ng-repeat="item in imgData">' +
            '<div ng-thumb="{file: item._file, height: 100, width:100, deletable:false}" ng-model="item"></div>'+
            '</div>'
        );
        $templateCache.put('uib/template/formList/span/multiple.html',
            '<span ng-repeat="o in obj[column.name]  track by $index">' +
            '{{o.name}} ' +
            '</span>'
        );
        $templateCache.put('uib/template/formList/localeCode/single.html',
            '<span>{{obj[column.name] | T}}</span>'
        );
    }]);
    angular.module("ui.bootstrap.formList", [])
        .controller("formListController", ["$scope", "$attrs", "$templateCache", '$element', '$compile', function ($scope, $attrs, $templateCache, $element, $compile) {
            var ngModelCtrl = {$setViewValue: angular.noop};
            this.init = function (_ngModelCtrl) {
                ngModelCtrl = _ngModelCtrl;

                ngModelCtrl.$render = function () {
                    var modelValue = ngModelCtrl.$modelValue;
                    $scope.column = $scope.$eval($attrs.uibFormList);
                    var showType = $scope.column.showType || 'span';
                    var formType = $scope.column.formType || 'text';
                    var mode = $scope.column.mode || 'single';
                    var optionKey = $scope.column.optionKey;
                    var defaultValue = $scope.column.defaultValue;

                    var template = $templateCache.get('uib/template/formList/' + showType + '/' + mode + '.html');
                    angular.element($element[0].querySelector('.form-list-content')).html(template);
                    $compile($element.contents())($scope);
                    $scope.label = "";

                    if (angular.isDefined(defaultValue) && defaultValue !== null) {
                        $scope.label = defaultValue;
                    } else if (modelValue !== null && angular.isDefined(modelValue)) {
                        //进行判断获取表格显示内容
                        if (showType === 'a' && mode === 'single') {
                            if (optionKey) {
                                $scope.label = modelValue[optionKey]
                            } else {
                                if (modelValue.name) {
                                    $scope.label = modelValue.name;
                                } else {
                                    $scope.label = modelValue;
                                }
                            }
                        }
                        else if ((showType === 'span' || showType === 'datetime') && mode === 'single') {
                            if(formType !== 'select2'){
                                if (optionKey) {
                                    $scope.label = modelValue[optionKey];
                                } else {
                                    if (modelValue.name) {
                                        $scope.label = modelValue.name;
                                    } else {
                                        $scope.label = modelValue;
                                    }
                                }
                            }else if(formType === 'select2'){
                                if(modelValue){
                                    $scope.label = modelValue[0].name;
                                }
                            }
                        }
                        else if(showType === 'img' && mode === 'single'){
                            if (optionKey) {
                                $scope.label = modelValue[optionKey];
                            } else {
                                if (modelValue.queue) {
                                    $scope.imgData=modelValue.queue;
                                } else {
                                    console.log("没有选中图片");
                                }
                            }
                        }
                    }
                }
            };
        }])
        .directive("uibFormList", function () {
            return {
                restrict: "A",
                scope: true,
                require: ['uibFormList', '?ngModel'],
                controller: "formListController",
                link: function (attrs, element, scope, ctrls) {
                    var uibFormFieldCtrl = ctrls[0];
                    var ngModelCtrl = ctrls[1];
                    uibFormFieldCtrl.init(ngModelCtrl);
                },
                templateUrl: "uib/template/formList.html"
            };
        });

})(window, angular);
