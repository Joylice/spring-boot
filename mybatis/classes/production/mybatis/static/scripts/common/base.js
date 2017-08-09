/**
 * Created by cuiyy on 2017/6/28.
 */
(function (window,angular) {
   var common=angular.module('common',[]);

   common.service('BaseService',['$rootScope','$resource','$q','T',function ($rootScope,$resource,$q,T) {
       return{
           /**
            * 数据列表查询
            * @param base
            * @param params 查询数据的条件，可传分页等参数
            * @returns {Promise}
            */
           selectAll: function (base, params) {
               var deferred = $q.defer();
               $resource('/' + base).selectAll(params, function (data, getHeader) {
                   deferred.resolve({data: data, getHeader: getHeader});
               }, function (response) {
                   deferred.reject(response);
               });
               return deferred.promise;
           },
           /**
            * 通用单挑数据获取接口
            * @param base
            * @param params 请求的参数，至少传action，
            * @returns {Promise}
            */
           get: function (base, params) {
               var deferred = $q.defer();
               $resource('/' + base + '/:action', {action: '@action'}).get(params, function (data, getHeader) {
                   deferred.resolve({data: data.toJSON(), getHeader: getHeader});
               }, function (response) {
                   deferred.reject(response);
               });
               return deferred.promise;
           }
       }
   }])

})(window,angular);