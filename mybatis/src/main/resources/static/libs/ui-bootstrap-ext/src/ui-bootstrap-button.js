/**
 * Created by wunana on 4/25/17.
 */
;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.button', [])
        .controller('buttonController',['$scope', '$element', '$attrs',function ($scope, $element, $attrs) {


            var buttonName = $scope.$eval($attrs['uibButtonName']);
            $scope.isSubmitting = $scope.$eval($attrs['uibButtonSubmitting']);
            this.init = function(){
                //按钮点击
                $element.bind('click',function () {
                    $scope.$watch('isSubmitting',function () {
                        $element.html(buttonName+'<i class="fa fa-spinner fa-pulse"></i>');
                        if($scope.isSubmitting==false){
                            $element.html(buttonName);
                        }else if($scope.isSubmitting==true){
                            $element.html(buttonName+'<i class="fa fa-spinner fa-pulse"></i>');
                        }
                    },true);
                });
            }
        }])
        .directive("uibButton", function () {
            return {
                restrict: "AE",
                replace:'false',
                controller:'buttonController',
                link:function (scope,element,attrs,buttonCtrl) {
                    buttonCtrl.init();
                }
            };
        })

})(window, angular);