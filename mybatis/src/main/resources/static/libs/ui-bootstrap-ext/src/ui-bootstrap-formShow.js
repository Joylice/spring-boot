/**
 * Created by wunana on 16/12/30.
 */
;(function (window, angular) {
    'use strict';
    angular.module('uib/template/formShow.html', []).run(["$templateCache", function ($templateCache) {
        $templateCache.put('uib/template/formShow.html', '' +
            '<label class="col-sm-2 control-label">{{column.title}}</label>' +
            '<span class="col-md-8 col-sm-3 form-show-content"></span>');
        $templateCache.put('uib/template/formShow/a/single.html',
            '<span class="show-control" >{{label}}</span>'
        );
        $templateCache.put('uib/template/formShow/a/multiple.html',
            '<div><span class="show-control" ng-repeat="o in status.show.model[column.name]  track by $index">{{o.name}}</span></div>'
        );
        $templateCache.put('uib/template/formShow/custom/single.html',
            '<span  class="show-control" bind-html-compile="column.template.show"></span>'
        );
        $templateCache.put('uib/template/formShow/boolean/single.html',
            '<span class="show-control fa" ng-class="{\'fa-check-circle\': status.show.model[column.name], \'fa-times-circle\': !status.show.model[column.name]}"></span>'
        );
        $templateCache.put('uib/template/formShow/text/single.html',
            '<span class="show-control">{{label}}</span>'
        );
        $templateCache.put('uib/template/formShow/datetime/single.html',
            '<span class="show-control">{{label | date:\'yyyy/MM/dd HH:mm\'}}</span>'
        );
        $templateCache.put('uib/template/formShow/date/single.html',
            '<span class="show-control">{{status.show.model[column.name] | date:\'yyyy/MM/dd\'}}</span>'
        );
        $templateCache.put('uib/template/formShow/custom/single.html',
            '<span class="col-md-8" bind-html-compile="column.template.show"></span>'
        );
        $templateCache.put('uib/template/formShow/text/multiple.html',
            '<div><span class="show-control" ng-repeat="o in status.show.model[column.name]  track by $index">{{o.name}}</span></div>'
        );
        $templateCache.put('uib/template/formShow/file/multiple.html',
            '<div class="col-md-8">' +
            '<table class="table table-striped">' +
            '<thead><tr class="item">' +
            '<th>{{\'form.fileName.label\'|T}}</th><th>{{\'form.operation.label\'|T}}</th>' +
            '</tr></thead>' +
            '<tbody>' +
            '<tr class="item" ng-repeat="item in status.show.model[column.name]">' +
            '<td ng-bind="item.name"></td>' +
            '<td><a ng-click="status.show.download(item.id)">{{\'baseDownload.label\'|T}}</a></td>' +
            '</tr></tbody></table></div>'
        );
        $templateCache.put('uib/template/formShow/img/single.html',
            '<span class="imageShow col-md-3 col-sm-3 col-xs-3">' +
            '<img ng-click="status.show.popImage(status.show.model[column.name])" class="imgItem col-md-12 col-sm-12 col-xs-12" data-ng-src="http://localhost:9999/document/getImg?id={{status.show.model[column.name].id}}"/>' +
            '</span>'
        );
        $templateCache.put('uib/template/formShow/img/multiple.html',
            '<div><span ng-repeat="o in status.show.model[column.name]  track by $index">' +
            '<span class="imageShow col-md-3 col-sm-3 col-xs-3">' +
            '<img ng-click="status.show.popImage(o, false)" class="imgItem col-md-12 col-sm-12 col-xs-12" data-ng-src="http://localhost:9999/document/getImg?id={{o.id}}"/>' +
            '</span>' +
            '</span></div>'
        );
    }]);
    angular.module("ui.bootstrap.formShow", [])
        .controller("formShowController", ["$scope", "$attrs", "$templateCache", '$element', '$compile', function ($scope, $attrs, $templateCache, $element, $compile) {
            var ngModelCtrl = {$setViewValue: angular.noop};
            this.init = function (_ngModelCtrl) {
                ngModelCtrl = _ngModelCtrl;
                ngModelCtrl.$render = function () {
                    var modelValue = ngModelCtrl.$modelValue;
                    $scope.column = $scope.$eval($attrs.uibFormShow);
                    var showType = $scope.column.showType || 'text';
                    var mode = $scope.column.mode || 'single';
                    var optionKey = $scope.column.optionKey;
                    var template = $templateCache.get('uib/template/formShow/' + showType + '/' + mode + '.html');
                    angular.element($element[0].querySelector('.form-show-content')).html(template);
                    $compile($element.contents())($scope);

                    $scope.label = "";

                    if (modelValue != null && angular.isDefined(modelValue)) {
                        if (showType === 'a' && mode === 'single') {
                            if (optionKey) {
                                $scope.label = modelValue[optionKey];
                            } else {
                                if (modelValue.name) {
                                    $scope.label = modelValue.name;
                                } else {
                                    $scope.label = modelValue;
                                }
                            }
                            if (!$scope.$$phase) {
                                $scope.$apply();
                            }
                        } else if ((showType === 'text' || showType === 'datetime') && mode === 'single') {
                            if (optionKey) {
                                $scope.label = modelValue[optionKey];
                            } else {
                                if (modelValue.name) {
                                    $scope.label = modelValue.name;
                                } else {
                                    $scope.label = modelValue;
                                }
                            }
                        }
                    }
                }
            };
        }])
        .directive("uibFormShow", function () {
            return {
                restrict: "A",
                scope: true,
                require: ['uibFormShow', '?ngModel'],
                controller: "formShowController",
                link: function (attrs, element, scope, ctrls) {
                    var uibFormShowCtrl = ctrls[0];
                    var ngModelCtrl = ctrls[1];
                    uibFormShowCtrl.init(ngModelCtrl);
                },
                templateUrl: "uib/template/formShow.html"
            };
        });


})(window, angular);