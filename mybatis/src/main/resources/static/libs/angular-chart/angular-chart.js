/**
 * Created by zhe on 03/01/2017.
 */

;(function (window, angular, chart) {
    'use strict';
    angular.module('angular-chart', [])
        .constant('chartConfig', {
            defaultOptions: {
                grid: [{
                    left: '8%',
                    right: '8%',
                    bottom: '8%'
                }],
                legend: {
                    x: 'center'
                }
            }
        })
        .controller('ChartController', ['$scope', '$element', '$attrs', '$parse', 'uibGridConfig', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', '$timeout', '$templateCache', 'chartConfig', function ($scope, $element, $attrs, $parse, selectConfig, $animate, $position, $document, $compile, $templateRequest, $timeout, $templateCache, chartConfig) {
            this.init = function () {

                function getTemplate(id) {
                    var template = $templateCache.get(id);
                    $element.html(template);
                    $compile($element.contents())($scope);

                    var wrapper = $element[0].querySelector('.chart-wrapper');


                    var height = $scope.$eval($attrs.chartStyle).height;
                    var width = $scope.$eval($attrs.chartStyle).width;

                    if (parseFloat(height) > 0) {
                        wrapper.style.height = height;
                    }
                    if (parseFloat(width) > 0) {
                        wrapper.style.width = width;
                    }

                    return wrapper;
                }

                $scope.$watch($attrs.chartType, function (chartType) {
                    if (chartType) {
                        loadChart(chartType);
                    }
                });


                function loadChart(chartType) {
                    switch (chartType) {
                        case "ECHARTS":
                            (function () {
                                var wrapper = getTemplate("angular/chart/echarts.html");


                                var myChart = null;

                                var chartOptionDestroy = null;
                                var timeout = null;

                                $scope.$watch($attrs.chartStatus, function (status) {
                                    if ("active" === status) {
                                        if (myChart === null && timeout === null) {
                                            timeout = $timeout(function () {
                                                myChart = chart.init(wrapper);
                                                if (chartOptionDestroy !== null) {
                                                    chartOptionDestroy();
                                                }
                                                chartOptionDestroy = $scope.$watch($attrs["chart"], function (options, oldOptions) {
                                                    if (angular.isObject(options)) {
                                                        if (oldOptions && oldOptions.series && options.series.length !== oldOptions.series.length) {
                                                            myChart = chart.init(wrapper);
                                                        }
                                                        var option = angular.merge({}, chartConfig.defaultOptions, options);
                                                        myChart.setOption(option);
                                                    }
                                                }, true);
                                            }, 0);
                                        }
                                    } else {
                                        if (myChart !== null) {
                                            myChart.clear();
                                            myChart = null;
                                        }
                                        if (chartOptionDestroy !== null) {
                                            chartOptionDestroy();
                                        }
                                        if (timeout !== null) {
                                            try {
                                                timeout.cancel();
                                            } catch (ignored) {
                                                //TODO 偶尔会抛出异常，原因不明
                                            }
                                            timeout = null;
                                        }
                                    }
                                });
                            })();
                            break;
                    }
                }


            };
        }])
        .directive('chart', function () {
            return {
                controller: 'ChartController',
                link: function (scope, element, attrs, chartCtrl) {
                    element.addClass('angular-chart');
                    chartCtrl.init();
                }
            };
        }).run(["$templateCache", function ($templateCache) {

        $templateCache.put("angular/chart/echarts.html", '<div class="chart-wrapper echarts"></div>');
    }])
})(window, angular, echarts);