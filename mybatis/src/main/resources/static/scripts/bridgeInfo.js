/**
 * Created by zhe on 18/03/2017.
 */
var getTrafficLineAndPointIdMap = function () {
    return {
        "6248767068502495235": {
            "1": "6275565800036241786",
            "2": "6275565800036241785",
            "3": "6275565800036241787",
            "4": "6275565800036241788"
        },
        "6248767068502495234": {
            "1": "6275565800036241794",
            "2": "6275565800036241793",
            "3": "6275565800036241795",
            "4": "6275565800036241796"
        }
    }
};
var bridgeCrowdCenter = [121.90, 30.07];
var system_lang = 'zh_CN';

var rtInterval = 2000;

var bridgeInfo = [{
    "id": "6248767068502495233",
    "sort": 0,
    "name": "舟山",
    "bridges": [
        {
            "id": "6248767068502495243",
            "gisOnly": true,
            "sort": 0,
            "name": "岑港大桥",
            "abbrevia": "岑港大桥",
            "xCoord": 121.987155,
            "yCoord": 30.069090,
            "areaId": "6248767068502495233",
            "bridgeTypeId": "bridgetype003",
            "area": {},
            "description": "舟山是中国新兴的海岛港口旅游城市，具有显著的区位优势和得天独厚的“渔、港、景”自然资源，建设舟山跨海大桥，构筑出一条全天候的舟山——大陆通道",
            "bridgeType": {
                "id": "bridgetype001",
                "version": 0,
                "deleteFlag": false,
                "validFlag": true,
                "sort": 0,
                "name": "斜拉索桥",
                "icon": 'girder-select'

            }
        },
        {
            "id": "6248767068502495244",
            "gisOnly": true,
            "sort": 0,
            "name": "响礁门大桥",
            "abbrevia": "响礁门大桥",
            "xCoord": 121.979700,
            "yCoord": 30.086162,
            "areaId": "6248767068502495233",
            "bridgeTypeId": "bridgetype003",
            "area": {},
            "description": "响礁门大桥是舟山市大陆连岛工程中的第二座跨海大桥，跨越响礁门水域，连接里钓岛与富翅岛，东南向与岑港大桥相连，西北向与桃夭门大桥相衔接",
            "bridgeType": {
                "id": "bridgetype001",
                "version": 0,
                "deleteFlag": false,
                "validFlag": true,
                "sort": 0,
                "name": "斜拉索桥",
                "icon": 'girder-select'

            }
        },
        {
            "id": "6248767068502495245",
            "gisOnly": true,
            "sort": 0,
            "name": "舟山大桥管理处",
            "abbrevia": "舟山大桥管理处",
            "xCoord": 121.853008,
            "yCoord": 30.057994,
            "areaId": "6248767068502495233",
            "bridgeTypeId": "bridgetype003",
            "area": {},
            "description": "浙江舟山跨海大桥有限公司大桥管理处是国内领先的高速公路管理、维护。浙江舟山跨海大桥有限公司大桥管理处位于舟山市定海区金塘镇山潭东堠社区（甬舟高速金塘收费站旁）交通便利。",
            "bridgeType": {
                "id": "bridgetype001",
                "version": 0,
                "deleteFlag": false,
                "validFlag": true,
                "sort": 0,
                "name": "斜拉索桥",
                "icon": 'zhoushanManage'
            }
        }
    ]
}]
var MapUtil = {
    googleUrl: function (arr) {
        var z = arr[0] + '';
        var x = arr[1] + '';
        x = parseInt(x, 10).toString(16)

        var y = (-(arr[2]) - 1) + '';
        y = parseInt(y).toString(16)
        if (x.length < 8) {
            var k = x.length;
            for (var i = 0; i < 8 - k; i++) {
                x = '0' + x;
            }
        }
        x = 'C' + x;
        if (y.length < 8) {
            var u = y.length;
            for (var j = 0; j < 8 - u; j++) {
                y = '0' + y;
            }
        }
        y = 'R' + y;
        z = 'L' + (parseInt(z) < 10 ? ('0' + z) : z);
        return z + '/' + y + '/' + x + '.png';
    },

    generalTile: function (tileCoord) {
        return "/olres/_alllayers/" + MapUtil.googleUrl(tileCoord);
    },
    satelliteTile: function (tileCoord) {
        return "/olres/_alllayers2/" + MapUtil.googleUrl(tileCoord);
    }
}

var footerCompany = 'Zhoushan';