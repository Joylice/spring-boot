angular.module("uib/template/mydate/datepicker.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/mydate/datepicker.html",
        "<div ng-switch=\"datepickerMode\">\n" +
        "  <div uib-mydaypicker ng-switch-when=\"day\" tabindex=\"0\" class=\"uib-daypicker\"></div>\n" +
        "  <div uib-mymonthpicker ng-switch-when=\"month\" tabindex=\"0\" class=\"uib-monthpicker\"></div>\n" +
        "  <div uib-myyearpicker ng-switch-when=\"year\" tabindex=\"0\" class=\"uib-yearpicker\"></div>\n" +
        "</div>\n" +
        "");
}]);
angular.module("uib/template/mydate/popup.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/mydate/popup.html",
        "<ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
        "  <li ng-transclude></li>\n" +
        "  <li ng-if=\"showButtonBar\" class=\"uib-button-bar\">\n" +
        "    <span class=\"btn-group pull-left\">\n" +
        // "      <button type=\"button\" class=\"btn btn-sm btn-info uib-datepicker-current\" ng-click=\"select('today', $event)\" ng-disabled=\"isDisabled('today')\">{{ getText('current') }}</button>\n" +
        "      <button type=\"button\" class=\"btn btn-sm btn-danger uib-clear\" ng-click=\"select(null, $event)\">{{\'datePicker.clear.label\' | T}}</button>\n" +
        "    </span>\n" +
        "    <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" ng-click=\"close($event)\">{{\'datePicker.close.label\' | T}}</button>\n" +
        "  </li>\n" +
        "</ul>\n" +
        "");
}]);

angular.module("uib/template/mydate/month.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/mydate/month.html",
        "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
        "  <thead>\n" +
        "    <tr>\n" +
        "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
        "      <th colspa\"{{::yearHeaderColspan}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
        "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
        "    </tr>\n" +
        "  </thead>\n" +
        "  <tbody>\n" +
        "    <tr class=\"uib-months\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +

        "      <td ng-repeat=\"dt in row\" class=\"uib-month text-center\" role=\"gridcell\"\n" +
        "        id=\"{{::dt.uid}}\"\n" +
        "        ng-class=\"::dt.customClass\">\n" +
        "        <button type=\"button\" class=\"btn btn-default\"\n" +
        "          uib-is-my-class=\"\n" +
        "            'btn-info' for selectedDt,\n" +
        "            'active' for activeDt\n" +
        "            on dt\"\n" +
        "          ng-click=\"select(dt.date,$event)\"\n" +
        "          ng-disabled=\"::dt.disabled\"\n" +
        "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.quartery}}</span></button>\n" +
        "      </td>\n" +
        "    </tr>\n" +
        "  </tbody>\n" +
        "</table>\n" +
        "");
}]);

angular.module("uib/template/mydate/year.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/mydate/year.html",
        "<table role=\"grid\" aria-labelledby=\"{{::uniqueId}}-title\" aria-activedescendant=\"{{activeDateId}}\">\n" +
        "  <thead>\n" +
        "    <tr>\n" +
        "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-left uib-left\" ng-click=\"move(-1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-left\"></i></button></th>\n" +
        "      <th colspan=\"{{::columns - 2}}\"><button id=\"{{::uniqueId}}-title\" role=\"heading\" aria-live=\"assertive\" aria-atomic=\"true\" type=\"button\" class=\"btn btn-default btn-sm uib-title\" ng-click=\"toggleMode()\" ng-disabled=\"datepickerMode === maxMode\" tabindex=\"-1\"><strong>{{title}}</strong></button></th>\n" +
        "      <th><button type=\"button\" class=\"btn btn-default btn-sm pull-right uib-right\" ng-click=\"move(1)\" tabindex=\"-1\"><i class=\"glyphicon glyphicon-chevron-right\"></i></button></th>\n" +
        "    </tr>\n" +
        "  </thead>\n" +
        "  <tbody>\n" +
        "    <tr class=\"uib-years\" ng-repeat=\"row in rows track by $index\" role=\"row\">\n" +
        "      <td ng-repeat=\"dt in row\" class=\"uib-year text-center\" role=\"gridcell\"\n" +
        "        id=\"{{::dt.uid}}\"\n" +
        "        ng-class=\"::dt.customClass\">\n" +
        "        <button type=\"button\" class=\"btn btn-default\"\n" +
        "          uib-is-class=\"\n" +
        "            'btn-info' for selectedDt,\n" +
        "            'active' for activeDt\n" +
        "            on dt\"\n" +
        "          ng-click=\"select(dt.date)\"\n" +
        "          ng-disabled=\"::dt.disabled\"\n" +
        "          tabindex=\"-1\"><span ng-class=\"::{'text-info': dt.current}\">{{::dt.label}}</span></button>\n" +
        "      </td>\n" +
        "    </tr>\n" +
        "  </tbody>\n" +
        "</table>\n" +
        "");
}]);
angular.module('ui.bootstrap.mydatepicker', ['ui.bootstrap.dateparser', 'ui.bootstrap.isClass'])

    .value('$datepickerSuppressError', false)

    .value('$datepickerLiteralWarning', true)

    .constant('uibmyDatepickerConfig', {
        datepickerMode: 'month',
        formatDay: 'dd',
        formatMonth: 'MMMM',
        formatYear: 'yyyy',
        formatDayHeader: 'EEE',
        formatDayTitle: 'MMMM yyyy',
        formatMonthTitle: 'yyyy',
        maxDate: null,
        maxMode: 'year',
        minDate: null,
        minMode: 'month',
        monthColumns: 3,
        ngModelOptions: {},
        shortcutPropagation: false,
        showWeeks: true,
        yearColumns: 5,
        yearRows: 4,
    })
