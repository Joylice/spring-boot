;(function (window, angular) {
    'use strict';
    var core = angular.module('core');
    core.controller('HomeCtrl', ['$rootScope', '$scope', '$state', 'principal', 'AuthService', '$controller', 'BaseService', 'T', '$timeout','RTService','moment', function ($rootScope, $scope, $state, principal, authService, $controller, service, T, $timeout, RTService,moment) {
        var navs = [];
        $controller('BaseCtrl', {$scope: $scope, service: service});
        angular.forEach(menuData, function (menu) {
            if (menu.parent === "m") {
                navs.push(menu);
            }
        });

        $scope.status = {
            data: [],
            current: undefined
        };
        $scope.navs = navs;

        $scope.$watch('status.current', function (value, oldValue) {
            if(value !== oldValue){
                updateRtData();
            }
        });

        $scope.$on("$destroy", function () {
            if(timeout !== null){
                $timeout.cancel(timeout);
            }
        });

        var timeout = null;
        function updateRtData(){
            if(timeout !== null){
                $timeout.cancel(timeout);
            }
            if(!angular.isObject($scope.status.current)){
                return;
            }
            service.get("bridge", {action: "publicRt", id: $scope.status.current.id}).then(function (response) {
                $scope.status.current.rtData = response.data;
                timeout = $timeout(updateRtData, rtInterval);
            });
        }
        //点击舟山控制卡片
        $scope.showCard = false;
        $scope.showCardButton = true;

        //点击具体桥控制卡片收起
        $scope.selectShowCard = true;

        service.getAll('bridge', {
            action: 'homeTree'
        }).then(function (resp) {
            for (var r = 0; r < resp.data.length; r++) {
                var area = resp.data[r];
                for (var b = 0; b < bridgeInfo.length; b++) {
                    if (area.id === bridgeInfo[b].id) {
                        for (var p = 0; p < bridgeInfo[b].bridges.length; p++) {
                            area.bridges.push(bridgeInfo[b].bridges[p])
                        }
                    }
                }
            }
            $scope.status.data = resp.data;
            $rootScope.params = $scope.status.data[0].bridges;
            if($rootScope.params){
                $scope.initMapShow();
            }
            if($scope.status.data.length > 0 && $scope.status.data[0].bridges.length > 0){
                $scope.showItemsList($scope.status.data[0].bridges[0]);
            }

        });
        //左侧桥梁切换->地图定位
        $scope.showItemsList = function (bridge) {
            $scope.status.current = bridge;
            $scope.ItemId=bridge.id;
            $scope.bridgeName = bridge.name;

            $scope.selectXCoord = bridge.xCoord;
            $scope.selectYCoord = bridge.yCoord;
            $scope.showCurBridge($scope.status.current);
        };
        //跳转到实时监测页面
        window.goRtm = function () {
            $state.go('rtm.warning');
        }
    }])
        .controller('openlayersController', ['$scope', '$rootScope','T',
            function ($scope, $rootScope,T) {
                this.init = function () {
                    $scope.featureArr = [];
                    //获取气泡元素
                    var container = document.getElementById('popup');
                    var content = document.getElementById('popup-content');
                    var closer = document.getElementById('popup-closer');

                    var bridgeCrowdCenter = window.bridgeCrowdCenter;
                    var defaultColor = '#555555';
                    var sateColor = 'white';
                    var offsetY = 20;
                    var selectOffsetY = 35;
                    //3D地图划线坐标点
                    var lineArr = [
                        [[13576744.964013003, 3516170.1835178565], [13576248.12332915, 3516323.0575744268], [13575999.702987222, 3516208.402031999], [13574394.525393233, 3514507.678152654], [13574260.760593735, 3514182.820782442], [13574146.105051307, 3513418.45049959], [13573916.793966452, 3513017.156101093], [13572120.52380175, 3511239.995193463]],

                        [[13579515.806288343, 3512458.210331758], [13579343.8229747, 3512802.176959041], [13579334.268346164, 3512945.496387076], [13579382.041488843, 3513107.925072182], [13579439.369260058, 3513318.126899966], [13579429.814631522, 3513461.4463280006], [13579391.59611738, 3513633.4296416426], [13579248.276689345, 3513862.740726498], [13578703.662862813, 3514646.220266421]],

                        [[13578655.889720133, 3514655.774894957], [13578073.057379458, 3515487.027577558], [13578015.729608245, 3515649.4562626644], [13577901.074065818, 3515725.8932909495], [13577767.309266318, 3515802.3303192346], [13576897.838069575, 3516127.1876894464]],

                        [[13553431.670386024, 3509367.2880004756], [13553928.511069877, 3509615.7083424022], [13554922.192437585, 3510150.7675403985], [13555648.344206294, 3510456.515653539], [13556603.807059858, 3510724.0452525374], [13557291.740314426, 3510857.8100520363], [13558075.21985435, 3510934.2470803214], [13560979.826929186, 3511106.230393963], [13562451.239723675, 3511087.1211368917], [13563425.811834311, 3510953.3563373927], [13564266.619145447, 3510762.26376668],
                            [13565107.426456586, 3510513.843424753], [13565489.611598011, 3510380.078625254], [13566005.561538935, 3509997.8934838283], [13566464.183708647, 3509845.0194272576], [13567152.116963213, 3509845.0194272576], [13568107.579816777, 3510227.2045686836], [13568776.403814273, 3510456.515653539], [13569005.714899128, 3510437.4063964677],
                            [13569330.572269341, 3510322.75085404], [13569770.085181981, 3510112.549026256], [13570133.161066335, 3509978.784226757], [13570687.329521403, 3510017.0027408996],
                            [13571107.73317697, 3510227.2045686836], [13571585.464603754, 3510666.7174813235], [13572139.633058822, 3511316.4322217475]],

                        [[13553523.663508013, 3509413.1737681613], [13545803.52365121, 3504903.3890993358], [13544695.186741075, 3504100.8003023416]]

                    ];

                    $scope.lineLayerArr = [];
                    for (var i = 0; i < lineArr.length; i++) {
                        var lineLayer = creatLinestring(lineArr[i]);
                        $scope.lineLayerArr.push(lineLayer);
                    }

                    //卫星地图上绘制连线
                    function creatLinestring(point) {
                        var lineString = new ol.geom.LineString(point);
                        var lineLayer = new ol.layer.Vector({
                            source: new ol.source.Vector({
                                features: [new ol.Feature({
                                    geometry: lineString,
                                })]
                            }),
                            style: new ol.style.Style({
                                stroke: new ol.style.Stroke({
                                    color: '#ffcc33',
                                    width: 3
                                })
                            })
                        });
                        return lineLayer
                    }

                    var overlay = new ol.Overlay(
                        {
                            element: container,
                            autoPan: true,
                            autoPanAnimation: {
                                duration: 250
                            }
                        });
                    //隐藏气泡
                    closer.onclick = function () {
                        overlay.setPosition(undefined);
                        closer.blur();
                        return false;
                    };
                    function setStyle(src, name, offsetY, color) {
                        return new ol.style.Style({
                            image: new ol.style.Icon({
                                src:'images/'+src+'.png'
                            }),
                            text: new ol.style.Text({
                                font: '10px sans-serif',
                                scale: 0.8,
                                text: name,
                                offsetY: offsetY,
                                fill: new ol.style.Fill({
                                    color: color,
                                }),
                            })
                        })
                    }
                    function setSlectStyle(src, name, offsetY, color) {
                        return new ol.style.Style({
                            image: new ol.style.Icon({
                                src:'images/'+src+'-selected.png'
                            }),
                            text: new ol.style.Text({
                                font: '10px sans-serif',
                                scale: 0.8,
                                text: name,
                                offsetY: offsetY,
                                fill: new ol.style.Fill({
                                    color: color,
                                }),
                            })
                        })
                    }




                    var s1 = new ol.layer.Tile({
                        source: new ol.source.XYZ({
                            tileUrlFunction: MapUtil.generalTile
                        })
                    });
                    var s2 = new ol.layer.Tile({
                        source: new ol.source.XYZ({
                            tileUrlFunction: MapUtil.satelliteTile
                        })
                    });
                    var vec = new ol.layer.Vector({
                        source: new ol.source.Vector()
                    });
                    var mylayer = new ol.layer.Vector({
                        source: new ol.source.Vector()
                    });
                    //构建地图
                    var map = new ol.Map({
                        target: 'map',
                        layers: [
                            s1,
                            vec,
                        ],
                        view: new ol.View({
                            projection: 'EPSG:900913',
                            center: ol.proj.transform(bridgeCrowdCenter, 'EPSG:4326', 'EPSG:900913'),
                            zoom: 12,
                            minZoom: 11,
                            maxZoom: 15,
                            // extent: ol.proj.transformExtent([121.833012, 29.867289, 122.593012, 30.367289], 'EPSG:4326', 'EPSG:900913')
                        }),
                        logo: false,
                        overlays: [overlay]
                    });


                    //卫星地图连线终点处加一个圆圈
                    var endCircle = new ol.Feature({
                        geometry: new ol.geom.Point([13544695.186741075, 3504100.8003023416])
                    });
                    endCircle.setStyle(new ol.style.Style({
                        image: new ol.style.Circle({
                            radius: 9,
                            fill: new ol.style.Fill({
                                color: 'rgb(69,150,230)'
                            })
                        })
                    }));
                    mylayer.getSource().addFeature(endCircle);

                    //创建对象
                    function setLocation(coordinate) {
                        var an = new ol.Feature({
                            geometry: new ol.geom.Point(ol.proj.transform(coordinate, 'EPSG:4326', 'EPSG:900913'))
                        });
                        return an;
                    }

                    //地图初始化时添加桥梁
                    $scope.is2DMap = false;
                    $scope.initMapShow=function (){
                        for (var i = 0; i < $rootScope.params.length; i++) {
                            var anchor = setLocation([$rootScope.params[i].xCoord,$rootScope.params[i].yCoord]);
                            if (!$scope.is2DMap) {
                                anchor.setStyle(setStyle($rootScope.params[i].bridgeType.icon, $rootScope.params[i].name, offsetY, defaultColor));
                            } else {
                                anchor.setStyle(setStyle($rootScope.params[i].bridgeType.icon, $rootScope.params[i].name, offsetY, sateColor));
                            }
                            vec.getSource().addFeature(anchor);
                            $scope.featureArr.push(anchor);

                            //监测鼠标经过的事件
                            anchor.on('pointermove', function () {
                                document.getElementById('map').className = 'bridge-map cursor-style';
                            })
                            //监测桥梁单击事件
                            mapSingleClick(anchor, $rootScope.params[i].name, $rootScope.params[i].description,$rootScope.params[i]);
                        }
                    }

                    //怎么取到当前选中的状态和地图上显示的状态
                    function refreshAnchor() {
                        for (var i = 0; i < $scope.featureArr.length; i++) {
                            if (!$scope.is2DMap) {
                                $scope.featureArr[i].setStyle(setStyle($rootScope.params[i].bridgeType.icon, $rootScope.params[i].name, offsetY, defaultColor));
                                if ($rootScope.params[i] === $scope.status.current) {
                                    $scope.featureArr[i].setStyle(setSlectStyle($scope.params[i].bridgeType.icon, $rootScope.params[i].name, selectOffsetY, defaultColor));
                                }
                            } else {
                                $scope.featureArr[i].setStyle(setStyle($rootScope.params[i].bridgeType.icon, $rootScope.params[i].name, offsetY, sateColor));
                                if ($rootScope.params[i] === $scope.status.current) {
                                    $scope.featureArr[i].setStyle(setSlectStyle($scope.params[i].bridgeType.icon, $rootScope.params[i].name, selectOffsetY, sateColor));
                                }
                            }
                        }
                    }

                    //监测鼠标滑过的事件
                    map.on('pointermove', function (evt) {
                        document.getElementById('map').className = 'bridge-map';
                        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                            feature.dispatchEvent({type: 'pointermove', event: evt, coordinate: evt.coordinate});
                            return feature;
                        });
                    });

                    //监测地图单击事件
                    map.on('singleclick', function (evt) {
                        var feature = map.forEachFeatureAtPixel(evt.pixel, function (feature) {
                            feature.dispatchEvent({type: 'singleclick', event: evt, coordinate: evt.coordinate});
                            return feature;
                        });
                        if (!feature) {
                            overlay.setPosition(undefined);
                            closer.blur();
                        }
                    });
                    //单击桥梁弹窗显示
                    function mapSingleClick(feature, name, description,bridge) {
                        //当前桥梁是否纳入管理
                        $scope.isGisOnly = bridge.gisOnly ?bridge.gisOnly:false;
                        if($scope.isGisOnly==false){
                            var buttonName = T.T('home.realTimeMonitoring.label')
                            feature.on('singleclick', function (evt) {
                                var coordinate = evt.coordinate;
                                content.innerHTML = '<h4 style="color:white">' + name + '</h4><p class="ol-popup-content">' + description + '</p>'+
                                    '<button class="btn btn-primary btn-sm ol-popup-goRtm" onclick="goRtm()"><i class="fa fa-A031 fa-2x"></i>&nbsp;'+buttonName+'</button>';
                                overlay.setPosition(coordinate);
                            })
                        }else{
                            feature.on('singleclick', function (evt) {
                                var coordinate = evt.coordinate;
                                content.innerHTML = '<h4 style="color:white">' + name + '</h4><p class="ol-popup-content">' + description + '</p>'
                                overlay.setPosition(coordinate);
                            })
                        }

                    }

                    //监测地图层级大小去改变桥梁图标大小
                    map.getView().on('change:resolution', function () {
                        for (var i = 0; i < $scope.featureArr.length; i++) {
                            var style = $scope.featureArr[i].getStyle();
                            style.getImage().setScale(this.getZoom() /16);
                            $scope.featureArr[i].setStyle(style);
                        }
                    });
                    /*批量获取经纬度,3D画线使用*/
                    // getBatchCoordinates();
                    function getBatchCoordinates() {
                        var lineLayer = new ol.layer.Vector({
                            source: new ol.source.Vector(),
                            style: new ol.style.Style({
                                stroke: new ol.style.Stroke({
                                    color: 'red',
                                    size: 1
                                })
                            })
                        })
                        map.addLayer(lineLayer);
                        var lineDraw = new ol.interaction.Draw({
                            type: 'LineString',
                            source: lineLayer.getSource(),    // 注意设置source，这样绘制好的线，就会添加到这个source里
                            style: new ol.style.Style({            // 设置绘制时的样式
                                stroke: new ol.style.Stroke({
                                    color: '#009933',
                                    size: 1
                                })
                            }),
                            maxPoints: 30   // 限制不超过30个点
                        });

                        // 监听线绘制结束事件，获取坐标
                        lineDraw.on('drawend', function (event) {
                            // event.feature 就是当前绘制完成的线的Feature
                            document.getElementById('points').innerHTML = JSON.stringify(event.feature.getGeometry().getCoordinates());
                        });
                        map.addInteraction(lineDraw);
                    }

                    //切换地图
                    $scope.changeMapType = function () {
                        $scope.is2DMap = !$scope.is2DMap;
                        document.getElementById('map').className = 'bridge-map';
                        overlay.setPosition(undefined);
                        closer.blur();

                        //清理地图
                        var layers = map.getLayers();
                        for (var i = 0; i < layers.array_.length;) {
                            var item = map.getLayers().item(i);
                            map.removeLayer(item);
                        }
                        if (!$scope.is2DMap) {
                            document.getElementById('mapType').className = 'map-type-2D';
                            map.addLayer(s1);
                            map.addLayer(vec);
                            if ($scope.selectXCoord) {
                                //平面地图选中一个桥,没有放大
                                refreshAnchor();
                                map.getView().setCenter(ol.proj.transform([$scope.selectXCoord, $scope.selectYCoord], 'EPSG:4326', 'EPSG:900913'));
                                map.getView().setZoom(14);
                            } else {
                                refreshAnchor();
                            }
                        }
                        else {
                            document.getElementById('mapType').className = 'map-type-satellite';
                            map.addLayer(s2);
                            for (var i = 0; i < $scope.lineLayerArr.length; i++) {
                                map.addLayer($scope.lineLayerArr[i]);
                            }
                            map.addLayer(mylayer);
                            map.addLayer(vec);
                            if ($scope.selectXCoord) {
                                refreshAnchor();
                                map.getView().setCenter(ol.proj.transform([$scope.selectXCoord, $scope.selectYCoord], 'EPSG:4326', 'EPSG:900913'));
                                map.getView().setZoom(14);
                            } else {
                                refreshAnchor();
                            }
                        }
                    }
                    //局部
                    $scope.showCurBridge = function (id) {
                        $scope.showCard = true;
                        $scope.showCardButton = true;
                        overlay.setPosition(undefined);
                        closer.blur();
                        refreshAnchor();
                        map.getView().setZoom(14);
                        map.getView().setCenter(ol.proj.transform([$scope.selectXCoord, $scope.selectYCoord], 'EPSG:4326', 'EPSG:900913'));
                    }
                    //总体 舟山
                    $scope.showAllItem = function (item) {
                        $scope.status.current = null;
                        //处理左侧的选中图表
                        $scope.selectXCoord = null;
                        $scope.selectYCoord = null;
                        $scope.showCard = false;
                        $scope.showCardButton = false;
                        overlay.setPosition(undefined);
                        closer.blur();
                        refreshAnchor();
                        map.getView().setCenter(ol.proj.transform(bridgeCrowdCenter, 'EPSG:4326', 'EPSG:900913'));
                        map.getView().setZoom(12);
                    }

                    //选中某一个桥时选项卡的展开/关闭
                    $scope.isShowSelectedBridgeCard = function () {
                        $scope.showCard = !$scope.showCard
                        if ($scope.showCard) {
                            document.getElementById('isShowCardBtn').className = 'btn btn-primary btn-showCard';
                        } else {
                            document.getElementById('isShowCardBtn').className = 'btn btn-primary onlyButton';
                        }
                    }
                }
            }])
        .directive('myOpenlayers', function () {
            return {
                restrict: 'AC',
                replace: false,
                controller: 'openlayersController',
                link: function (scope, element, attrs, openlayersCtrl) {
                    openlayersCtrl.init();
                }
            }
        })
})(window, angular);