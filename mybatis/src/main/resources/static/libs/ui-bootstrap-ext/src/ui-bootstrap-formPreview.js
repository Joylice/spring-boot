;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.formPreview', [])
            .controller('formPreviewCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$controller', 'T', 'BaseService', '$uibModalInstance', 'params', function ($rootScope, $scope, $state, $stateParams, $controller, T, service, $uibModalInstance, params) {

                $controller('BaseCtrl', {$scope: $scope, service: service});

                $scope.status.form.toolbar.buttons[0].active = false;
                $scope.status.form.toolbar.buttons[2].active = false;
                $scope.status = angular.merge(this, $scope.status, {
                    label:T.T('form.preView.label'),
                    columns: params.value,
                    form: {
                        toolbar:{
                            buttons: [
                                {},
                                {
                                    sort:1,
                                    onClick:function () {
                                        $uibModalInstance.dismiss();
                                    }
                                },{}
                            ]
                        }
                    }
                });
                $scope.status.init();
                $scope.status.form.label=""

            }])
})(window, angular);