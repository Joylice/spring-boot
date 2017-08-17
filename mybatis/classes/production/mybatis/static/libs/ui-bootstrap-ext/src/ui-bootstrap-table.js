/**
 * Created by zhe on 28/10/2016.
 */
;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.table', ["ui.bootstrap"])
        .controller('tableSortController',['$scope', '$element', '$attrs',function ($scope, $element, $attrs) {
            var uibTableColumnName = $scope.$eval($attrs["uibTableSort"]);
            var uibTableOnSort = $scope.$eval($attrs["uibTableOnSort"]);
            var uibTableSortOrder = $scope.$eval($attrs["uibTableSortOrder"]);
            $scope.startOrder = false;
            this.init = function(){
                $element.bind('click', function () {
                    $scope.startOrder = true;
                    if(uibTableSortOrder == 'asc'){
                        angular.isFunction(uibTableOnSort) && uibTableOnSort(uibTableColumnName, uibTableSortOrder);
                        uibTableSortOrder = 'desc';
                    }else if(uibTableSortOrder == 'desc'){
                        angular.isFunction(uibTableOnSort) && uibTableOnSort(uibTableColumnName, uibTableSortOrder);
                        uibTableSortOrder ='asc';
                    }
                });
            }
        }])
        .directive('uibTableSort',function () {
            return{
                restrict:"A",
                controller:"tableSortController",
                link:function (scope,element,attrs,tableSortCtrl) {
                    tableSortCtrl.init();
                }
            }
        });

})(window, angular);