angular.module('ui.bootstrap.ismyClass', [])
    .directive('uibIsMyClass', [
        '$animate',
        function ($animate) {
            //                    11111111          22222222
            var ON_REGEXP = /^\s*([\s\S]+?)\s+on\s+([\s\S]+?)\s*$/;
            //                    11111111           22222222
            var IS_REGEXP = /^\s*([\s\S]+?)\s+for\s+([\s\S]+?)\s*$/;

            var dataPerTracked = {};
            return {
                restrict: 'A',
                compile: function(tElement, tAttrs) {
                    var linkedScopes = [];
                    var instances = [];
                    var expToData = {};
                    var lastActivated = null;
                    var onExpMatches = tAttrs.uibIsMyClass.match(ON_REGEXP);
                    var onExp = onExpMatches[2];
                    var expsStr = onExpMatches[1];
                    var exps = expsStr.split(',');

                    return linkFn;

                    function linkFn(scope, element, attrs) {
                        linkedScopes.push(scope);
                        instances.push({
                            scope: scope,
                            element: element
                        });

                        exps.forEach(function(exp, k) {
                            addForExp(exp, scope);
                        });
                        scope.$on('$destroy', removeScope);
                    }

                    function addForExp(exp, scope) {
                        var matches = exp.match(IS_REGEXP);

                        var clazz = scope.$eval(matches[1]);
                        var compareWithExp = matches[2];
                        var data = expToData[exp];

                        if (!data) {
                            var watchFn = function(compareWithVal) {
                                var newActivated = null;

                                instances.some(function(instance) {
                                    var thisVal = instance.scope.$eval(onExp);
                                    if (thisVal === compareWithVal) {
                                        newActivated = instance;
                                        return true;
                                    }
                                }
                                );

                                if (data.lastActivated !== newActivated) {
                                    if (data.lastActivated) {
                                        $animate.removeClass(data.lastActivated.element, clazz);
                                    }
                                    if (newActivated) {
                                        $animate.addClass(newActivated.element, clazz);
                                    }
                                    data.lastActivated = newActivated;
                                }
                            };
                            expToData[exp] = data = {
                                lastActivated: null,
                                scope: scope,
                                watchFn: watchFn,
                                compareWithExp: compareWithExp,
                                watcher: scope.$watch(compareWithExp, watchFn)
                            };
                        }
                        data.watchFn(scope.$eval(compareWithExp));
                    }

                    function removeScope(e) {
                        var removedScope = e.targetScope;
                        var index = linkedScopes.indexOf(removedScope);
                        linkedScopes.splice(index, 1);
                        instances.splice(index, 1);
                        if (linkedScopes.length) {
                            var newWatchScope = linkedScopes[0];
                            angular.forEach(expToData, function(data) {
                                if (data.scope === removedScope) {
                                    data.watcher = newWatchScope.$watch(data.compareWithExp, data.watchFn);
                                    data.scope = newWatchScope;
                                }
                            });
                        } else {
                            expToData = {};
                        }
                    }
                }
            };
        }]);
