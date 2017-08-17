/**
 * Created by leo on 18/07/2017.
 */
;(function (window, angular, $) {
    'use strict';
    angular.module('angular-video', [])
        .constant('videoConfig', {
            proportion: {}
        })
        .controller('VideoController', ['$scope', '$element', '$attrs', '$parse', '$animate', '$document', '$compile', '$templateRequest', '$timeout', '$templateCache', 'videoConfig', function ($scope, $element, $attrs, $parse, $animate, $document, $compile, $templateRequest, $timeout, $templateCache, videoConfig) {
            this.init = function (ngModelCtrl) {
            };
        }])
        .directive('video', function () {
            return {
                controller: 'VideoController',
                scope: false,
                require: ['video', 'ngModel'],
                link: function (scope, element, attrs, ctrls) {
                    var videoGroupCtrl = ctrls[0];
                    element.addClass("monitor-videos");
                    var ngModelCtrl = ctrls[1];
                    videoGroupCtrl.init(ngModelCtrl);
                },
                templateUrl: 'angular-video.html'
            };
        }).run(["$templateCache", function ($templateCache) {
        $templateCache.put("angular-video.html",
            '<div class="monitor-video-item">' +
                '<div class="monitor-video-item-header"></div>' +
                '<div class="monitor-video-item-content"></div>' +
            '</div>'
        );
    }]);
})(window, angular, jQuery);