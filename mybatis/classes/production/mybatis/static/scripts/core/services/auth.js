/**
 * Created by zhe on 7/14/16.
 */
;(function (window, angular) {
    'use strict';
    var core = angular.module("core");

    core.service('AuthService', ['$rootScope', '$state', 'principal', '$http', function ($rootScope, $state, principal, $http) {
        return {
            signin: function (params, successCallback, errorCallback) {
                $http({
                    method: 'POST',
                    url: '/signin',
                    params: params
                }).then(successCallback, errorCallback);
            },
            signout: function () {
                try {
                    $http({
                        method: 'POST',
                        url: '/signout'
                    })
                } catch (ignored) {

                }
                principal.deauthenticate();
                $state.go('signin');
            }
        }
    }]);
})(window, angular);