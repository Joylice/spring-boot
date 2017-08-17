/**
 * Created by zhe on 28/10/2016.
 */
angular.module('ui.bootstrap.switch', [])
    .constant('uibSwitchConfig', {})
    .controller('UibSwitchController', ['$scope', '$element', '$attrs', '$parse', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function ($scope, $element, $attrs, $parse, $animate, $position, $document, $compile, $templateRequest) {
        var self = this,
            scope = $scope.$new();
        $element.addClass('uib-switch');
        this.init = function () {
            console.log("init");
        };
        this.toggle = function (open) {
            return scope.isOpen;
        };
        this.isOpen = function () {
            return scope.isOpen;
        };
    }])
    .directive('uibSwitch', function () {
        return {
            controller: 'UibSwitchController',
            link: function (scope, element, attrs, switchCtrl) {
                switchCtrl.init();
            }
        };
    })
    .directive('uibSwitchToggle', function () {
        return {
            restrict: 'A',
            require: '?^uibSwitch',
            link: function (scope, element, attrs) {
                element.addClass('uib-switch-toggle');
            }
        };
    });


