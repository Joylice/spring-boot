/**
 * Created by wunana on 16/12/28.
 */
;(function (window, angular) {
    'use strict';
    angular.module('static/scripts/common/showFrom.html', []).run(["$templateCache", function ($templateCache) {
        $templateCache.put('static/scripts/common/showFrom.html',
            '<label class="col-sm-2 control-label">{{formField.title}}</label>' +
            '<div ng-switch="formField.showType" class="col-sm-10">' +
            '<a ng-switch-when="a" ng-if="formField.mode !== \'multiple\'" class="show-control-1" href="javascript:">' +
            '{{formContext}}' +
            '</a>' +
            '   <a ng-switc-when="a" ng-if="formField.mode === \'multiple\'" class="show-control-2" href="javascript:" ng-click="formField.onClick(status.show.model)"' +
            '   ng-repeat="o in status.show.model[formField.name]  track by $index">' +
            '{{formContext}}' +
            '</a>' +
            '<span ng-switch-when="boolean" class="show-control fa"' +
            '   ng-class="{\'fa-check-circle\': status.show.model[formField.name], \'fa-times-circle\': !status.show.model[formField.name]}">' +
            '{{formContext}}' +
            '</span>' +
            '<span ng-switch-default ng-if="formField.mode !== \'multiple\'" class="show-control-3">' +
            '{{formContext}}' +
            '</span>' +
            '<span ng-switch-default ng-if="formField.mode === \'multiple\'" class="show-control-4"' +
            '   ng-repeat="o in status.show.model[formField.name]  track by $index">' +
            '{{formContext}}' +
            '</span>' +
            '</div>'
        )
    }]);
    angular.module("ui.bootstrap.formShow", [])
        .controller("formShowController", ["$scope", "$attrs", function ($scope, attrs) {
            var formField = $scope.$eval(attrs["uibFormField"]);
            var statusShow = $scope.$eval(attrs["uibFormParams"]);
            $scope.formField = formField;
            $scope.formContext = "";
            var ngModelCtrl = {$setViewValue: angular.noop};

            this.init = function (_ngModelCtrl) {
                ngModelCtrl = _ngModelCtrl;
                console.log(ngModelCtrl);
                var value = ngModelCtrl.$modelValue;
                // $isEmpty(value){
                //
                // }

                ngModelCtrl.$formatters.push(function (value) {

                    $scope.formContext = ngModelCtrl.$modelValue;
                    if ($scope.formField.optionKey) {
                        ngModelCtrl.$modelValue = ngModelCtrl.$formatters.push(function (value) {
                            $scope.formContext = ngModelCtrl.$modelValue[$scope.formField.optionKey];
                            // console.log($scope.formContext);
                        })
                    }
                })
            }

        }])
        .directive("uibFormField", function () {
            return {
                restrict: "AE",
                require: ['uibFormField', '?ngModel'],
                controller: "modelController",
                link: function (attrs, element, scope, ctrls) {
                    if (!ctrls) {
                        return;
                    }
                    var uibFormFieldCtrl = ctrls[0];
                    var ngModelCtrl = ctrls[1];
                    uibFormFieldCtrl.init(ngModelCtrl);
                },
                templateUrl: 'static/scripts/common/showFrom.html'
            };
        });

})(window, angular);