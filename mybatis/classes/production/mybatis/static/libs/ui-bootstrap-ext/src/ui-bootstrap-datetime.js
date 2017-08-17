/**
 * Created by wunana on 17/1/7.
 */
angular.module("uib/template/datetimepickerPopup/popup.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/datetimepickerPopup/popup.html",
        "<ul class=\"uib-datepicker-popup dropdown-menu uib-position-measure\" dropdown-nested ng-if=\"isOpen\" ng-keydown=\"keydown($event)\" ng-click=\"$event.stopPropagation()\">\n" +
        "<li ng-transclude></li>" +
        "<div style='display: block;position: relative'>" +
            '<div class=" clockPicker" uib-clockpicker ng-model="time" ng-change="changed()" show-seconds="true" show-meridian="false"  ></div>'+
        "    <button type=\"button\" class=\"btn btn-sm btn-success pull-right uib-close\" style='position: absolute;top: 50%;margin-top: -15px;right: 10px;' ng-click=\"close($event)\">{{\'datePicker.close.label\' | T}}</button>" +
        "</div>" +
        "</ul>" +
        "");
}]);
angular.module("uib/template/timepicker/clockpicker.html", []).run(["$templateCache", function($templateCache) {
    $templateCache.put("uib/template/timepicker/clockpicker.html",
        "<table class=\"uib-timepicker\">\n" +
        "  <tbody>\n" +
        "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
        "      <td class=\"uib-increment hours\"><a ng-click=\"incrementHours()\" ng-class=\"{disabled: noIncrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementHours()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
        "      <td>&nbsp;</td>\n" +
        "      <td class=\"uib-increment minutes\"><a ng-click=\"incrementMinutes()\" ng-class=\"{disabled: noIncrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementMinutes()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
        "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
        "      <td ng-show=\"showSeconds\" class=\"uib-increment seconds\"><a ng-click=\"incrementSeconds()\" ng-class=\"{disabled: noIncrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noIncrementSeconds()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-up\"></span></a></td>\n" +
        "      <td ng-show=\"showMeridian\"></td>\n" +
        "    </tr>\n" +
        "    <tr>\n" +
        "      <td class=\"form-group uib-time hours\" ng-class=\"{'has-error': invalidHours}\">\n" +
        "        <input type=\"text\" placeholder=\"HH\" ng-model=\"hours\" ng-change=\"updateHours()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementHours()\" ng-blur=\"blur()\">\n" +
        "      </td>\n" +
        "      <td class=\"uib-separator\">:</td>\n" +
        "      <td class=\"form-group uib-time minutes\" ng-class=\"{'has-error': invalidMinutes}\">\n" +
        "        <input type=\"text\" placeholder=\"MM\" ng-model=\"minutes\" ng-change=\"updateMinutes()\" class=\"form-control text-center\" ng-readonly=\"::readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementMinutes()\" ng-blur=\"blur()\">\n" +
        "      </td>\n" +
        "      <td ng-show=\"showSeconds\" class=\"uib-separator\">:</td>\n" +
        "      <td class=\"form-group uib-time seconds\" ng-class=\"{'has-error': invalidSeconds}\" ng-show=\"showSeconds\">\n" +
        "        <input type=\"text\" placeholder=\"SS\" ng-model=\"seconds\" ng-change=\"updateSeconds()\" class=\"form-control text-center\" ng-readonly=\"readonlyInput\" maxlength=\"2\" tabindex=\"{{::tabindex}}\" ng-disabled=\"noIncrementSeconds()\" ng-blur=\"blur()\">\n" +
        "      </td>\n" +
        "      <td ng-show=\"showMeridian\" class=\"uib-time am-pm\"><button type=\"button\" ng-class=\"{disabled: noToggleMeridian()}\" class=\"btn btn-default text-center\" ng-click=\"toggleMeridian()\" ng-disabled=\"noToggleMeridian()\" tabindex=\"{{::tabindex}}\">{{meridian}}</button></td>\n" +
        "    </tr>\n" +
        "    <tr class=\"text-center\" ng-show=\"::showSpinners\">\n" +
        "      <td class=\"uib-decrement hours\"><a ng-click=\"decrementHours()\" ng-class=\"{disabled: noDecrementHours()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementHours()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
        "      <td>&nbsp;</td>\n" +
        "      <td class=\"uib-decrement minutes\"><a ng-click=\"decrementMinutes()\" ng-class=\"{disabled: noDecrementMinutes()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementMinutes()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
        "      <td ng-show=\"showSeconds\">&nbsp;</td>\n" +
        "      <td ng-show=\"showSeconds\" class=\"uib-decrement seconds\"><a ng-click=\"decrementSeconds()\" ng-class=\"{disabled: noDecrementSeconds()}\" class=\"btn btn-link\" ng-disabled=\"noDecrementSeconds()\" tabindex=\"-1\"><span class=\"glyphicon glyphicon-chevron-down\"></span></a></td>\n" +
        "      <td ng-show=\"showMeridian\"></td>\n" +
        "    </tr>\n" +
        "  </tbody>\n" +
        "</table>\n" +
        "");
}]);
angular.module('ui.bootstrap.datetimepickerPopup', ['ui.bootstrap.datepicker', 'ui.bootstrap.position'])

    .value('$datepickerPopupLiteralWarning', true)

    .constant('uibDatetimepickerPopupConfig', {
        altInputFormats: [],
        appendToBody: false,
        clearText: 'Clear',
        closeOnDateSelection: true,
        closeText: 'Done',
        currentText: 'Today',
        datepickerPopup: 'yyyy-MM-dd',
        datepickerPopupTemplateUrl: 'uib/template/datetimepickerPopup/popup.html',
        datepickerTemplateUrl: 'uib/template/datepicker/datepicker.html',
        html5Types: {
            date: 'yyyy-MM-dd',
            'datetime-local': 'yyyy-MM-ddTHH:mm:ss.sss',
            'month': 'yyyy-MM'
        },
        onOpenFocus: true,
        showButtonBar: true,
        placement: 'auto bottom-left'
    })

    .controller('UibDatetimepickerPopupController', ['$scope', '$element', '$attrs', '$compile', '$log', '$parse', '$window', '$document', '$rootScope', '$uibPosition', 'dateFilter', 'uibDateParser', 'uibDatetimepickerPopupConfig', '$timeout', 'uibDatepickerConfig', '$datepickerPopupLiteralWarning','$filter','T','moment',
        function($scope, $element, $attrs, $compile, $log, $parse, $window, $document, $rootScope, $position, dateFilter, dateParser, datetimepickerPopupConfig, $timeout, datepickerConfig, $datepickerPopupLiteralWarning,$filter,T,moment) {
            var cache = {},
                isHtml5DateInput = false;
            var closeOnDateSelection, appendToBody, onOpenFocus,
                datepickerPopupTemplateUrl, datepickerTemplateUrl, popupEl, datepickerEl, scrollParentEl,
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
                    datetimepickerPopupConfig.closeOnDateSelection;
                appendToBody = angular.isDefined($attrs.datepickerAppendToBody) ?
                    $scope.$parent.$eval($attrs.datepickerAppendToBody) :
                    datetimepickerPopupConfig.appendToBody;
                onOpenFocus = angular.isDefined($attrs.onOpenFocus) ?
                    $scope.$parent.$eval($attrs.onOpenFocus) : datetimepickerPopupConfig.onOpenFocus;
                datepickerPopupTemplateUrl = angular.isDefined($attrs.datepickerPopupTemplateUrl) ?
                    $attrs.datepickerPopupTemplateUrl :
                    datetimepickerPopupConfig.datepickerPopupTemplateUrl;
                datepickerTemplateUrl = angular.isDefined($attrs.datepickerTemplateUrl) ?
                    $attrs.datepickerTemplateUrl : datetimepickerPopupConfig.datepickerTemplateUrl;
                altInputFormats = angular.isDefined($attrs.altInputFormats) ?
                    $scope.$parent.$eval($attrs.altInputFormats) :
                    datetimepickerPopupConfig.altInputFormats;

                $scope.showButtonBar = angular.isDefined($attrs.showButtonBar) ?
                    $scope.$parent.$eval($attrs.showButtonBar) :
                    datetimepickerPopupConfig.showButtonBar;

                //用于拼接的全局变量
                $scope.fullTime="";
                $scope.fullDate="";

                // popup element used to display calendar
                popupEl = angular.element('<div uib-datetimepicker-popup-wrap><div uib-datepicker></div></div>');
                popupEl.attr({
                    'ng-model': 'date',
                    'ng-change': 'dateSelection(date)',
                    'template-url': datepickerPopupTemplateUrl
                });

                // datepicker element
                datepickerEl = angular.element(popupEl.children()[0]);
                datepickerEl.attr('template-url', datepickerTemplateUrl);

                if (!$scope.datepickerOptions) {
                    $scope.datepickerOptions = {};
                }

                datepickerEl.attr('datepicker-options', 'datepickerOptions');


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

            $scope.getText = function(key) {
                return $scope[key + 'Text'] || datetimepickerPopupConfig[key + 'Text'];
            };

            $scope.isDisabled = function(date) {
                if (date === 'today') {
                    date = dateParser.fromTimezone(new Date(), ngModelOptions.timezone);
                }

                var dates = {};
                angular.forEach(['minDate', 'maxDate'], function(key) {
                    if (!$scope.datepickerOptions[key]) {
                        dates[key] = null;
                    } else if (angular.isDate($scope.datepickerOptions[key])) {
                        dates[key] = new Date($scope.datepickerOptions[key]);
                    } else {
                        if ($datepickerPopupLiteralWarning) {
                            $log.warn('Literal date support has been deprecated, please switch to date object usage');
                        }

                        dates[key] = new Date(dateFilter($scope.datepickerOptions[key], 'medium'));
                    }
                });

                return $scope.datepickerOptions &&
                    dates.minDate && $scope.compare(date, dates.minDate) < 0 ||
                    dates.maxDate && $scope.compare(date, dates.maxDate) > 0;
            };

            $scope.compare = function(date1, date2) {
                return new Date(date1.getFullYear(), date1.getMonth(), date1.getDate()) - new Date(date2.getFullYear(), date2.getMonth(), date2.getDate());
            };
            $scope.timeSelection = function(time){
                $scope.time = time;
                var curDate=new Date();
                // var curFullDate = $filter('date')(curDate,'yyyy-MM-dd');
                var curFullDate=moment(new Date()).format('YYYY-MM-DD');	//date to str
                // $scope.fullTime = $filter('date')(time,'HH:mm:ss');
                $scope.fullTime = moment(time).format('HH:mm:ss');
                var aaa =$scope.fulldate? $scope.fulldate.concat(' ',$scope.fullTime):curFullDate.concat(' ',$scope.fullTime);
                $scope.date = new Date(aaa);
                $scope.dateSelection($scope.date);
            }
            // Inner change
            $scope.dateSelection = function(dt) {
                $scope.date = dt;
                var curTime=new Date();
                // var curFullTime = $filter('date')(curTime,'HH:mm:ss');
                var curFullTime=moment(new Date()).format('HH:mm:ss');
                $scope.fulldate = $scope.date ? moment($scope.date).format('YYYY-MM-DD') :null;
                $scope.date = $scope.fullTime? $scope.fulldate.concat(' ',$scope.fullTime):$scope.fulldate.concat(' ',curFullTime);
                $element.val($scope.date);
                ngModel.$setViewValue($scope.date);

            };
            $scope.$watch('date',function () {
                ngModel.$setViewValue($scope.date);
                var column = $scope.$eval($attrs["uibDatetimepickerPopup"]);
                if(column && column.required){
                    if ($scope.date !== "" && $scope.date !== null) {
                            if (isdateArrayFn(column.validate)) {
                                console.log("组合校验");
                            }
                            if (isDateFunction(column.validate)) {
                                console.log("函数校验");
                            } else {
                                if (angular.isUndefined(column.validate)) return;
                                var currentDate = new Date($scope.date);//当前日期,月份,年份
                                var minDate = new Date(column.validate.min);
                                var maxDate = new Date(column.validate.max);
                                if (currentDate < minDate && undefined !== $scope.date || currentDate > maxDate && undefined !== $scope.date) {
                                    $scope.$parent.warnMess = true;
                                    $element.addClass('warn-form-control');
                                } else if (undefined !== $scope.date) {
                                    $element.removeClass('warn-form-control');
                                    $scope.$parent.warnMess = false
                                }
                                else if ($scope.date === undefined) {
                                    console.log("日期不存在")
                                }
                            }
                        }
                }
            },true);


            function isdateArrayFn(value) {
                if (typeof Array.isArray === "function") {
                    return Array.isArray(value);
                } else {
                    return Object.prototype.toString.call(value) === "[object Array]";
                }
            }

            function isDateFunction(fn) {
                return Object.prototype.toString.call(fn) === '[object Function]';
            }

            $scope.keydown = function(evt) {
                if (evt.which === 27) {
                    evt.stopPropagation();
                    $scope.isOpen = false;
                    $element[0].focus();
                }
            };

            $scope.select = function(date, evt) {
                console.log("select选择方法----");
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

                            var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datetimepickerPopupConfig.placement;
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
                    var placement = $attrs.popupPlacement ? $attrs.popupPlacement : datetimepickerPopupConfig.placement;
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

    .directive('uibDatetimepickerPopup', function() {
        return {
            require: ['ngModel', '?^uibDatetimepickerPopup'],
            controller: 'UibDatetimepickerPopupController',
            scope: {
                datepickerOptions: '=?',
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

    .directive('uibDatetimepickerPopupWrap', function() {
        return {
            restrict: 'A',
            transclude: true,
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || 'uib/template/datetimepickerPopup/popup.html';
            }
        };
    })

//TODO
    .constant('uibTimepickerConfig', {
        hourStep: 1,
        minuteStep: 1,
        secondStep: 1,
        showMeridian: true,
        showSeconds: false,
        meridians: null,
        readonlyInput: false,
        mousewheel: true,
        arrowkeys: true,
        showSpinners: true,
        templateUrl: 'uib/template/timepicker/clockpicker.html'
    })

    .controller('UibTimepickerController', ['$scope', '$element', '$attrs', '$parse', '$log', '$locale', 'uibTimepickerConfig','$filter', function($scope, $element, $attrs, $parse, $log, $locale, timepickerConfig,$filter) {
        var selected = new Date(),
            watchers = [],
            ngModelCtrl = { $setViewValue: angular.noop }, // nullModelCtrl
            meridians = angular.isDefined($attrs.meridians) ? $scope.$parent.$eval($attrs.meridians) : timepickerConfig.meridians || $locale.DATETIME_FORMATS.AMPMS,
            padHours = angular.isDefined($attrs.padHours) ? $scope.$parent.$eval($attrs.padHours) : true;

        $scope.tabindex = angular.isDefined($attrs.tabindex) ? $attrs.tabindex : 0;
        $element.removeAttr('tabindex');

        this.init = function(ngModelCtrl_, inputs) {
            ngModelCtrl = ngModelCtrl_;
            ngModelCtrl.$render = this.render;
            ngModelCtrl.$formatters.unshift(function(modelValue) {
                return modelValue ? new Date(modelValue) : null;
            });

            var hoursInputEl = inputs.eq(0),
                minutesInputEl = inputs.eq(1),
                secondsInputEl = inputs.eq(2);

            var mousewheel = angular.isDefined($attrs.mousewheel) ? $scope.$parent.$eval($attrs.mousewheel) : timepickerConfig.mousewheel;

            if (mousewheel) {
                this.setupMousewheelEvents(hoursInputEl, minutesInputEl, secondsInputEl);
            }

            var arrowkeys = angular.isDefined($attrs.arrowkeys) ? $scope.$parent.$eval($attrs.arrowkeys) : timepickerConfig.arrowkeys;
            if (arrowkeys) {
                this.setupArrowkeyEvents(hoursInputEl, minutesInputEl, secondsInputEl);
            }

            $scope.readonlyInput = angular.isDefined($attrs.readonlyInput) ? $scope.$parent.$eval($attrs.readonlyInput) : timepickerConfig.readonlyInput;
            this.setupInputEvents(hoursInputEl, minutesInputEl, secondsInputEl);
        };

        var hourStep = timepickerConfig.hourStep;
        if ($attrs.hourStep) {
            watchers.push($scope.$parent.$watch($parse($attrs.hourStep), function(value) {
                hourStep = +value;
            }));
        }

        var minuteStep = timepickerConfig.minuteStep;
        if ($attrs.minuteStep) {
            watchers.push($scope.$parent.$watch($parse($attrs.minuteStep), function(value) {
                minuteStep = +value;
            }));
        }

        var min;
        watchers.push($scope.$parent.$watch($parse($attrs.min), function(value) {
            var dt = new Date(value);
            min = isNaN(dt) ? undefined : dt;
        }));

        var max;
        watchers.push($scope.$parent.$watch($parse($attrs.max), function(value) {
            var dt = new Date(value);
            max = isNaN(dt) ? undefined : dt;
        }));

        var disabled = false;
        if ($attrs.ngDisabled) {
            watchers.push($scope.$parent.$watch($parse($attrs.ngDisabled), function(value) {
                disabled = value;
            }));
        }

        $scope.noIncrementHours = function() {
            var incrementedSelected = addMinutes(selected, hourStep * 60);
            return disabled || incrementedSelected > max ||
                incrementedSelected < selected && incrementedSelected < min;
        };

        $scope.noDecrementHours = function() {
            var decrementedSelected = addMinutes(selected, -hourStep * 60);
            return disabled || decrementedSelected < min ||
                decrementedSelected > selected && decrementedSelected > max;
        };

        $scope.noIncrementMinutes = function() {
            var incrementedSelected = addMinutes(selected, minuteStep);
            return disabled || incrementedSelected > max ||
                incrementedSelected < selected && incrementedSelected < min;
        };

        $scope.noDecrementMinutes = function() {
            var decrementedSelected = addMinutes(selected, -minuteStep);
            return disabled || decrementedSelected < min ||
                decrementedSelected > selected && decrementedSelected > max;
        };

        $scope.noIncrementSeconds = function() {
            var incrementedSelected = addSeconds(selected, secondStep);
            return disabled || incrementedSelected > max ||
                incrementedSelected < selected && incrementedSelected < min;
        };

        $scope.noDecrementSeconds = function() {
            var decrementedSelected = addSeconds(selected, -secondStep);
            return disabled || decrementedSelected < min ||
                decrementedSelected > selected && decrementedSelected > max;
        };

        $scope.noToggleMeridian = function() {
            if (selected.getHours() < 12) {
                return disabled || addMinutes(selected, 12 * 60) > max;
            }

            return disabled || addMinutes(selected, -12 * 60) < min;
        };

        var secondStep = timepickerConfig.secondStep;
        if ($attrs.secondStep) {
            watchers.push($scope.$parent.$watch($parse($attrs.secondStep), function(value) {
                secondStep = +value;
            }));
        }

        $scope.showSeconds = timepickerConfig.showSeconds;
        if ($attrs.showSeconds) {
            watchers.push($scope.$parent.$watch($parse($attrs.showSeconds), function(value) {
                $scope.showSeconds = !!value;
            }));
        }

        // 12H / 24H mode
        $scope.showMeridian = timepickerConfig.showMeridian;
        if ($attrs.showMeridian) {
            watchers.push($scope.$parent.$watch($parse($attrs.showMeridian), function(value) {
                $scope.showMeridian = !!value;

                if (ngModelCtrl.$error.time) {
                    // Evaluate from template
                    var hours = getHoursFromTemplate(), minutes = getMinutesFromTemplate();
                    if (angular.isDefined(hours) && angular.isDefined(minutes)) {
                        selected.setHours(hours);
                        refresh();
                    }
                } else {
                    updateTemplate();
                }
            }));
        }

        // Get $scope.hours in 24H mode if valid
        function getHoursFromTemplate() {
            var hours = +$scope.hours;
            var valid = $scope.showMeridian ? hours > 0 && hours < 13 :
            hours >= 0 && hours < 24;
            if (!valid || $scope.hours === '') {
                return undefined;
            }

            if ($scope.showMeridian) {
                if (hours === 12) {
                    hours = 0;
                }
                if ($scope.meridian === meridians[1]) {
                    hours = hours + 12;
                }
            }
            return hours;
        }

        function getMinutesFromTemplate() {
            var minutes = +$scope.minutes;
            var valid = minutes >= 0 && minutes < 60;
            if (!valid || $scope.minutes === '') {
                return undefined;
            }
            return minutes;
        }

        function getSecondsFromTemplate() {
            var seconds = +$scope.seconds;
            return seconds >= 0 && seconds < 60 ? seconds : undefined;
        }

        function pad(value, noPad) {
            if (value === null) {
                return '';
            }

            return angular.isDefined(value) && value.toString().length < 2 && !noPad ?
            '0' + value : value.toString();
        }


            // Respond on mousewheel spin
        this.setupMousewheelEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
            var isScrollingUp = function(e) {
                if (e.originalEvent) {
                    e = e.originalEvent;
                }
                //pick correct delta variable depending on event
                var delta = e.wheelDelta ? e.wheelDelta : -e.deltaY;
                return e.detail || delta > 0;
            };

            hoursInputEl.bind('mousewheel wheel', function(e) {
                if (!disabled) {
                    $scope.$apply(isScrollingUp(e) ? $scope.incrementHours() : $scope.decrementHours());
                }
                e.preventDefault();
            });

            minutesInputEl.bind('mousewheel wheel', function(e) {
                if (!disabled) {
                    $scope.$apply(isScrollingUp(e) ? $scope.incrementMinutes() : $scope.decrementMinutes());
                }
                e.preventDefault();
            });

            secondsInputEl.bind('mousewheel wheel', function(e) {
                if (!disabled) {
                    $scope.$apply(isScrollingUp(e) ? $scope.incrementSeconds() : $scope.decrementSeconds());
                }
                e.preventDefault();
            });
        };

        // Respond on up/down arrowkeys
        this.setupArrowkeyEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
            hoursInputEl.bind('keydown', function(e) {
                if (!disabled) {
                    if (e.which === 38) { // up
                        e.preventDefault();
                        $scope.incrementHours();
                        $scope.$apply();
                    } else if (e.which === 40) { // down
                        e.preventDefault();
                        $scope.decrementHours();
                        $scope.$apply();
                    }
                }
            });

            minutesInputEl.bind('keydown', function(e) {
                if (!disabled) {
                    if (e.which === 38) { // up
                        e.preventDefault();
                        $scope.incrementMinutes();
                        $scope.$apply();
                    } else if (e.which === 40) { // down
                        e.preventDefault();
                        $scope.decrementMinutes();
                        $scope.$apply();
                    }
                }
            });

            secondsInputEl.bind('keydown', function(e) {
                if (!disabled) {
                    if (e.which === 38) { // up
                        e.preventDefault();
                        $scope.incrementSeconds();
                        $scope.$apply();
                    } else if (e.which === 40) { // down
                        e.preventDefault();
                        $scope.decrementSeconds();
                        $scope.$apply();
                    }
                }
            });
        };

        this.setupInputEvents = function(hoursInputEl, minutesInputEl, secondsInputEl) {
            if ($scope.readonlyInput) {
                $scope.updateHours = angular.noop;
                $scope.updateMinutes = angular.noop;
                $scope.updateSeconds = angular.noop;
                return;
            }

            var invalidate = function(invalidHours, invalidMinutes, invalidSeconds) {
                ngModelCtrl.$setViewValue(null);
                ngModelCtrl.$setValidity('time', false);
                if (angular.isDefined(invalidHours)) {
                    $scope.invalidHours = invalidHours;
                }

                if (angular.isDefined(invalidMinutes)) {
                    $scope.invalidMinutes = invalidMinutes;
                }

                if (angular.isDefined(invalidSeconds)) {
                    $scope.invalidSeconds = invalidSeconds;
                }
            };

            $scope.updateHours = function() {
                var hours = getHoursFromTemplate(),
                    minutes = getMinutesFromTemplate();

                ngModelCtrl.$setDirty();

                if (angular.isDefined(hours) && angular.isDefined(minutes)) {
                    selected.setHours(hours);
                    selected.setMinutes(minutes);
                    if (selected < min || selected > max) {
                        invalidate(true);
                    } else {
                        refresh('h');
                    }
                } else {
                    invalidate(true);
                }
            };

            hoursInputEl.bind('blur', function(e) {
                ngModelCtrl.$setTouched();
                if (modelIsEmpty()) {
                    makeValid();
                } else if ($scope.hours === null || $scope.hours === '') {
                    invalidate(true);
                } else if (!$scope.invalidHours && $scope.hours < 10) {
                    $scope.$apply(function() {
                        $scope.hours = pad($scope.hours, !padHours);
                    });
                }
            });

            $scope.updateMinutes = function() {
                var minutes = getMinutesFromTemplate(),
                    hours = getHoursFromTemplate();

                ngModelCtrl.$setDirty();

                if (angular.isDefined(minutes) && angular.isDefined(hours)) {
                    selected.setHours(hours);
                    selected.setMinutes(minutes);
                    if (selected < min || selected > max) {
                        invalidate(undefined, true);
                    } else {
                        refresh('m');
                    }
                } else {
                    invalidate(undefined, true);
                }
            };

            minutesInputEl.bind('blur', function(e) {
                ngModelCtrl.$setTouched();
                if (modelIsEmpty()) {
                    makeValid();
                } else if ($scope.minutes === null) {
                    invalidate(undefined, true);
                } else if (!$scope.invalidMinutes && $scope.minutes < 10) {
                    $scope.$apply(function() {
                        $scope.minutes = pad($scope.minutes);
                    });
                }
            });

            $scope.updateSeconds = function() {
                var seconds = getSecondsFromTemplate();

                ngModelCtrl.$setDirty();

                if (angular.isDefined(seconds)) {
                    selected.setSeconds(seconds);
                    refresh('s');
                } else {
                    invalidate(undefined, undefined, true);
                }
            };

            secondsInputEl.bind('blur', function(e) {
                if (modelIsEmpty()) {
                    makeValid();
                } else if (!$scope.invalidSeconds && $scope.seconds < 10) {
                    $scope.$apply( function() {
                        $scope.seconds = pad($scope.seconds);
                    });
                }
            });

        };

        this.render = function() {
            var date = ngModelCtrl.$viewValue;

            if (isNaN(date)) {
                ngModelCtrl.$setValidity('time', false);
                $log.error('Timepicker directive: "ng-model" value must be a Date object, a number of milliseconds since 01.01.1970 or a string representing an RFC2822 or ISO 8601 date.');
            } else {
                if (date) {
                    selected = date;
                }

                if (selected < min || selected > max) {
                    ngModelCtrl.$setValidity('time', false);
                    $scope.invalidHours = true;
                    $scope.invalidMinutes = true;
                } else {
                    makeValid();
                }
                updateTemplate();
            }
        };

        // Call internally when we know that model is valid.
        function refresh(keyboardChange) {
            makeValid();
            ngModelCtrl.$setViewValue(new Date(selected));
            updateTemplate(keyboardChange);
            $scope.$parent.timeSelection(new Date(selected));
        }

        function makeValid() {
            ngModelCtrl.$setValidity('time', true);
            $scope.invalidHours = false;
            $scope.invalidMinutes = false;
            $scope.invalidSeconds = false;
        }

        function updateTemplate(keyboardChange) {
            if (!ngModelCtrl.$modelValue) {
                $scope.hours = null;
                $scope.minutes = null;
                $scope.seconds = null;
                $scope.meridian = meridians[0];
            } else {
                var hours = selected.getHours(),
                    minutes = selected.getMinutes(),
                    seconds = selected.getSeconds();

                if ($scope.showMeridian) {
                    hours = hours === 0 || hours === 12 ? 12 : hours % 12; // Convert 24 to 12 hour system
                }

                $scope.hours = keyboardChange === 'h' ? hours : pad(hours, !padHours);
                if (keyboardChange !== 'm') {
                    $scope.minutes = pad(minutes);
                }
                $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];

                if (keyboardChange !== 's') {
                    $scope.seconds = pad(seconds);
                }
                $scope.meridian = selected.getHours() < 12 ? meridians[0] : meridians[1];
            }
        }

        function addSecondsToSelected(seconds) {
            selected = addSeconds(selected, seconds);
            refresh();
        }

        function addMinutes(selected, minutes) {
            return addSeconds(selected, minutes*60);
        }

        function addSeconds(date, seconds) {
            var dt = new Date(date.getTime() + seconds * 1000);
            var newDate = new Date(date);
            newDate.setHours(dt.getHours(), dt.getMinutes(), dt.getSeconds());
            return newDate;
        }

        function modelIsEmpty() {
            return ($scope.hours === null || $scope.hours === '') &&
                ($scope.minutes === null || $scope.minutes === '') &&
                (!$scope.showSeconds || $scope.showSeconds && ($scope.seconds === null || $scope.seconds === ''));
        }

        $scope.showSpinners = angular.isDefined($attrs.showSpinners) ?
            $scope.$parent.$eval($attrs.showSpinners) : timepickerConfig.showSpinners;

        $scope.incrementHours = function() {
            if (!$scope.noIncrementHours()) {
                addSecondsToSelected(hourStep * 60 * 60);
            }
        };

        $scope.decrementHours = function() {
            if (!$scope.noDecrementHours()) {
                addSecondsToSelected(-hourStep * 60 * 60);
            }
        };

        $scope.incrementMinutes = function() {
            if (!$scope.noIncrementMinutes()) {
                addSecondsToSelected(minuteStep * 60);
            }
        };

        $scope.decrementMinutes = function() {
            if (!$scope.noDecrementMinutes()) {
                addSecondsToSelected(-minuteStep * 60);
            }
        };

        $scope.incrementSeconds = function() {
            if (!$scope.noIncrementSeconds()) {
                addSecondsToSelected(secondStep);
            }
        };

        $scope.decrementSeconds = function() {
            if (!$scope.noDecrementSeconds()) {
                addSecondsToSelected(-secondStep);
            }
        };

        $scope.toggleMeridian = function() {
            var minutes = getMinutesFromTemplate(),
                hours = getHoursFromTemplate();

            if (!$scope.noToggleMeridian()) {
                if (angular.isDefined(minutes) && angular.isDefined(hours)) {
                    addSecondsToSelected(12 * 60 * (selected.getHours() < 12 ? 60 : -60));
                } else {
                    $scope.meridian = $scope.meridian === meridians[0] ? meridians[1] : meridians[0];
                }
            }
        };

        $scope.blur = function() {
            ngModelCtrl.$setTouched();
        };

        $scope.$on('$destroy', function() {
            while (watchers.length) {
                watchers.shift()();
            }
        });
        $scope.$watch('time',function () {
            refresh();

        })

    }])

    .directive('uibClockpicker', ['uibTimepickerConfig', function(uibTimepickerConfig) {
        return {
            require: ['?^uibDatetimepickerPopupWrap','uibClockpicker', '?^ngModel'],
            restrict: 'A',
            controller: 'UibTimepickerController',
            controllerAs: 'timepicker',
            scope: {},
            templateUrl: function(element, attrs) {
                return attrs.templateUrl || uibTimepickerConfig.templateUrl;
            },
            link: function(scope, element, attrs, ctrls) {
                var timepickerCtrl = ctrls[1], ngModelCtrl = ctrls[2];

                if (ngModelCtrl) {
                    timepickerCtrl.init(ngModelCtrl, element.find('input'));
                }
            }
        };
    }]);
