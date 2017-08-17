/**
 * Created by zhe on 18/03/2017.
 */

var system_lang = 'zh_CN';


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

var footerCompany = 'test';