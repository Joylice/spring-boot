/**
 * Created by leo on 18/07/2017.
 */

;(function (window, angular, $) {
    'use strict';
    angular.module('angular-ztree', [])
        .constant('ztreeConfig', {
            defaultOptions: {}
        })
        .controller('ZtreeController', ['$scope', '$element', '$attrs', '$parse', '$animate', '$document', '$compile', '$templateRequest', '$timeout', '$templateCache', 'ztreeConfig', function ($scope, $element, $attrs, $parse, $animate, $document, $compile, $templateRequest, $timeout, $templateCache, ztreeConfig) {
            this.init = function (ngModelCtrl, elementId) {

                var ztreeOptions = $scope.$eval($attrs.ztreeOptions);
                var ztreeSetting = $scope.$eval($attrs.ztreeSetting);
                var ztreeObj = null;
                $scope.$watch($attrs.ztreeOptions, function (newVal) {
                    ztreeOptions = newVal;
                    reInitTree();
                }, true);

                function reInitTree() {
                    if (angular.isObject(ztreeSetting) && angular.isArray(ztreeOptions)) {
                        // console.log("$scope.$watch($attrs.ztreeOptions, function (newVal)", ztreeSetting, ztreeOptions);
                        if (ztreeObj !== null) {
                            $.fn.zTree.destroy(elementId);
                        }
                        // delete ztreeOptions.$promise;
                        // delete ztreeOptions.$resolved;
                        ztreeOptions = _.merge([], ztreeOptions, {$promise: null, $resolved: null});
                        // for(var  o = 0; o < ztreeOptions.length; o++){
                        //     ztreeOptions[o] = _.merge([], ztreeOptions, {$promise: null, $resolved: null});
                        // }
                        ztreeObj = $.fn.zTree.init($($element), ztreeSetting, ztreeOptions);

                        var expantNodes = ztreeObj.getNodesByFilter(function (node) {
                            return ztreeSetting.customSetting.autoExpandLevels.indexOf(node.level) !== -1 || (ztreeSetting.customSetting.autoExpandRoot && node.level === 0);
                        });
                        for(var e = 0; e < expantNodes.length; e++){
                            ztreeObj.expandNode(expantNodes[e], true, false, false, true);
                        }
                    }
                }

                //model -> UI
                ngModelCtrl.$render = function () {
                    if(angular.isArray(ngModelCtrl.$modelValue)){
                        var treeObj = $.fn.zTree.getZTreeObj(elementId);
                        if(treeObj !== null){
                            var modelValueIds = ngModelCtrl.$modelValue.map(function (obj) {
                                return obj[ztreeSetting.data.simpleData.idKey];
                            });
                            var nodes = treeObj.getNodesByFilter(function (node) {
                                return modelValueIds.indexOf(node[ztreeSetting.data.simpleData.idKey]) !== -1;
                            });
                            for(var n = 0; n < nodes.length; n++){
                                treeObj.selectNode(nodes[n]);
                            }
                        }
                    } else if(angular.isObject(ngModelCtrl.$modelValue)){
                        var treeObj = $.fn.zTree.getZTreeObj(elementId);
                        if(treeObj !== null){
                            var nodes = treeObj.getNodesByParam(ztreeSetting.data.simpleData.idKey, ngModelCtrl.$modelValue.id);
                            if(nodes.length > 0){
                                treeObj.selectNode(nodes[0]);
                            }
                        }
                    }

                };
                $scope.$watch($attrs.ztreeSetting, function (newVal) {
                    ztreeSetting = _.merge({
                        customSetting: {
                            onBeforeSelect: function (node) {//单选点击事件回调
                                return true;
                            },
                            onCheckedFilter: function (node) {//多选取值筛选
                                return true;
                            },
                            autoExpandRoot: true,       //是否展开根节点
                            autoExpandLevels: []       //展开指定级别 根节点级别为0 以此类推

                        },
                        data: {
                            simpleData: {
                                enable: true,
                                idKey: "id",
                                pIdKey: "parentId",
                                rootPId: null
                            }
                        },
                        callback: {
                            beforeClick: function (treeId, treeNode, clickFlag) {
                                if(!ztreeSetting.check || !ztreeSetting.check.enable){
                                    if(!ztreeSetting.customSetting.onBeforeSelect(treeNode)){
                                        return false;
                                    }
                                    $scope.$apply(function () {
                                        ngModelCtrl.$setViewValue(treeNode);
                                        ngModelCtrl.$render();
                                    });
                                }
                            },
                            onClick: function (event, treeId, treeNode) {
                                if(!ztreeSetting.check || !ztreeSetting.check.enable){
                                    $scope.$apply(function () {
                                        ngModelCtrl.$setViewValue(treeNode);
                                        ngModelCtrl.$render();
                                    });
                                }else{
                                    var treeObj = $.fn.zTree.getZTreeObj(elementId);
                                    if(treeObj !== null){
                                        treeObj.checkNode(treeNode, null, true, true);
                                    }
                                }
                            },
                            onCheck: function (event, treeId, treeNode) {
                                if(ztreeSetting.check && ztreeSetting.check.enable){
                                    $scope.$apply(function () {
                                        var treeObj = $.fn.zTree.getZTreeObj(treeId);
                                        ngModelCtrl.$setViewValue(treeObj.getNodesByFilter(function (node) {
                                            return node.checked && ztreeSetting.customSetting.onCheckedFilter(node);
                                        }));
                                        ngModelCtrl.$render();
                                    });
                                }
                            }
                        }
                    }, newVal);

                    reInitTree();
                }, true);
            };
        }])
        .directive('ztree', function () {
            return {
                controller: 'ZtreeController',
                scope: false,
                require: ['ztree', 'ngModel'],
                link: function (scope, element, attrs, ctrls) {
                    var ztreeCtrl = ctrls[0];
                    var ngModelCtrl = ctrls[1];
                    element.addClass('ztree');
                    var ztreeId = scope.$eval(attrs.ztreeId) || angular.uuid();
                    element.prop('id', ztreeId);
                    ztreeCtrl.init(ngModelCtrl, ztreeId);
                }
            };
        });
})(window, angular, jQuery);