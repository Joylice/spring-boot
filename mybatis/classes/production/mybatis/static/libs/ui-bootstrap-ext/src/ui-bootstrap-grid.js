/**
 * Created by zhe on 28/10/2016.
 */

;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.grid', [])
        .constant('uibGridConfig', {
            activeClass: 'active',
            toggleEvent: 'click'
        })
        .controller('UibGridController', ['$scope', '$element', '$attrs', '$parse', 'uibGridConfig', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', function ($scope, $element, $attrs, $parse, selectConfig, $animate, $position, $document, $compile, $templateRequest) {

            var self = this;
            var scope = $scope.$new();
            this.activeClass = selectConfig.activeClass || 'active';
            this.toggleEvent = selectConfig.toggleEvent || 'click';
            this.uibGridRowCount = scope.$eval($attrs.uibGridRowCount) || 2;


            this.init = function () {


                $scope.$watch($attrs["attrs.uibGridOptions"], function (uibGridOptions) {
                    scope.uibGridOptions = uibGridOptions;
                });
            };
            // ui > model

        }])
        .directive('uibGrid', function () {
            return {
                controller: 'UibGridController',
                link: function (scope, element, attrs, gridCtrl) {
                    element.addClass('uib-grid');
                    gridCtrl.init();
                },
                template: ""
            };
        })
        .directive('uibGridItem', function () {
            return {
                controller: 'UibGridController',
                link: function (scope, element, attrs, gridCtrl) {
                    element.addClass('uib-grid-item');
                    element.css({"width": (100 / gridCtrl.uibGridRowCount) + "%"});
                    gridCtrl.init();
                },
                template: ""
            };
        });
})(window, angular);