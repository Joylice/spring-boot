/**
 * Created by xiao on 2017/1/5.
 */
;(function (window, angular) {
    'use strict';
    angular.module('ui.bootstrap.thumb', [])

    // Angular File Upload module does not include this directive
    // Only for example


    /**
     * The ng-thumb directive
     * @author: nerv
     * @version: 0.1.2, 2014-01-09
     */
        .directive('ngThumb', ['$window', '$parse', function ($window, $parse) {
            var helper = {
                support: ($window.FileReader && $window.CanvasRenderingContext2D),
                isFile: function (item) {
                    return angular.isObject(item) && item instanceof $window.File;
                },
                isImage: function (file) {
                    var type = '|' + file.type.slice(file.type.lastIndexOf('/') + 1) + '|';
                    return '|jpg|png|jpeg|bmp|gif|'.indexOf(type) !== -1;
                }
            };

            var getLocation = function (canvas, x, y) {
                var bbox = canvas.getBoundingClientRect();
                return {
                    x: (x - bbox.left) * (canvas.width / bbox.width),
                    y: (y - bbox.top) * (canvas.height / bbox.height)
                };
            };

            return {
                require: '?ngModel',
                restrict: 'A',
                template: '<canvas style="height: auto; width: auto"/>',
                link: function (scope, element, attributes, ngModel) {
                    if (!helper.support) return;

                    var params = scope.$eval(attributes.ngThumb);

                    if (!helper.isFile(params.file)) return;
                    if (!helper.isImage(params.file)) return;

                    var canvas = element.find('canvas');

                    var reader = new FileReader();

                    reader.onload = onLoadFile;
                    reader.readAsDataURL(params.file);

                    function onLoadFile(event) {
                        var img = new Image();
                        img.onload = onLoadImage;
                        img.src = event.target.result;
                    }

                    function onLoadImage() {

                        var radius = params.deletable ? 15 : 0;
                        var width = params.width || this.width / this.height * params.height;
                        var height = params.height || this.height / this.width * params.width;
                        canvas.attr({width: (width + radius) * 2, height: (height + radius) * 2});
                        canvas.css({height: height + "px", width: width + "px"});
                        var draw = canvas[0].getContext('2d');
                        draw.drawImage(this, 0, radius, width * 2, height * 2);
                        draw.fillStyle = "#FF0000";
                        draw.beginPath();
                        draw.arc(width * 2, radius, radius, 0, Math.PI * 2, true);
                        draw.closePath();
                        draw.fill();

                        var offset = 5;
                        draw.strokeStyle = '#000';
                        draw.lineWidth = 2;
                        draw.lineCap = 'square';
                        draw.beginPath();
                        draw.moveTo(width * 2 - offset, radius - offset);
                        draw.lineTo(width * 2 + offset, radius + offset);
                        draw.moveTo(width * 2 - offset, radius + offset);
                        draw.lineTo(width * 2 + offset, radius - offset);
                        draw.stroke();
                        draw.closePath();

                        canvas[0].addEventListener('mousedown', function (e) {
                            var location = getLocation(canvas[0], e.clientX, e.clientY);

                            if (location.x > width * 2 - radius * 2 && location.y < radius * 2) {
                                ngModel.$modelValue.remove();
                                scope.$apply(ngModel);
                            }
                        }, false);
                    }
                }
            };
        }]);
})
(window, angular);
