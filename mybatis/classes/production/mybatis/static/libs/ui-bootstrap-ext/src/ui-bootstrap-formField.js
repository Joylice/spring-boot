/**
 * Created by wunana on 16/12/28.
 */
/*渲染表单页面模板*/
;(function (window, angular) {
    'use strict';
    angular.module('uib/template/formField.html', []).run(["$templateCache", function ($templateCache) {
        $templateCache.put('uib/template/formField.html', '' +
            '<label class="col-md-2 col-sm-2 control-label"><i ng-if="column.required" class="fa fa-asterisk" style="color: #f66;font-size: 0.5em;"></i>&nbsp;{{column.title}}</label>' +
            '<div class="col-md-9 col-sm-9 form-field-content"></div>');
        $templateCache.put('uib/template/formField/password.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5"><input placeholder="{{column.placeholder}}" type="password" class="form-control" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=true" placeholder="{{column.placeholder}}"></div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '<span ng-show="column.warnMess" class="alertMess" >{{\'form.passwordLength.label\'|T}}{{column.validate.minLength}}~{{column.validate.maxLength}}</span>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/a.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5"><input placeholder="{{column.placeholder}}" type="text" class="form-control" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=true"></div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/text.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5"><input placeholder="{{column.placeholder}}" type="text" class="form-control" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=true"></div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.warnMess" class="alertMess" >{{\'form.pleaseEnterTheLength.label\'|T}}{{column.validate.minLength}}~{{column.validate.maxLength}}{{\'form.string.label\'|T}}</span>' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/textarea.html',
            '<div class="row">' +
            '<div class="col-md-6 col-sm-6 col-xs-6"><textarea placeholder="{{column.placeholder}}" type="textarea" rows="8" cols="100" class="form-control" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=true" ></textarea></div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/boolean.html',
            '<div class="row">' +
            '<div class="col-md-5">' +
            '<div class="btn-group">' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = true"  ng-model="status.form.model[column.name]" uib-btn-radio="true" >{{\'true.label\'|T}}</label>' +
            '  <label class="btn btn-default" ng-click="column.defaultValue = false" ng-model="status.form.model[column.name]" uib-btn-radio="false">{{\'false.label\'|T}}</label>' +
            '</div>' +
            '</div>' +
            '<div class="col-md-6">' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/select.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<div class="col-md-12 col-sm-12 col-xs-12" uib-select uib-select-options="column.options" uib-select-mode="column.mode" uib-select-option-key="column.optionKey" uib-select-option-value="column.optionValue" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=false"></div>' +
            '</div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/select/multiple.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<div class="col-md-12 col-sm-12 col-xs-12" uib-select uib-select-options="column.options" uib-select-mode="column.mode" uib-select-option-key="column.optionKey" uib-select-option-value="column.optionValue" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=false"></div>' +
            '</div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/select2.html',
        '<div class="row form-select2">' +
        '<div class="col-md-5 col-sm-5 col-xs-5">' +
               '<ui-select multiple limit="1" tagging="tagTransform" tagging-label="false" ng-model="status.form.model[column.name]" theme="selectize" ng-focus="column.isFocus=false" style="padding-left: 0px; padding-right: 0px;">'+
                  '<ui-select-match placeholder="{{column.placeholder}}">{{$select.selected[0].name}}</ui-select-match>'+
                  '<ui-select-choices repeat="selector in column.options| filter:$select.search">'+
                  '<span ng-bind-html="selector.name | highlight: $select.search"></span>'+
                  '</ui-select-choices>'+
               '</ui-select></div>' +
        '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
        '</div>' +
        '<div class="row">' +
        '<span class="validateMess">{{column.title}}{{\'form.selectOrInput.label\'}}</span>' +
        '</div>'

        );
        $templateCache.put('uib/template/formField/tree/multiple.html',
            '<div class="multipleTree row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<div uib-tree uib-tree-options="column.options" uib-tree-setting="column.setting" uib-tree-mode="column.mode" uib-tree-option-key="column.optionKey" uib-tree-option-value="column.optionValue" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=false"></div>' +
            '</div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/tree.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<div uib-tree uib-tree-options="column.options" uib-tree-setting="column.setting" uib-tree-mode="column.mode" uib-tree-option-key="column.optionKey" uib-tree-option-value="column.optionValue" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=false"></div>' +
            '</div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/file.html',
            '<div class = "row">' +
            '<div class = "col-md-5 col-sm-5 col-xs-5">' +
            '<div class="col-sm-8 file-upload-border"><input placeholder="{{column.placeholder}}" class="form-control" ng-model="status.form.model[column.name].file.name" disabled="disabled"/></div>' +
            '<div class="file-upload-btn-border btn btn-primary col-sm-4">' +
            '<span>{{\'basePleaseChoose.label\'|T}}</span><input type="file" class="upload" nv-file-select="" uploader="status.form.model[column.name]" required  ng-focus="column.isFocus=true"/></div>' +
            '</div>' +
            '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/design.html',
            '<div class = "row">' +
            '<div class = "col-md-5 col-sm-5 col-xs-5">' +
            '<div class="col-sm-8 file-upload-border">' +
            '<input placeholder="{{column.placeholder}}" class="form-control" ng-model="status.form.model[column.name].file.name" disabled="disabled"/></div>' +
            '<div class="file-upload-btn-border btn btn-primary col-sm-4">' +
            '<span>{{\'workflowOnlineDesign.label\'|T}}</span><input class="upload" required/>' +
            '</div></div>'
        );
        $templateCache.put('uib/template/formField/file/multiple.html',
            '<div class="row">'+
                '<div class="col-md-5 col-sm-5">'+
                    '<div class="file-upload-border">' +
                    '<div class="file-upload-btn-border btn btn-primary"> <span>{{\'form.SelectAttachment.label\'|T}}</span><input type="file" class="upload" nv-file-select="" ng-model="status.form.model[column.name]" uploader="status.form.model[column.name]" multiple required/></div>' +
                    '</div>'+
                '</div>'+
                '<div class="col-md-6 validateMess"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>'+
            '</div>'+
        '<div class="col-md-8">'+
            '<table class="table table-striped" ng-if="status.form.model[column.name].queue.length != 0">' +
            '<thead><tr class="item">' +
            '<th>{{\'form.fileName.label\'|T}}</th><th>{{\'form.operation.label\'|T}}</th>' +
            '</tr></thead>'+
            '<tbody>' +
            '<tr class="item" ng-repeat="item in status.form.model[column.name].queue">' +
            '<td ng-bind="item._file.name"></td>' +
            '<td><a ng-click="item.remove()">{{\'baseDelete.label\'|T}}</a></td>' +
            '</tr></tbody></table>'+
        '</div>'
        );
        $templateCache.put('uib/template/formField/img.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5">' +
            '<div class="file-upload-border"></div>' +
            '<div class="file-upload-btn-border btn btn-primary"> <span>{{\'formField.selectPicture.label\'|T}}</span><input type="file" class="upload" accept="image/*" nv-file-select="" ng-model="status.form.model[column.name]" uploader="status.form.model[column.name]" required/></div>' +
            '</div>' +
            '<div class="col-md-6 col-sm-6"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>' +
            '<div ng-repeat="item in status.form.model[column.name].queue">' +
            '<div class="col-md-3" ng-click="status.form.imgPreview(item)" ng-thumb="{file: item._file, height: 100, width:100, deletable: true}" ng-model="item"></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/img/multiple.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5">' +
            '<div class="file-upload-border"></div>' +
            '<div class="file-upload-btn-border btn btn-primary"> <span>{{\'formField.selectPicture.label\'|T}}</span><input type="file" class="upload" accept="image/*" nv-file-select="" ng-model="status.form.model[column.name]" uploader="status.form.model[column.name]" multiple required/></div>' +
            '</div>' +
            '<div class="col-md-6 col-sm-6"><span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span></div>' +
            '</div>' +
            '<div ng-repeat="item in status.form.model[column.name].queue">' +
            '<div class="col-md-3" ng-click="status.form.imgPreview(item)" ng-thumb="{file: item._file, height: 100, width:100, deletable: true}" ng-model="item"></div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/long.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<input placeholder="{{column.placeholder}}" class="form-control" ng-model="status.form.model[column.name]" onkeyup="value=value.replace(/[^\\d]/g,\'\')" ng-focus="column.isFocus=true" >' +
            '</div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.warnMess" class="alertMess" >{{\'form.PleaseEnterTheSizeAt.label\'|T}}{{column.validate.min}}~{{column.validate.max}}{{\'form.value.label\'|T}}</span>' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/double.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<input placeholder="{{column.placeholder}}" class="form-control" ng-model="status.form.model[column.name]" onkeyup="isDouble(this)" ng-focus="column.isFocus=true">' +
            '</div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.warnMess" class="alertMess" >{{\'form.PleaseEnterTheSizeAt.label\'|T}}{{column.validate.min}}~{{column.validate.max}}{{\'form.value.label\'|T}}</span>' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/date.html',
            '<div class=" row datetime">' +
            '<div class="col-md-5 col-sm-5 col-xs-5"> ' +
            '<p class="input-group"> ' +
            '<input type="text" class="form-control" style="width: 100%; height: inherit" uib-datepicker-popup="{{column.formats[1]}}" ng-model="status.form.model[column.name]" is-open="popup1.opened" ' +
            'datepicker-options="column.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats" readonly="readonly" ng-focus="column.isFocus=true"/> ' +
            '<span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="popup1.opened = true;"> <i class="fa fa-calendar"></i></button></span>' +
            '</p>' +
            '</div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '</div></div>'
        );
        $templateCache.put('uib/template/formField/datetime.html',
            '<div class=" row datetime clocktime">' +
            '<div class="col-md-5 col-sm-5 col-xs-5">' +
            '<p class="input-group"> ' +
            '<input type="text" uib-datetimepicker-popup="{{column}}" ng-model="status.form.model[column.name]" is-open="popup1.opened"' +
            'datepicker-options="column.dateOptions" ng-required="true" close-text="Close" alt-input-formats="altInputFormats" class="form-control" readonly="readonly" ng-focus="column.isFocus=true"/>' +
            '<span class="input-group-btn"><button type="button" class="btn btn-default" ng-click="popup1.opened = true;"> <i class="fa fa-clock-o"></i> </button></span>' +
            '</p>' +
            '</div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/url.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5"><input placeholder="{{column.placeholder}}" class="form-control" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=true"></div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.warnMess" class="alertMess" >{{\'form.PleaseEnter.label\'|T}}http://xxx.com</span>' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/email.html',
            '<div class="row">' +
            '<div class="col-md-5 col-sm-5 col-xs-5"><input placeholder="{{column.placeholder}}" class="form-control" ng-model="status.form.model[column.name]" ng-focus="column.isFocus=true"></div>' +
            '<div class="col-md-6 validateMess">' +
            '<span ng-show="column.warnMess" class="alertMess" >{{\'form.PleaseEnter.label\'|T}}xxxxx@xx.com</span>' +
            '<span ng-show="column.emptyMess" class="alertMess" >{{column.title}}{{\'form.canNotBeEmpty.label\'|T}}</span>' +
            '</div>' +
            '</div>'
        );
        $templateCache.put('uib/template/formField/custom.html', '<div class="col-md-10 col-sm-6 col-xs-6 customForm" bind-html-compile="column.template.form"></div>');
        $templateCache.put('uib/template/formField/table.html',
            '<table style="float: left;">' +
            '<tr>' +
            '<th style="bot" ng-repeat="col in column.column track by $index">{{col.title}}</th>' +
            '<th>{{\'baseDelete.label\'|T}}</th>'+
            '<th>{{\'change.label\'|T}}</th>'+
            '</tr>'+
            '<tr ng-repeat="row in test track by $index">'+
            '<td ng-repeat="column in status.columns[fieldIndex].column"><div uib-form-list="column" ng-model="row[column.name]"></div></td>' +
            '<td><button style="width: 25px;height: 25px;padding: 1.5px 3.5px;" class="btn btn-danger" ng-click="deleteThisChildColumn($index)"><i class="fa fa-trash"></i></button> </td>'+
            '<td><button style="width: 25px;height: 25px;padding: 1.5px 3.5px;" class=" btn btn-primary editState" ng-click="editThisChildColumn($index,status.columns[fieldIndex].column,row)"><i class="fa fa-edit" ></i></button></td>' +
            '</tr>'+
            '</table>'+
             '<button style="margin-top: 12px;margin-left: 20px" class="btn btn-primary btn-small" ng-click="addTableItem(column.column)">+</button>'
        )
    }]);

    angular.module("ui.bootstrap.formField", [])
        .controller("formFieldController", ["$scope", "$attrs", "$templateCache", '$element', '$compile', '$filter', '$document', 'T','$uibModal','$rootScope',function ($scope, $attrs, $templateCache, $element, $compile, $filter, $document, T,$uibModal,$rootScope) {
            var ngModelCtrl = {$setViewValue: angular.noop};
            this.init = function (_ngModelCtrl) {
                ngModelCtrl = _ngModelCtrl;
                $scope.column = $scope.$eval($attrs.uibFormField);
                $scope.fieldIndex = $scope.$eval($attrs["fieldIndex"]);
                var formType = $scope.column.formType || 'text';

                //构建模版
                var template;
                if ($scope.column.mode === 'multiple') {
                    template = $templateCache.get('uib/template/formField/' + formType + '/' + 'multiple' + '.html');
                } else {
                    template = $templateCache.get('uib/template/formField/' + formType + '.html');
                }
                //根据formType 和 mode 加载表单模板
                angular.element($element[0].querySelector('.form-field-content')).html(template);
                $compile($element.contents())($scope);

                $scope.selectArr = "";
                $scope.showTextAreasOptions = false;

                //formType===table 添加一行数据
                $scope.addTableItem = function (column) {
                    var modal = $uibModal.open({
                        templateUrl: "/scripts/common/templates/form.html",
                        controller: 'addTableItemCtrl',
                        backdropClass:'modalAddTable',
                        resolve: {
                            params: {
                                value:column
                            },
                            action: function () {
                                return 'add';
                            }
                        }
                    })
                }
                //table列表的删除
                $scope.deleteThisChildColumn = function (index) {
                    $rootScope.test.splice(index,1);
                }
                //table列表的修改
                $scope.editThisChildColumn = function (index,column,modelValue) {
                    var modal = $uibModal.open({
                        templateUrl: '/scripts/common/templates/form.html',
                        controller: 'addTableItemCtrl',
                        resolve: {
                            params:{
                                column:column,
                                value:modelValue,
                                index:index
                            },
                            action: function () {
                                return 'edit';
                            }
                        }
                    });
                }


                //select2 手动输入时返回一个对象
                $scope.tagTransform = function (newTag) {
                    var item = {
                        name: newTag,
                    };
                    return item;
                }
               //表单校验
                if (formType !== 'boolean' && formType !== 'img' && formType !== 'file') {
                    $scope.$watch('status.form.model[column.name]', function (scope) {
                        var required = $scope.column.required;
                        var validate = $scope.column.validate;
                        var inputText = angular.isEmpty($scope.status.form.model) ? '' : $scope.status.form.model[$scope.column.name];
                        $scope.column.inputText = inputText;
                        var typeOfForm = $scope.column.formType || 'text';
                        var readOnly = $scope.column.readOnly || false;
                        if (readOnly) {
                            angular.element($element[0].querySelector('.form-control')).attr("readOnly", "readonly")
                        }
                        switch (typeOfForm) {
                            case 'long', 'double', 'textarea':
                                if (required) {
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                        $scope.column.warnMess = false;
                                    } else if (inputText == '' || inputText == null) {
                                        $scope.column.emptyMess = true;
                                        $scope.column.warnMess = false;
                                    } else if (inputText) {
                                        $scope.column.emptyMess = false;
                                        if (validate) {
                                            if (isArrayFn(validate)) {
                                                // console.log("组合校验");
                                            }
                                            if (isFunction(validate)) {
                                                // console.log("函数校验");
                                            } else {
                                                if (inputText < validate.min || inputText > validate.max) {
                                                    $scope.column.warnMess = true;
                                                } else {
                                                    $scope.column.warnMess = false;
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            case 'datetime':
                                if (required) {
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                        $scope.column.warnMess = false;
                                    } else if (inputText == '' || inputText == null) {
                                        $scope.column.emptyMess = true;
                                        $scope.column.warnMess = false;
                                    } else if (inputText) {
                                        $scope.column.emptyMess = false;
                                        if (validate) {
                                            if (isArrayFn(validate)) {
                                                // console.log("组合校验");
                                            }
                                            if (isFunction(validate)) {
                                                // console.log("函数校验");
                                            } else if (angular.isDefined(validate)) {
                                                var currentDate = new Date(inputText);//当前日期,月份,年份
                                                var minDate = $scope.column.dateOptions.minDate;
                                                var maxDate = $scope.column.dateOptions.maxDate;
                                                if (currentDate < minDate && undefined !== inputText || currentDate > maxDate && undefined !== inputText) {
                                                    $scope.column.warnMess = true;
                                                } else if (undefined !== inputText) {
                                                    $scope.column.warnMess = false
                                                }
                                            }
                                        }
                                    }
                                }
                                break;
                            case 'date':
                                if (required) {
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                    } else if (inputText == '' || inputText == null) {
                                        $scope.column.emptyMess = true;
                                    } else if (inputText) {
                                        $scope.column.emptyMess = false;
                                    }
                                }
                                break;
                            case 'url':
                                if (required) {
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                        $scope.column.warnMess = false;
                                    } else if (inputText == '' || inputText == null) {
                                        $scope.column.emptyMess = true;
                                        $scope.column.warnMess = false;
                                    } else if (inputText) {
                                        $scope.column.emptyMess = false;
                                        if (isURL(inputText)) {
                                            $scope.column.warnMess = false;
                                        } else {
                                            $scope.column.warnMess = true;
                                        }
                                    }
                                }
                                break;
                            case 'email':
                                if (required) {
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                        $scope.column.warnMess = false;
                                    } else if (inputText == '' || inputText == null) {
                                        $scope.column.emptyMess = true;
                                        $scope.column.warnMess = false;
                                    } else if (inputText) {
                                        $scope.column.emptyMess = false;
                                        if (isEmail(inputText)) {
                                            $scope.column.warnMess = false;
                                        } else {
                                            $scope.column.warnMess = true;
                                        }
                                    }
                                }
                                break;
                            case 'select':
                                if (required) {
                                    if ($scope.column.mode === 'multiple') {
                                        if (angular.isObject(inputText)) {
                                            if (inputText.length) {
                                                $scope.column.emptyMess = false;
                                            } else {
                                                $scope.column.emptyMess = true;
                                            }
                                        }
                                    } else {
                                        if (inputText !== '' && inputText !== null) {
                                            $scope.column.emptyMess = false;
                                        } else if (inputText == '' || inputText == null) {
                                            $scope.column.emptyMess = true;
                                        }
                                    }
                                }
                                break;
                            case 'tree':
                                if (required) {
                                    $scope.selectOptionsName = "";
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                    } else if (isArrayFn(inputText)) {
                                        if (inputText.length) {
                                            $scope.column.emptyMess = false;
                                        } else {
                                            $scope.column.emptyMess = true;
                                        }
                                    }
                                }
                                break;
                            case 'custom':
                                break;
                            default:
                                if (required) {
                                    if (undefined === inputText) {
                                        $scope.column.emptyMess = false;
                                        $scope.column.warnMess = false;
                                    } else if (inputText == '' || inputText == null) {
                                        $scope.column.emptyMess = true;
                                        $scope.column.warnMess = false;
                                    } else if (inputText) {
                                        $scope.column.emptyMess = false;
                                        if (validate) {
                                            if (isArrayFn(validate)) {
                                                // console.log("组合校验");
                                            }
                                            if (isFunction(validate)) {
                                                // console.log("函数校验");
                                            } else {
                                                if (inputText.length < validate.minLength || inputText.length > validate.maxLength) {
                                                    $scope.column.warnMess = true;
                                                } else {
                                                    $scope.column.warnMess = false;
                                                }
                                            }
                                        }
                                    }
                                }
                        }

                        function isArrayFn(value) {
                            if (typeof Array.isArray === "function") {
                                return Array.isArray(value);
                            } else {
                                return Object.prototype.toString.call(value) === "[object Array]";
                            }
                        }

                        function isFunction(fn) {
                            return Object.prototype.toString.call(fn) === '[object Function]';
                        }

                        //double类型的数据
                        window.isDouble = function (obj) {
                            obj.value = obj.value.replace(/[^\d.]/g, ""); //清除"数字"和"."以外的字符
                            obj.value = obj.value.replace(/^\./g, ""); //验证第一个字符是数字而不是
                            obj.value = obj.value.replace(/\.{2,}/g, "."); //只保留第一个. 清除多余的
                            obj.value = obj.value.replace(".", "$#$").replace(/\./g, "").replace("$#$", ".");
                        };
                        //判断邮箱
                        function isEmail(email) {
                            var reg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+((\.[a-zA-Z0-9_-]{2,3}){1,2})$/;
                            var isok = reg.test(email)
                            return isok;
                        }

                        //判断URL
                        function isURL(url) {
                            var strRegex = "^((https|http|ftp|rtsp|mms)://)?[a-z0-9A-Z]{3}\.[a-z0-9A-Z][a-z0-9A-Z]{0,61}?[a-z0-9A-Z]\.com|net|cn|cc (:s[0-9]{1-4})?/$";
                            var re = new RegExp(strRegex);
                            if (re.test(url)) {
                                return true;
                            } else {
                                return false;
                            }
                        }
                    }, true);
                }
                //boolean 校验
                if (formType === 'boolean') {
                    $scope.$watch('column.defaultValue', function () {
                        if ($scope.column.defaultValue !== null) {
                            $scope.column.emptyMess = false;
                        }
                    }, true);
                }
                if (formType === 'img' || formType === 'file') {
                    $scope.$watch('status.form.model[column.name].queue.length', function (newValue, oldValue) {
                        if (oldValue != newValue) {
                            if ($scope.status.form.model[$scope.column.name].queue && $scope.status.form.model[$scope.column.name].queue.length !== 0) {
                                $scope.column.emptyMess = false;
                            }else{
                                if($scope.column.required === true){
                                    $scope.column.emptyMess = true;
                                }
                            }
                        }
                    }, true)
                }

                //控制textArea的展开和隐藏
                $scope.isshowTextAreasOptions = function () {
                    $scope.showTextAreasOptions = !$scope.showTextAreasOptions;
                }
            };
        }])
        .directive("uibFormField", function () {
            return {
                restrict: "A",
                scope: true,
                require: ['uibFormField', '?ngModel'],
                controller: "formFieldController",
                link: function (attrs, element, scope, ctrls) {
                    var uibFormFieldCtrl = ctrls[0];
                    var ngModelCtrl = ctrls[1];
                    uibFormFieldCtrl.init(ngModelCtrl);

                },
                templateUrl: "uib/template/formField.html"
            };
        });
})(window, angular);