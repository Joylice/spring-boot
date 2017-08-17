/**
 * Created by zhe on 10/01/2017.
 */
;(function (window, angular, UnityObject) {
    'use strict';
    angular.module('angular-unity3d', [])
        .constant('unity3d', {})
        .controller('Unity3dController', ['$scope', '$rootScope', '$element', '$attrs', '$parse', 'uibGridConfig', '$animate', '$uibPosition', '$document', '$compile', '$templateRequest', '$timeout', function ($scope, $rootScope, $element, $attrs, $parse, selectConfig, $animate, $position, $document, $compile, $templateRequest, $timeout) {
            this.init = function () {


                var config = {
                    // width: 1000,
                    height: 400,
                    params: {enableDebugging: "0", logoimage: "/images/3d-splash.png"}

                };

                var unityObject = new UnityObject(config);


                $scope.$watch($attrs.unity3dFullWindow, function(newValue, oldValue){
                    if(newValue !== oldValue){

                        try {
                            $element[0].querySelector('embed').style.height = newValue ? '768px' : '400px';
                        }catch (ignored){}
                    }
                });

                $scope.$watch($attrs.unity3d, function(newValue, oldValue){
                    if(newValue !== oldValue){
                        console.log(newValue)
                        unityObject.initPlugin($element[0], newValue);

                        unityObject.observeProgress(function (progress) {
                            switch (progress.pluginStatus) {
                                case "broken":
                                    console.log("broken")
                                    // $brokenScreen.find("a").click(function (e) {
                                    //     e.stopPropagation();
                                    //     e.preventDefault();
                                    //     unityObject.installPlugin();
                                    //     return false;
                                    // });
                                    // $brokenScreen.show();
                                    break;
                                case "missing":
                                    console.log("missing")
                                    // $missingScreen.find("a").click(function (e) {
                                    //     e.stopPropagation();
                                    //     e.preventDefault();
                                    //     unityObject.installPlugin();
                                    //     return false;
                                    // });
                                    // $missingScreen.show();
                                    break;
                                case "installed":
                                    console.log("installed")
                                    // $missingScreen.remove();
                                    break;
                                case "first":
                                    console.log("first")
                                    break;
                            }
                        });


                        $scope.$watch($attrs.unity3dData, function (data) {
                            if (unityObject.getUnity() && angular.isObject(data)) {
                                // console.log("RecvRTData", data);
                                var now = new Date();
                                unityObject.getUnity().SendMessage("Core", "RecvRTData", angular.toJson({
                                    time: now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + "-" + now.getHours() + "-" + now.getMinutes() + "-" + now.getSeconds(),
                                    codecount: data.length,
                                    content: data
                                }))
                            }
                        }, true);
                        $scope.$watch($attrs.unity3dHighlight, function (data) {
                            if (unityObject.getUnity() && angular.isObject(data)) {
                                console.log("RecvHighlight", data);
                                unityObject.getUnity().SendMessage("Core", "RecvHighlight", angular.toJson(data))
                            }
                        }, true);
                    }
                });
            };
        }])
        .directive('unity3d', function () {
            return {
                controller: 'Unity3dController',
                link: function (scope, element, attrs, unity3dCtrl) {
                    element.addClass('angular-unity3d');
                    unity3dCtrl.init();
                },
                template: '<div class="unityPlayer">' +
                // '<div class="missing">' +
                //     '<a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now!"><img alt="Unity Web Player. Install now!" src="http://webplayer.unity3d.com/installation/getunity.png" width="193" height="63" /></a>' +
                // '</div>' +
                // '<div class="broken">' +
                //     '<a href="http://unity3d.com/webplayer/" title="Unity Web Player. Install now! Restart your browser after install."> <img alt="Unity Web Player. Install now! Restart your browser after install." src="http://webplayer.unity3d.com/installation/getunityrestart.png" width="193" height="63" /> </a>' +
                // '</div>' +
                '</div>'
            };
        });
})(window, angular, UnityObject2);