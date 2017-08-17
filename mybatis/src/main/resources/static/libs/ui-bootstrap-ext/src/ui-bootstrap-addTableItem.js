/**
 * Created by wunana on 2017/6/8.
 */
//自定义表单--表格
;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.addTableItem', [])
        .controller('addTableItemCtrl', ['$rootScope', '$scope', '$state', '$stateParams', '$controller', 'T', 'BaseService', '$uibModalInstance', 'params','FileUploader','action', function ($rootScope, $scope, $state, $stateParams, $controller, T, service, $uibModalInstance, params,FileUploader,action) {
            $scope.status = {
                label:"添加表单数据",
                columns: params.value,
                init: function () {
                    if(action === 'add'){
                        $scope.status.form.add.init();
                    }else if(action === 'edit'){
                        $scope.status.form.edit.init();
                    }
                    angular.isDefined($scope.status.onInit) && $scope.status.onInit();
                    $scope.listInfoLoad = true;
                    for(var i=0;i<$scope.status.columns.length;i++){
                       var column = $scope.status.columns[i];
                        if(column.formType === 'img'){
                            $scope.status.form.model[column.name] = new FileUploader({
                                url: '/document',
                                onAfterAddingFile: function (item) {
                                    item.formData = [{
                                        name: item._file.name,
                                        size: item._file.size,
                                        lastModified: item._file.lastModified,
                                        deleteFlag: false,
                                        validFlag: true,
                                        suffix: item._file.name.substring(item._file.name.lastIndexOf('.') + 1, item._file.name.length) //文件后缀名
                                    }];
                                    item.upload();
                                },
                                onSuccessItem: function (item, response, status, header) {
                                    item.documentId = header.location.substring(header.location.lastIndexOf('/') + 1);
                                },
                                onErrorItem: function () {
                                    $rootScope.alert.alert({type: 'danger', msg:T.T('uploadFilefailure.label')});
                                }
                            });
                        }
                    }
                },
                form: {
                    add: {
                        init: function () {
                            $scope.status.form.toolbar.buttons[2].active = false;
                            $scope.status.form.label = T.T('baseAdded.label');
                            var model = {};
                            angular.forEach($scope.status.columns, function (column) {
                                if (angular.isDefined(column.defaultValue)) {
                                    model[column.name] = column.defaultValue;
                                }
                                column.emptyMess = false;
                                column.isFocus = false;
                            });
                            for (var i = 0; i < $scope.status.columns.length; i++) {
                                var column = $scope.status.columns[i];
                                column.emptyMess = false;
                                column.isFocus = false;
                                column.warnMess = false;
                            }
                            $scope.status.form.model = model;
                            $scope.status.form.onInit && $scope.status.form.onInit();
                            $scope.status.form.add.onInit && $scope.status.form.add.onInit();
                        },
                        //新增表单初始化后的回调
                        onInit: angular.noop
                    },
                    edit:{
                        init:function(){
                            $scope.status.columns = params.column;
                            //深拷贝一个对象,跳过文件对象
                            for(var i=0;i<$scope.status.columns.length;i++){
                                if($scope.status.columns[i].formType === 'img'){
                                   var column = $scope.status.columns[i];
                                    $scope.imgQueue = params.value[column.name].queue;
                                    params.value[column.name] = "";//给img对象置为空
                                    $scope.status.form.model =angular.merge({},params.value);
                                }
                            }

                        }
                    },
                    // 表单提交时进行校验 isFocus:表单是否获取过焦点
                    _validator: function () {
                        var __isValidator = false;
                        for (var i = 0; i < $scope.status.columns.length; i++) {
                            var column = $scope.status.columns[i];
                            if (column.required == true) {
                                if (column.formType !== 'tree' && column.formType !== 'datetime' && column.formType !== 'boolean' && column.formType !== 'date' && column.formType !== 'file' && column.formType !== 'img') {
                                    if (column.isFocus != true) {
                                        if (column.inputText) {
                                            column.emptyMess = false;
                                        } else {
                                            column.emptyMess = true;
                                            __isValidator = true;
                                            return !__isValidator;
                                        }
                                    } else if (column.isFocus == true) {
                                        if (undefined == column.inputText || "" == column.inputText) {
                                            column.emptyMess = true;
                                            __isValidator = true;
                                            return !__isValidator;
                                        } else if (undefined != column.inputText || "" != column.inputText) {
                                            if (column.formType !== 'select') {
                                                if (column.validate) {
                                                    var isFunction = function (fn) {
                                                        return Object.prototype.toString.call(fn) === '[object Function]';
                                                    }
                                                    var isURL = function (url) {
                                                        var strRegex = "^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}\.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z]\.com|net|cn|cc (:s[0-9]{1-4})?/$";
                                                        var re = new RegExp(strRegex);
                                                        if (re.test(url)) {
                                                            return true;
                                                        } else {
                                                            return false;
                                                        }
                                                    }
                                                    var isEmail = function (email) {
                                                        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
                                                        var isok = reg.test(email)
                                                        return isok;
                                                    }
                                                    switch (column.formType) {
                                                        case 'long', 'double':
                                                            if (column.inputText < column.validate.min || column.inputText > column.validate.max) {
                                                                column.warnMess = true;
                                                                __isValidator = true;
                                                                return !__isValidator;
                                                            } else {
                                                                column.warnMess = false;
                                                                __isValidator = false;
                                                            }
                                                            break;
                                                        case 'date':
                                                            console.log("date类型");
                                                            break;
                                                        case 'url':
                                                            if (isFunction(column.validate)) {
                                                                if (isURL(column.inputText)) {
                                                                    column.warnMess = false;
                                                                } else {
                                                                    column.warnMess = true;
                                                                    __isValidator = true;
                                                                    return !__isValidator;
                                                                }
                                                            }
                                                            break;
                                                        case 'email':
                                                            if (isFunction(column.validate)) {
                                                                if (isEmail(column.inputText)) {
                                                                    column.warnMess = false;
                                                                } else {
                                                                    column.warnMess = true;
                                                                    __isValidator = true;
                                                                    return !__isValidator;
                                                                }
                                                            }
                                                            break;
                                                        default:
                                                            if (column.inputText.length < column.validate.minLength || column.inputText.length > column.validate.maxLength) {
                                                                column.warnMess = true;
                                                                __isValidator = true;
                                                                return !__isValidator;
                                                            } else {
                                                                column.warnMess = false;
                                                            }
                                                            break;
                                                    }
                                                } else {
                                                    var isURL = function (url) {
                                                        var strRegex = "^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}\.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z]\.com|net|cn|cc (:s[0-9]{1-4})?/$";
                                                        var re = new RegExp(strRegex);
                                                        if (re.test(url)) {
                                                            return true;
                                                        } else {
                                                            return false;
                                                        }
                                                    }
                                                    var isEmail = function (email) {
                                                        var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
                                                        var isok = reg.test(email)
                                                        return isok;
                                                    }
                                                    switch (column.formType) {
                                                        case 'url':
                                                            if (isURL(column.inputText)) {
                                                                column.warnMess = false;
                                                            } else {
                                                                column.warnMess = true;
                                                                __isValidator = true;
                                                                return !__isValidator;
                                                            }

                                                            break;
                                                        case 'email':
                                                            if (isEmail(column.inputText)) {
                                                                column.warnMess = false;
                                                            } else {
                                                                column.warnMess = true;
                                                                __isValidator = true;
                                                                return !__isValidator;
                                                            }
                                                            break;
                                                            __isValidator = false;
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }
                                else if (column.formType === 'tree') {
                                    if (column.inputText) {
                                        if (column.inputText.length) {
                                            column.emptyMess = false;
                                        }
                                    } else {
                                        column.emptyMess = true;
                                        __isValidator = true;
                                        return !__isValidator;
                                    }
                                } else if (column.formType === 'datetime' || column.formType === 'date') {
                                    if (column.inputText) {
                                        column.emptyMess = false;
                                    } else {
                                        column.emptyMess = true;
                                        __isValidator = true;
                                        return !__isValidator;
                                    }
                                } else if (column.formType === 'boolean') {
                                    if (column.defaultValue === null || column.defaultValue === "") {
                                        column.emptyMess = true;
                                        __isValidator = true;
                                        return !__isValidator;
                                    } else {
                                        column.emptyMess = false;
                                    }
                                }
                                else if (column.formType === 'img' || column.formType === 'file') {
                                    if ($scope.status.form.model[column.name].queue.length === 0) {
                                        column.emptyMess = true;
                                        __isValidator = true;
                                        return !__isValidator;
                                    } else {
                                        column.emptyMess = false;
                                    }
                                }
                            }
                        }
                        return !__isValidator;
                    },
                    isSubmitting: false,
                    toolbar:{
                        buttons : [
                            {
                                name: T.T('save.label'),
                                sort: 1,
                                cls: "btn-primary",
                                onClick:function () {
                                        //表单校验
                                        if (!$scope.status.form._validator()) {
                                            return;
                                        }
                                    var model = $scope.status.form.model;

                                    if (model === false) {
                                            return;
                                        }
                                        if (action === 'add') {
                                            $scope.status.form.isSubmitting = true;
                                            if($rootScope.test==null){
                                                $rootScope.test = model;
                                            }else {
                                                $rootScope.test.splice($rootScope.test.length,0,model);
                                            }
                                        }else if(action === 'edit'){
                                            $rootScope.test.splice(params.index,1,model);
                                        }
                                    $uibModalInstance.dismiss();
                                }
                            },
                            {
                                name: T.T('cancel.label'),
                                sort: 2,
                                onClick:function () {
                                    if(action === 'edit'){
                                        $scope.status.form.model = params.value
                                        for(var i=0;i<$scope.status.columns.length;i++){
                                            if($scope.status.columns[i].formType === 'img'){
                                                var column = $scope.status.columns[i];
                                                $scope.status.form.model[column.name] = $scope.imgQueue;
                                            }
                                        }
                                    }
                                    $uibModalInstance.dismiss();
                                }
                            },
                            {active:false}
                        ]
                    },
                },
            }
            $scope.status.init();

        }])
})(window, angular);