;(function (window, angular) {
    'use strict';
    angular.module("uib/template/select.html", []).run(["$templateCache", function ($templateCache) {
        $templateCache.put("uib/template/select/less.html",
            '<label class=" btn btn-default" ng-repeat="option in options track by $index" uib-select-item="{{option}}">{{option[optionKey]}}</label>');
        $templateCache.put("uib/template/select/more.html",
            '<div class="col-md-12 col-sm-12 col-xs-12 btn-group" uib-expand-top><button type="button" class="col-md-12 col-sm-12 col-xs-12 btn btn-default dropdown-toggle"  aria-haspopup="true" aria-expanded="true" ><span class="col-md-12 col-sm-12 col-xs-12 uib-select-label">{{selectedOption}}</span><span class="caret"></span></button> <ul class=" col-md-12 col-sm-12 col-xs-12 dropdown-menu" style="max-height: 200px;overflow-y: scroll;" role="menu" aria-labelledby="single-button"> <li role="menuitem" class="" ng-repeat="option in options track by $index" uib-select-item="{{option}}"> <a href="javascript:">{{option[optionKey]}}<span class="menuitem-icon glyphicon glyphicon-ok"></span></a></li> </ul> </div>');
    }]);

    angular.module('ui.bootstrap.select', ['ui.bootstrap.position'])

        .constant('uibSelectConfig', {
            toggleEvent: 'click',
            threshold: 2,  //选择模板的数量分界值
            defaultNote: ""
        })
        .constant("uibTemplateConfig", {
            horizontal: {//水平排列
                activeClass: "active",
                optionHtmlElement: "label",
                attachClass: "btn-group"
            },
            vertical: {//竖直排列
                activeClass: "selected",
                optionHtmlElement: "li",
                attachClass: "uib-select"
            }
        })
        .controller('UibSelectController', ['$scope', '$element', '$attrs', '$parse', 'uibSelectConfig', 'uibTemplateConfig', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', '$templateCache', function (scope, element, attrs, $parse, selectConfig, templateConfig, $animate, $position, $document, $compile, $templateRequest, $templateCache) {
            var self = this;
            this.toggleEvent = selectConfig.toggleEvent || 'click';
            this.threshold = selectConfig.threshold || 5;
            this.defaultNote = selectConfig.defaultNote || "";
            var mode = scope.$eval(attrs["uibSelectMode"]) || "single";
            var ngModelCtrl = {$setViewValue: angular.noop};// nullModelCtrl;
            var optionKey = scope.$eval(attrs["uibSelectOptionKey"]) || 'name';
            var optionValue = scope.$eval(attrs["uibSelectOptionValue"]) || 'id';
            // scope.toggleIsFocus = scope.$eval(attrs["ngFocus"]) || false;
            scope.optionKey = optionKey;
            scope.optionValue = optionValue;
            scope.selectedOption = self.defaultNote;

            this.init = function (_ngModelCtrl) {
                ngModelCtrl = _ngModelCtrl;
                var __options = scope.$eval(attrs["uibSelectOptions"]);
                scope.options = angular.isArray(__options) ? __options : [];

                ngModelCtrl.performClick = function () {
                    var toggleElements = element.find('div');
                    var toggleElement = angular.element(toggleElements[0]);

                    if (toggleElement && toggleElement.hasClass('open') && toggleElement.hasClass('dropdown')) {
                        //已经打开,需要关闭
                        toggleElement.removeClass('dropdown');
                        toggleElement.removeClass('open');
                    }
                };

                //点击外部区域，也可以关闭下拉菜单
                $document.on('click', ngModelCtrl.performClick);

                if (mode === "multiple") {
                    //model -> UI
                    ngModelCtrl.$render = function () {
                        var currentValue = ngModelCtrl.$modelValue;

                        self.updateSelectedOption(currentValue);

                        if (!angular.isArray(currentValue)) currentValue = [];
                        var optionElements = element.find(self.optionHtmlElement);
                        for (var i = 0; i < optionElements.length; i++) {
                            var optionElement = angular.element(optionElements[i]);
                            var include = false;

                            jfor: for (var j = 0; j < currentValue.length; j++) {
                                var value = currentValue[j];
                                if (angular.isDefined(value) && value !== null) {
                                    if (angular.isObject(value)) {
                                        if (value[optionValue] === scope.options[i][optionValue]) {
                                            include = true;
                                            break jfor;
                                        }
                                    } else {
                                        if (scope.options[i] === value) {
                                            include = true;
                                            break jfor;
                                        }
                                    }
                                }
                            }
                            if (include) {
                                if (!optionElement.hasClass(self.activeClass)) {
                                    optionElement.addClass(self.activeClass);
                                }
                            } else {
                                if (optionElement.hasClass(self.activeClass)) {
                                    optionElement.removeClass(self.activeClass);
                                }
                            }
                        }
                    };
                } else {//单选模式
                    //model -> UI
                    ngModelCtrl.$render = function () {
                        var optionElements = element.find(self.optionHtmlElement);
                        for (var i = 0; i < optionElements.length; i++) {
                            var optionElement = angular.element(optionElements[i]);
                            optionElement.hasClass(self.activeClass) && optionElement.removeClass(self.activeClass);
                            if (angular.isDefined(ngModelCtrl.$modelValue) && ngModelCtrl.$modelValue !== null) {
                                if (angular.isObject(ngModelCtrl.$modelValue)) {
                                    if (scope.options[i][optionValue] === ngModelCtrl.$modelValue[optionValue]) {
                                        scope.selectedOption = scope.options[i][optionKey];
                                        optionElement.addClass(self.activeClass);
                                    }
                                } else {
                                    if (scope.options[i] === ngModelCtrl.$modelValue) {
                                        scope.selectedOption = scope.options[i];
                                        optionElement.addClass(self.activeClass);
                                    }
                                }
                            } else {
                                scope.selectedOption = null;
                            }
                        }
                    };
                }
                scope.$watch(attrs["uibSelectOptions"], function (__options) {

                    if (angular.isEmpty(ngModelCtrl.$modelValue)) {
                        scope.selectedOption = null;
                    } else {
                        scope.selectedOption = ngModelCtrl.$modelValue[optionKey];
                    }

                    __options = angular.isArray(__options) ? __options : [];

                    var template;
                    /*if (__options.length > 0 && __options.length <= self.threshold) {
                     template = $templateCache.get('uib/template/select/less.html');
                     self.activeClass = templateConfig.horizontal.activeClass;
                     self.optionHtmlElement = templateConfig.horizontal.optionHtmlElement;
                     self.attachClass = templateConfig.horizontal.attachClass;

                     } else if (__options.length > self.threshold || __options.length == 0) {
                     template = $templateCache.get('uib/template/select/more.html');
                     self.activeClass = templateConfig.vertical.activeClass;
                     self.optionHtmlElement = templateConfig.vertical.optionHtmlElement;
                     self.attachClass = templateConfig.vertical.attachClass;
                     }*/

                    template = $templateCache.get('uib/template/select/more.html');
                    self.activeClass = templateConfig.vertical.activeClass;
                    self.optionHtmlElement = templateConfig.vertical.optionHtmlElement;
                    self.attachClass = templateConfig.vertical.attachClass;

                    if (template) {
                        element.html(template);
                        element.addClass(self.attachClass);
                        $compile(element.contents())(scope);
                    }
                    scope.options = __options;
                });
            };

            // ui->model
            this.handleChange = function (option, active) {
                if (attrs.disabled) {
                    return;
                }

                if (mode === "multiple") {
                    scope.$apply(function () {
                        //push
                        var currentValue = ngModelCtrl.$modelValue;

                        if (!angular.isArray(currentValue)) currentValue = [];

                        if (active) {
                            currentValue.push(option);
                        } else {
                            //remove
                            for (var i = 0; i < currentValue.length; i++) {

                                var value = currentValue[i];
                                if (angular.isDefined(value) && value !== null) {
                                    if (angular.isObject(value)) {
                                        if (option[optionValue] === value[optionValue]) {
                                            currentValue.splice(i, 1);
                                            break;
                                        }
                                    } else {
                                        if (option === value) {
                                            currentValue.splice(i, 1);
                                            break;
                                        }
                                    }
                                }
                            }
                        }

                        self.updateSelectedOption(currentValue);

                        ngModelCtrl.$setViewValue(currentValue);
                        ngModelCtrl.$render();
                    });
                } else {

                    ngModelCtrl.performClick();

                    if (active) {
                        scope.$apply(function () {
                            scope.selectedOption = option[optionKey];
                            ngModelCtrl.$setViewValue(option);
                            ngModelCtrl.$render();
                        });
                    } else {
                        scope.$apply(function () {
                            option = null;
                            scope.selectedOption = "";
                            ngModelCtrl.$setViewValue(option);
                            ngModelCtrl.$render();
                        });
                    }
                }
            };


            this.updateSelectedOption = function (currentValue) {
                if (!currentValue) {
                    scope.selectedOption = self.defaultNote;
                    return;
                }

                if (currentValue.length > 0) {
                    scope.selectedOption = "";
                    var ensureObject = angular.isObject(currentValue[0]);
                    for (var k = 0; k < currentValue.length; k++) {
                        if(k > 0){
                            scope.selectedOption += ',';
                        }
                        if (ensureObject) {
                            scope.selectedOption += currentValue[k][optionKey];
                        } else {
                            scope.selectedOption += currentValue[k];
                        }
                    }
                } else {
                    scope.selectedOption = self.defaultNote;
                }
            };

            this.toggle = function (element) {//open or close
                scope.$apply(function () {
                    var expandelement = angular.element(element);
                    if (expandelement && expandelement.hasClass('open') && expandelement.hasClass('dropdown')) {
                        //已经打开,需要关闭
                        expandelement.removeClass('dropdown');
                        expandelement.removeClass('open');
                    } else {
                        //没有打开，需要打开
                        // scope.toggleIsFocus = true;
                        if (scope.column) {
                            scope.column.isFocus = true;

                        }
                        expandelement.addClass('dropdown');
                        expandelement.addClass('open');
                    }
                    var currentValue = ngModelCtrl.$modelValue;
                    ngModelCtrl.$setViewValue(currentValue);
                    ngModelCtrl.$render();
                });
            };
        }])

        .directive('uibExpandTop', function () {
            return {
                restrict: 'A',
                require: '?^uibSelect',
                link: function (scope, element, attrs, selectCtrl) {
                    element.on(selectCtrl.toggleEvent, function () {
                        selectCtrl.toggle(element);
                        event.stopPropagation();//stop event bubble
                    });
                }
            }
        })
        .directive('uibSelectItem', function () {
            return {
                restrict: 'A',
                require: '?^uibSelect',
                link: function (scope, element, attrs, selectCtrl) {
                    if (angular.isUndefined(selectCtrl) || selectCtrl == null) return;
                    element.on(selectCtrl.toggleEvent, function () {
                        selectCtrl.handleChange(scope.$eval(attrs.uibSelectItem), !element.hasClass(selectCtrl.activeClass));
                        event.stopPropagation();//stop event bubble
                    })
                }
            }
        })
        .directive('uibSelect', function () {
            return {
                require: ['uibSelect', 'ngModel'],
                controller: 'UibSelectController',
                link: function (scope, element, attrs, ctrls) {
                    var selectCtrl = ctrls[0], ngModelCtrl = ctrls[1];
                    selectCtrl.init(ngModelCtrl);
                }
            };
        });
})(window, angular);