angular.module('ui.bootstrap.mydate', ['ui.bootstrap.mydatepicker', 'ui.bootstrap.position'])

    .value('$datepickerPopupLiteralWarning', true)
    .constant('uibMyDatepickerPopupConfig', {
        altInputFormats: [],
        appendToBody: false,
        clearText: 'Clear',
        closeOnDateSelection: true,
        closeText: 'Done',
        currentText: 'Today',
        datepickerPopup: 'yyyy-MM',
        mydatepickerPopupTemplateUrl: 'uib/template/mydate/popup.html',
        mydatepickerTemplateUrl: 'uib/template/mydate/datepicker.html',
        html5Types: {
            date: 'yyyy-MM-dd',
            'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
            'month': 'yyyy-MM'
        },
        onOpenFocus: true,
        showButtonBar: true,
        placement: 'auto bottom-left'
    })
    .controller('UibMyDateController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibMyDatepickerPopupConfig', '$timeout', 'uibmyDatepickerConfig', '$datepickerPopupLiteralWarning','T',
        function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning,T) {
            var cache = {},
                isHtml5DateInput = false;
            var dateFormat, closeOnDateSelection, appendToBody, onOpenFocus,
                mydatepickerPopupTemplateUrl, mydatepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
                ngModel, ngModelOptions, $popup, altInputFormats, watchListeners = [];

            this.init = function(_ngModel_) {

                ngModel = _ngModel_;
                ngModelOptions = angular.isObject(_ngModel_.$options) ?
                    _ngModel_.$options :
                {
                    timezone: null
                };
                closeOnDateSelection = angular.isDefined($attrs.closeOnDateSelection) ?
                    $scope.$parent.$eval($attrs.closeOnDateSelection) :
                    datepickerPopupConfig.closeOnDateSelection;
                appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
                    $scope.$parent.$eval($attrs.datepickerAppendToBody) :
                    datepickerPopupConfig.appendToBody;
                onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
                    $scope.$parent.$eval($attrs.onOpenFocus) : datepickerPopupConfig.onOpenFocus;
                mydatepickerPopupTemplateUrl = angular.isDefined($attrs.mydatepickerPopupTemplateUrl) ?
                    $attrs.mydatepickerPopupTemplateUrl :
                    datepickerPopupConfig.mydatepickerPopupTemplateUrl;
                mydatepickerTemplateUrl = angular.isDefined($attrs.mydatepickerTemplateUrl) ?
                    $attrs.mydatepickerTemplateUrl : datepickerPopupConfig.mydatepickerTemplateUrl;
                altInputFormats = angular.isDefined($attrs.altInputFormats) ?
                    $scope.$parent.$eval($attrs.altInputFormats) :
                    datepickerPopupConfig.altInputFormats;

                $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
                    $scope.$parent.$eval($attrs.showButtonBar) :
                    datepickerPopupConfig.showButtonBar;

                if (datepickerPopupConfig.html5Types[$attrs.type]) {
                    dateFormat = datepickerPopupConfig.html5Types[$attrs.type];
                    isHtml5DateInput = true;
                } else {
                    dateFormat = $attrs.uibDatepickerPopup || datepickerPopupConfig.datepickerPopup;
                    $attrs.$observe('uibDatepickerPopup', function(value, oldValue) {
                        var newDateFormat = value || datepickerPopupConfig.datepickerPopup;
                        // Invalidate the $modelValue to ensure that formatters re-run
                        // FIXME: Refactor when PR is merged: https://github.com/angular/angular.js/pull/10764
                        if (newDateFormat !== dateFormat) {
                            dateFormat = newDateFormat;
                            // ngModel.$modelValue = null;
                            if (!dateFormat) {
                                throw new Error('uibDatepickerPopup must have a date format specified.');
                            }
                        }
                    });
                }

                if (!dateFormat) {
                    throw new Error('uibDatepickerPopup must have a date format specified.');
                }

                if (isHtml5DateInput && $attrs.uibDatepickerPopup) {
                    throw new Error('HTML5 date input types do not support custom formats.');
                }

                // popup element used to display calendar
                popupEl = angular.element('<div uib-mydate-wrap><div uib-mydatepicker></div></div>');

                popupEl.attr({
                    'ng-model': 'date',
                    'ng-change': 'dateSelection(date)',
                    'template-url': mydatepickerPopupTemplateUrl
                });


                // datepicker element
                datepickerEl = angular.element(popupEl.children()[0]);
                datepickerEl.attr('template-url', mydatepickerTemplateUrl);

                if (!$scope.mydatepickerOptions) {
                    $scope.mydatepickerOptions = {};
                }


                datepickerEl.attr('mydatepicker-options', 'mydatepickerOptions');


                // Detect changes in the view from the text box
                ngModel.$viewChangeListeners.push(function() {
                    $scope.date = parseDateString(ngModel.$viewValue);
                });

                $element.on('keydown', inputKeydownBind);

                $popup = $compile(popupEl)($scope);
                // Prevent jQuery cache memory leak (template is now redundant after linking)
                popupEl.remove();

                if (appendToBody) {
                    $document.find('body').append($popup);
                } else {
                    $element.after($popup);
                }

                $scope.$on('$destroy', function() {
                    if ($scope.isOpen === true) {
                        if (!$rootScope.$$phase) {
                            $scope.$apply(function() {
                                $scope.isOpen = false;
                            });
                        }
                    }

                    $popup.remove();
                    $element.off('keydown', inputKeydownBind);
                    $document.off('click', documentClickBind);
                    if (scrollParentEl) {
                        scrollParentEl.off('scroll', positionPopup);
                    }
                    angular.element($window).off('resize', positionPopup);

                    //Clear all watch listeners on destroy
                    while (watchListeners.length) {
                        watchListeners.shift()();
                    }
                });
            };

            $scope.isDisabled = function(date) {
                if (date === 'today') {
                    date = dateParser.fromTimezone(new Date(), ngModelOptions.timezone);
                }

                var dates = {};
                angular.forEach(['minDate', 'maxDate'], function(key) {
                    if (!$scope.mydatepickerOptions[key]) {
                        dates[key] = null;
                    } else if (angular.isDate($scope.mydatepickerOptions[key])) {
                        dates[key] = new Date($scope.mydatepickerOptions[key]);
                    } else {
                        if ($datepickerPopupLiteralWarning) {
                            $log.warn('Literal date support has been deprecated, please switch to date object usage');
                        }

                        dates[key] = new Date(dateFilter($scope.mydatepickerOptions[key], 'medium'));
                    }
                });

                return $scope.mydatepickerOptions &&
                    dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
                    dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
            };

            $scope.compare = function(date1, date2) {
                return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            };

            //对插件中原来显示的时间进行转换，显示为季度
            $scope.dateSelection = function(dt) {
                $scope.date = dt;
                var date = $scope.date ? dateParser.filter($scope.date, dateFormat) : null; // Setting to NULL is necessary for form validators to function
                // var date = $scope.date? $filter('date')($scope.date,'yyyy/MM/dd'):$filter('date')(new Date(),'yyyy/MM/dd');
                if(date){
                    var array = date.split('-');
                    var dateQuartery = array[1];
                    var dateYear = array[0];
                    switch (dateQuartery){
                        case '01':
                            showQuartery = "第一季度";
                            break;
                        case '02':
                            showQuartery = "第一季度";
                            break;
                        case '03':
                            showQuartery = "第一季度";
                            break;
                        case '04':
                            showQuartery = "第二季度";
                            break;
                        case '05':
                            showQuartery = "第二季度";
                            break;
                        case '06':
                            showQuartery = "第二季度";
                            break;
                        case '07':
                            showQuartery = "第三季度";
                            break;
                        case '08':
                            showQuartery = "第三季度";
                            break;
                        case '09':
                            showQuartery = "第三季度";
                            break;
                        case '10':
                            showQuartery = "第四季度";
                            break;
                        case '11':
                            showQuartery = "第四季度";
                            break;
                        case '12':
                            showQuartery = "第四季度";
                            break;
                    }
                    var showDate = dateYear.concat('-',showQuartery);
                    $element.val(showDate);
        ngModel.$setViewValue(showDate);
                }else {
                    $element.val(date);
                    ngModel.$setViewValue(date);

                }

                if (closeOnDateSelection) {
                    $scope.isOpen = false;
                    $element[0].focus();
                }
            };

            $scope.keydown = function(evt) {
                if (evt.which === 27) {
                    evt.stopPropagation();
                    $scope.isOpen = false;
                    $element[0].focus();
                }
            };

            $scope.select = function(date, evt) {
                evt.stopPropagation();
                if (date === 'today') {
                    var today = new Date();
                    if (angular.isDate($scope.date)) {
                        date = new Date($scope.date);
                        date.setFullYear(today.getFullYear(), today.getMonth(), today.getDate());
                    } else {
                        date = dateParser.fromTimezone(today, ngModelOptions.timezone);
                        date.setHours(0, 0, 0, 0);
                    }
                }
                $scope.dateSelection(date);
            };

            $scope.close = function(evt) {
                evt.stopPropagation();

                $scope.isOpen = false;
                $element[0].focus();
            };

            $scope.disabled = angular.isDefined($attrs.disabled) || false;
            if ($attrs.ngDisabled) {
                watchListeners.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(disabled) {
                    $scope.disabled = disabled;
                }));
            }

            $scope.$watch('isOpen', function(value) {
                if (value) {
                    if (!$scope.disabled) {
                        $timeout(function() {
                            positionPopup();

                            if (onOpenFocus) {
                                $scope.$broadcast('uib:datepicker.focus');
                            }

                            $document.on('click', documentClickBind);

                            var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
                            if (appendToBody || $position.parsePlacement(placement)[2]) {
                                scrollParentEl = scrollParentEl || angular.element($position.scrollParent($element));
                                if (scrollParentEl) {
                                    scrollParentEl.on('scroll', positionPopup);
                                }
                            } else {
                                scrollParentEl = null;
                            }

                            angular.element($window).on('resize', positionPopup);
                        }, 0, false);
                    } else {
                        $scope.isOpen = false;
                    }
                } else {
                    $document.off('click', documentClickBind);
                    if (scrollParentEl) {
                        scrollParentEl.off('scroll', positionPopup);
                    }
                    angular.element($window).off('resize', positionPopup);
                }
            });

            function cameltoDash(string) {
                return string.replace(/([A-Z])/g, function($1) { return '-' + $1.toLowerCase(); });
            }

            function parseDateString(viewValue) {
                var date = dateParser.parse(viewValue, dateFormat, $scope.date);
                // if (isNaN(date)) {
                //     for (var i = 0; i < altInputFormats.length; i++) {
                //         date = dateParser.parse(viewValue, altInputFormats[i], $scope.date);
                //         if (!isNaN(date)) {
                //             return date;
                //         }
                //     }
                // }
                return date;
            }

            function parseDate(viewValue) {
                if (angular.isNumber(viewValue)) {
                    // presumably timestamp to date object
                    viewValue = new Date(viewValue);
                }

                if (!viewValue) {
                    return null;
                }

                if (angular.isDate(viewValue) && !isNaN(viewValue)) {
                    return viewValue;
                }

                if (angular.isString(viewValue)) {
                    var date = parseDateString(viewValue);
                    if (!isNaN(date)) {
                        return dateParser.fromTimezone(date, ngModelOptions.timezone);
                    }
                }

                return ngModel.$options && ngModel.$options.allowInvalid ? viewValue : undefined;
            }

            function validator(modelValue, viewValue) {
                var value = modelValue || viewValue;

                if (!$attrs.ngRequired && !value) {
                    return true;
                }

                if (angular.isNumber(value)) {
                    value = new Date(value);
                }

                if (!value) {
                    return true;
                }

                if (angular.isDate(value) && !isNaN(value)) {
                    return true;
                }

                if (angular.isString(value)) {
                    return !isNaN(parseDateString(value));
                }

                return false;
            }

            function documentClickBind(event) {
                if (!$scope.isOpen && $scope.disabled) {
                    return;
                }

                var popup = $popup[0];
                var dpContainsTarget = $element[0].contains(event.target);
                // The popup node may not be an element node
                // In some browsers (IE) only element nodes have the 'contains' function
                var popupContainsTarget = popup.contains !== undefined && popup.contains(event.target);
                if ($scope.isOpen && !(dpContainsTarget || popupContainsTarget)) {
                    $scope.$apply(function() {
                        $scope.isOpen = false;
                    });
                }
            }

            function inputKeydownBind(evt) {
                if (evt.which === 27 && $scope.isOpen) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    $scope.$apply(function() {
                        $scope.isOpen = false;
                    });
                    $element[0].focus();
                } else if (evt.which === 40 && !$scope.isOpen) {
                    evt.preventDefault();
                    evt.stopPropagation();
                    $scope.$apply(function() {
                        $scope.isOpen = true;
                    });
                }
            }

            function positionPopup() {
                if ($scope.isOpen) {
                    var dpElement = angular.element($popup[0].querySelector('.uib-datepicker-popup'));
                    var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datepickerPopupConfig.placement;
                    var position = $position.positionElements($element, dpElement, placement, appendToBody);
                    dpElement.css({top: position.top + 'px', left: position.left + 'px'});
                    if (dpElement.hasClass('uib-position-measure')) {
                        dpElement.removeClass('uib-position-measure');
                    }
                }
            }

            $scope.$on('uib:datepicker.mode', function() {
                $timeout(positionPopup, 0, false);
            });
        }])
    .controller('UibMyDatepickerController', ['$scope', '$element', '$attrs', '$parse', '$interpolate', '$locale', '$log', 'dateFilter', 'uibmyDatepickerConfig', '$datepickerLiteralWarning', '$datepickerSuppressError', 'uibDateParser',
        function($scope, $element, $attrs, $parse, $interpolate, $locale, $log, dateFilter, datepickerConfig, $datepickerLiteralWarning, $datepickerSuppressError, dateParser) {
            var self = this,
                ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl;
                ngModelOptions = {},
                watchListeners = [];

            $element.addClass('uib-datepicker');
            $attrs.$set('role', 'application');

            if (!$scope.datepickerOptions) {
                $scope.datepickerOptions = {};
            }

            // Modes chain
            this.modes = ['day', 'month', 'year'];

            [
                'customClass',
                'dateDisabled',
                'datepickerMode',
                'formatDay',
                'formatDayHeader',
                'formatDayTitle',
                'formatMonth',
                'formatMonthTitle',
                'formatYear',
                'maxDate',
                'maxMode',
                'minDate',
                'minMode',
                'monthColumns',
                'showWeeks',
                'shortcutPropagation',
                'startingDay',
                'yearColumns',
                'yearRows'
            ].forEach(function(key) {
                switch (key) {
                    case 'customClass':
                    case 'dateDisabled':
                        $scope[key] = $scope.datepickerOptions[key] || angular.noop;
                        break;
                    case 'datepickerMode':
                        $scope.datepickerMode = angular.isDefined($scope.datepickerOptions.datepickerMode) ?
                            $scope.datepickerOptions.datepickerMode : datepickerConfig.datepickerMode;
                        break;
                    case 'formatDay':
                    case 'formatDayHeader':
                    case 'formatDayTitle':
                    case 'formatMonth':
                    case 'formatMonthTitle':
                    case 'formatYear':
                        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
                            $interpolate($scope.datepickerOptions[key])($scope.$parent) :
                            datepickerConfig[key];
                        break;
                    case 'monthColumns':
                    case 'showWeeks':
                    case 'shortcutPropagation':
                    case 'yearColumns':
                    case 'yearRows':
                        self[key] = angular.isDefined($scope.datepickerOptions[key]) ?
                            $scope.datepickerOptions[key] : datepickerConfig[key];
                        break;
                    case 'startingDay':
                        if (angular.isDefined($scope.datepickerOptions.startingDay)) {
                            self.startingDay = $scope.datepickerOptions.startingDay;
                        } else if (angular.isNumber(datepickerConfig.startingDay)) {
                            self.startingDay = datepickerConfig.startingDay;
                        } else {
                            self.startingDay = ($locale.DATETIME_FORMATS.FIRSTDAYOFWEEK + 8) % 7;
                        }

                        break;
                    case 'maxDate':
                    case 'minDate':
                        $scope.$watch('datepickerOptions.' + key, function(value) {
                            if (value) {
                                if (angular.isDate(value)) {
                                    self[key] = dateParser.fromTimezone(new Date(value), ngModelOptions.timezone);
                                } else {
                                    if ($datepickerLiteralWarning) {
                                        $log.warn('Literal date support has been deprecated, please switch to date object usage');
                                    }

                                    self[key] = new Date(dateFilter(value, 'medium'));
                                }
                            } else {
                                self[key] = datepickerConfig[key] ?
                                    dateParser.fromTimezone(new Date(datepickerConfig[key]), ngModelOptions.timezone) :
                                    null;
                            }

                            self.refreshView();
                        });

                        break;
                    case 'maxMode':
                    case 'minMode':
                        if ($scope.datepickerOptions[key]) {
                            $scope.$watch(function() { return $scope.datepickerOptions[key]; }, function(value) {
                                self[key] = $scope[key] = angular.isDefined(value) ? value : $scope.datepickerOptions[key];
                                if (key === 'minMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) < self.modes.indexOf(self[key]) ||
                                    key === 'maxMode' && self.modes.indexOf($scope.datepickerOptions.datepickerMode) > self.modes.indexOf(self[key])) {
                                    $scope.datepickerMode = self[key];
                                    $scope.datepickerOptions.datepickerMode = self[key];
                                }
                            });
                        } else {
                            self[key] = $scope[key] = datepickerConfig[key] || null;
                        }

                        break;
                }
            });

            $scope.uniqueId = 'datepicker-' + $scope.$id + '-' + Math.floor(Math.random() * 10000);

            $scope.disabled = angular.isDefined($attrs.disabled) || false;
            if (angular.isDefined($attrs.ngDisabled)) {
                watchListeners.push($scope.$parent.$watch($attrs.ngDisabled, function(disabled) {
                    $scope.disabled = disabled;
                    self.refreshView();
                }));
            }

            $scope.isActive = function(dateObject) {
                if (self.compare(dateObject.date, self.activeDate) === 0) {
                    $scope.activeDateId = dateObject.uid;
                    return true;
                }
                return false;
            };

            this.init = function(ngModelCtrl_) {
                ngModelCtrl = ngModelCtrl_;
                ngModelOptions = ngModelCtrl_.$options ||
                    $scope.datepickerOptions.ngModelOptions ||
                    datepickerConfig.ngModelOptions;
                if ($scope.datepickerOptions.initDate) {
                    self.activeDate = dateParser.fromTimezone($scope.datepickerOptions.initDate, ngModelOptions.timezone) || new Date();
                    $scope.$watch('datepickerOptions.initDate', function(initDate) {
                        if (initDate && (ngModelCtrl.$isEmpty(ngModelCtrl.$modelValue) || ngModelCtrl.$invalid)) {
                            self.activeDate = dateParser.fromTimezone(initDate, ngModelOptions.timezone);
                            self.refreshView();
                        }
                    });
                } else {
                    self.activeDate = new Date();
                }

                var date = ngModelCtrl.$modelValue ? new Date(ngModelCtrl.$modelValue) : new Date();
                this.activeDate = !isNaN(date) ?
                    dateParser.fromTimezone(date, ngModelOptions.timezone) :
                    dateParser.fromTimezone(new Date(), ngModelOptions.timezone);

                ngModelCtrl.$render = function() {
                    self.render();
                };
            };

            this.render = function() {
                if (ngModelCtrl.$viewValue) {
                    var date = new Date(ngModelCtrl.$viewValue),
                        isValid = !isNaN(date);
                    if (isValid) {
                        this.activeDate = dateParser.fromTimezone(date, ngModelOptions.timezone);
                    } else if (!$datepickerSuppressError) {
                        $log.error('Datepicker directive: "ng-model" value must be a Date object');
                    }
                }
                this.refreshView();
            };

            this.refreshView = function() {
                if (this.element) {
                    $scope.selectedDt = null;
                    this._refreshView();
                    if ($scope.activeDt) {
                        $scope.activeDateId = $scope.activeDt.uid;
                    }

                    var date = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
                    date = dateParser.fromTimezone(date, ngModelOptions.timezone);
                    ngModelCtrl.$setValidity('dateDisabled', !date ||
                        this.element && !this.isDisabled(date));
                }
            };

            this.createDateObject = function(date, format) {
                var model = ngModelCtrl.$viewValue ? new Date(ngModelCtrl.$viewValue) : null;
                model = dateParser.fromTimezone(model, ngModelOptions.timezone);
                var today = new Date();
                var curQuartery;
                today = dateParser.fromTimezone(today, ngModelOptions.timezone);
                switch (dateParser.filter(date, format)){
                    case'January':
                        curQuartery="第一季度";
                        break;
                    case 'February':
                        curQuartery="第一季度";
                        break;
                    case 'March':
                        curQuartery="第一季度";
                        break;
                    case 'April':
                        curQuartery="第二季度";
                        break;
                    case 'May':
                        curQuartery="第二季度";
                        break;
                    case 'June':
                        curQuartery="第二季度";
                        break;
                    case 'July':
                        curQuartery="第三季度";
                        break;
                    case 'August':
                        curQuartery="第三季度";
                        break;
                    case 'September':
                        curQuartery="第三季度";
                        break;
                    case 'October':
                        curQuartery="第四季度";
                        break;
                    case 'November':
                        curQuartery="第四季度";
                        break;
                    case 'December':
                        curQuartery="第四季度";
                        break;

                }
                var time = this.compare(date, today);
                var dt = {
                    date: date,
                    label: dateParser.filter(date, format),
                    quartery:curQuartery,
                    selected: model && this.compare(date, model) === 0,
                    disabled: this.isDisabled(date),
                    past: time < 0,
                    current: time === 0,
                    future: time > 0,
                    customClass: this.customClass(date) || null
                };

                if (model && this.compare(date, model) === 0) {
                    $scope.selectedDt = dt;
                }

                if (self.activeDate && this.compare(dt.date, self.activeDate) === 0) {
                    $scope.activeDt = dt;
                }

                return dt;
            };

            this.isDisabled = function(date) {
                return $scope.disabled ||
                    this.minDate && this.compare(date, this.minDate) < 0 ||
                    this.maxDate && this.compare(date, this.maxDate) > 0 ||
                    $scope.dateDisabled && $scope.dateDisabled({date: date, mode: $scope.datepickerMode});
            };

            this.customClass = function(date) {
                return $scope.customClass({date: date, mode: $scope.datepickerMode});
            };

            // Split array into smaller arrays
            this.split = function(arr, size) {
                var arrays = [];
                while (arr.length > 0) {
                    arrays.push(arr.splice(0, size));
                }
                return arrays;
            };

            $scope.select = function(date) {
                if ($scope.datepickerMode === self.minMode) {
                    var dt = ngModelCtrl.$viewValue ? dateParser.fromTimezone(new Date(ngModelCtrl.$viewValue), ngModelOptions.timezone) : new Date(0, 0, 0, 0, 0, 0, 0);
                    dt.setFullYear(date.getFullYear(), date.getMonth(), date.getDate());
                    dt = dateParser.toTimezone(dt, ngModelOptions.timezone);
                    ngModelCtrl.$setViewValue(dt);
                    ngModelCtrl.$render();
                } else {
                    self.activeDate = date;
                    setMode(self.modes[self.modes.indexOf($scope.datepickerMode) - 1]);
                    $scope.$emit('uib:datepicker.mode');
                }
                $scope.$broadcast('uib:datepicker.focus');
            };

            $scope.move = function(direction) {
                var year = self.activeDate.getFullYear() + direction * (self.step.years || 0),
                    month = self.activeDate.getMonth() + direction * (self.step.months || 0);
                self.activeDate.setFullYear(year, month, 1);
                self.refreshView();
            };

            $scope.toggleMode = function(direction) {
                direction = direction || 1;

                if ($scope.datepickerMode === self.maxMode && direction === 1 ||
                    $scope.datepickerMode === self.minMode && direction === -1) {
                    return;
                }

                setMode(self.modes[self.modes.indexOf($scope.datepickerMode) + direction]);

                $scope.$emit('uib:datepicker.mode');
            };

            // Key event mapper
            $scope.keys = { 13: 'enter', 32: 'space', 33: 'pageup', 34: 'pagedown', 35: 'end', 36: 'home', 37: 'left', 38: 'up', 39: 'right', 40: 'down' };

            var focusElement = function() {
                self.element[0].focus();
            };

            // Listen for focus requests from popup directive
            $scope.$on('uib:datepicker.focus', focusElement);

            $scope.keydown = function(evt) {
                var key = $scope.keys[evt.which];

                if (!key || evt.shiftKey || evt.altKey || $scope.disabled) {
                    return;
                }

                evt.preventDefault();
                if (!self.shortcutPropagation) {
                    evt.stopPropagation();
                }

                if (key === 'enter' || key === 'space') {
                    if (self.isDisabled(self.activeDate)) {
                        return; // do nothing
                    }
                    $scope.select(self.activeDate);
                } else if (evt.ctrlKey && (key === 'up' || key === 'down')) {
                    $scope.toggleMode(key === 'up' ? 1 : -1);
                } else {
                    self.handleKeyDown(key, evt);
                    self.refreshView();
                }
            };

            $element.on('keydown', function(evt) {
                $scope.$apply(function() {
                    $scope.keydown(evt);
                });
            });

            $scope.$on('$destroy', function() {
                //Clear all watch listeners on destroy
                while (watchListeners.length) {
                    watchListeners.shift()();
                }
            });

            function setMode(mode) {
                $scope.datepickerMode = mode;
                $scope.datepickerOptions.datepickerMode = mode;
            }
        }])
    .controller('UibMyMonthpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
        this.step = { years: 1 };
        this.element = $element;

        this.init = function(ctrl) {
            angular.extend(ctrl, this);
            ctrl.refreshView();
        };

        this._refreshView = function() {
            var months = new Array(4),
                year = this.activeDate.getFullYear(),
                date;
                for(var j=0;j<12;j++){
                    date = new Date(this.activeDate);
                    date.setFullYear(year, j, 1);
                    if(j==0||j==1||j==2){
                        months[0] = angular.extend(this.createDateObject(date, this.formatMonth), {
                            uid: scope.uniqueId + '-' + j
                        });
                    }
                    else if(j==3||j==4||j==5){
                        months[1] = angular.extend(this.createDateObject(date, this.formatMonth), {
                            uid: scope.uniqueId + '-' + j
                        });
                    }
                    else if(j==6||j==7||j==8){
                        months[2] = angular.extend(this.createDateObject(date, this.formatMonth), {
                            uid: scope.uniqueId + '-' + j
                        });
                    }
                    else if(j==9||j==10||j==11){
                        months[3] = angular.extend(this.createDateObject(date, this.formatMonth), {
                            uid: scope.uniqueId + '-' + j
                        });
                    }
                }
            // for(var j=0;j<4;j++){
            //     date = new Date(this.activeDate);
            //     date.setFullYear(year, j, 1);
            //         months[j] = angular.extend(this.createDateObject(date, this.formatMonth), {
            //             uid: scope.uniqueId + '-' + j
            //         });
            // }
            scope.title = dateFilter(this.activeDate, this.formatMonthTitle);
            scope.rows = this.split(months, this.monthColumns);
            scope.yearHeaderColspan = this.monthColumns > 3 ? this.monthColumns - 2 : 1;
        };

        this.compare = function(date1, date2) {
            var _date1 = new Date(date1.getFullYear(), date1.getMonth());
            var _date2 = new Date(date2.getFullYear(), date2.getMonth());
            _date1.setFullYear(date1.getFullYear());
            _date2.setFullYear(date2.getFullYear());
            return _date1 - _date2;
        };

        this.handleKeyDown = function(key, evt) {
            var date = this.activeDate.getMonth();

            if (key === 'left') {
                date = date - 1;
            } else if (key === 'up') {
                date = date - this.monthColumns;
            } else if (key === 'right') {
                date = date + 1;
            } else if (key === 'down') {
                date = date + this.monthColumns;
            } else if (key === 'pageup' || key === 'pagedown') {
                var year = this.activeDate.getFullYear() + (key === 'pageup' ? - 1 : 1);
                this.activeDate.setFullYear(year);
            } else if (key === 'home') {
                date = 0;
            } else if (key === 'end') {
                date = 11;
            }
            this.activeDate.setMonth(date);
        };
    }])

    .controller('UibMyYearpickerController', ['$scope', '$element', 'dateFilter', function(scope, $element, dateFilter) {
        var columns, range;
        this.element = $element;

        function getStartingYear(year) {
            return parseInt((year - 1) / range, 10) * range + 1;
        }

        this.yearpickerInit = function() {
            columns = this.yearColumns;
            range = this.yearRows * columns;
            this.step = { years: range };
        };

        this._refreshView = function() {
            var years = new Array(range), date;

            for (var i = 0, start = getStartingYear(this.activeDate.getFullYear()); i < range; i++) {
                date = new Date(this.activeDate);
                date.setFullYear(start + i, 0, 1);
                years[i] = angular.extend(this.createDateObject(date, this.formatYear), {
                    uid: scope.uniqueId + '-' + i
                });
            }

            scope.title = [years[0].label, years[range - 1].label].join(' - ');
            scope.rows = this.split(years, columns);
            scope.columns = columns;
        };

        this.compare = function(date1, date2) {
            return date1.getFullYear() - date2.getFullYear();
        };

        this.handleKeyDown = function(key, evt) {
            var date = this.activeDate.getFullYear();

            if (key === 'left') {
                date = date - 1;
            } else if (key === 'up') {
                date = date - columns;
            } else if (key === 'right') {
                date = date + 1;
            } else if (key === 'down') {
                date = date + columns;
            } else if (key === 'pageup' || key === 'pagedown') {
                date += (key === 'pageup' ? - 1 : 1) * range;
            } else if (key === 'home') {
                date = getStartingYear(this.activeDate.getFullYear());
            } else if (key === 'end') {
                date = getStartingYear(this.activeDate.getFullYear()) + range - 1;
            }
            this.activeDate.setFullYear(date);
        };
    }])
    .directive('uibMydate', function() {
        return {
            require: ['ngModel', 'uibMydate'],
            controller: 'UibMyDateController',
            scope: {
                mydatepickerOptions: '=?',
                isOpen: '=?',
                currentText: '@',
                clearText: '@',
                closeText: '@'
            },
            link: function(scope, element, attrs, ctrls) {
                var ngModel = ctrls[0],
                    ctrl = ctrls[1];

                ctrl.init(ngModel);
            }
        };
    })
    .directive('uibMydateWrap', function() {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || 'uib/template/mydate/popup.html';
            }
        };
    })
    .directive('uibMydatepicker', function() {
    return {
        templateUrl: function(element, attrs) {
            return attrs.templateUrl || 'uib/template/mydate/datepicker.html';
        },
        scope: {
            mydatepickerOptions: '=?'
        },
        require: ['uibMydatepicker', '^ngModel'],
        restrict: 'A',
        controller: 'UibMyDatepickerController',
        controllerAs: 'datepicker',
        link: function(scope, element, attrs, ctrls) {
            var datepickerCtrl = ctrls[0], ngModelCtrl = ctrls[1];

            datepickerCtrl.init(ngModelCtrl);
        }
    };
})
    .directive('uibMymonthpicker', function() {
        return {
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || 'uib/template/mydate/month.html';
            },
            require: ['^uibMydatepicker', 'uibMymonthpicker'],
            restrict: 'A',
            controller: 'UibMyMonthpickerController',
            link: function(scope, element, attrs, ctrls) {
                var datepickerCtrl = ctrls[0],
                    monthpickerCtrl = ctrls[1];

                monthpickerCtrl.init(datepickerCtrl);
            }
        };
    })
    .directive('uibMyyearpicker', function() {
        return {
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || 'uib/template/mydate/year.html';
            },
            require: ['^uibMydatepicker', 'uibMyyearpicker'],
            restrict: 'A',
            controller: 'UibMyYearpickerController',
            link: function(scope, element, attrs, ctrls) {
                var ctrl = ctrls[0];
                angular.extend(ctrl, ctrls[1]);
                ctrl.yearpickerInit();
                ctrl.refreshView();
            }
        };
    });
;