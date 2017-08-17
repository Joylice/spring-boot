/**
 * Created by zhe on 02/11/2016.
 */
;(function (window, angular) {
    'use strict';

    function uuid() {
        var d = new Date().getTime();
        if (window.performance && typeof window.performance.now === "function") {
            d += performance.now(); //use high-precision timer if available
        }
        var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = (d + Math.random() * 16) % 16 | 0;
            d = Math.floor(d / 16);
            return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
        });
        return uuid;
    }

    function endsWith(srcString, searchString) {
        var index = srcString.lastIndexOf(searchString);
        return (index != -1 && (index + searchString.length == srcString.length));
    }

    function startsWith(srcString, searchString) {

    }

    /**
     * 判断数组是否包含某元素，字符串是否包含某字符串
     * @param src
     * @param search
     * @returns {*|boolean}
     */
    function contains(src, search) {
        if (angular.isArray(search)) {
            for (var i = 0; i < search.length; i++) {
                if (search[i] === src) {
                    return true;
                }
            }
        } else if (angular.isString(search)) {
            return src && src.indexOf(search) !== -1;
        }
    }

    function range(length) {
        return new Array(length);
    }

    function isEmpty(o) {
        return angular.isUndefined(o) || o === null || (angular.isString(o) && trim(o) === '') || o.length === 0;
    }

    /* for example
     * @Param arraySrc: ['A', 'B', 'C', 'D']
     * @Param arrayIndex: [0, 2]
     * return: ['A', 'C']
     * */
    function achieve(arraySrc, arrayIndex) {
        var array = [];
        for (var i = 0; i < arrayIndex.length; i++) {
            array.push(arraySrc[arrayIndex[i]]);
        }
        return array;
    }

    function addDate(date, interval) {
        if (angular.isString(date)) {
            date = new Date(date);
        }
        var stamp = date.valueOf();
        return new Date(stamp + interval * 24 * 60 * 60 * 1000);
    }


    function unique(arraySrc) {
        var temp = {};
        var newArray = [];
        for (var i = 0; i < arraySrc.length; i++) {
            if (temp[arraySrc[i]] === undefined) {
                newArray.push(arraySrc[i]);
                temp[arraySrc[i]] = null;
            }
        }
        return newArray;
    }

    function toNgStyle(style) {
        if (angular.isEmpty(style)) return;
        var result = {};
        var styles = style.split(";");
        for (var i = 0; i < styles.length; i++) {
            var arr = styles[i].split(":");
            result[trim(arr[0])] = trim(arr[1]);
        }
        return result;
    }

    function trim(src) {
        return src ? src.replace(/(^\s*)|(\s*$)/g, "") : src;
    }

    function compareByDate(dateStart, dateEnd) {
        return dateStart.getFullYear() === dateEnd.getFullYear() && dateStart.getMonth() === dateEnd.getMonth() && dateStart.getDate() === dateEnd.getDate();
    }

    function compareByHour(dateStart, dateEnd) {
        return dateStart.getFullYear() === dateEnd.getFullYear() && dateStart.getMonth() === dateEnd.getMonth() && dateStart.getDate() === dateEnd.getDate() && dateStart.getHours() === dateEnd.getHours();
    }

    function getListByDate(dateStart, dateEnd) {
        if (dateStart.getTime() > dateEnd.getTime()) {
            throw "dateStart cannot after dateEnd";
        }
        var oneDayMilliseconds = 24 * 60 * 60 * 1000;
        var result = [];
        while (!compareByDate(dateStart, dateEnd)) {
            var milliseconds = dateStart.getTime();
            dateStart.setHours(0);
            dateStart.setMinutes(0);
            dateStart.setSeconds(0);
            dateStart.setMilliseconds(0);
            result.push(dateStart);
            dateStart = new Date(milliseconds + oneDayMilliseconds);
        }
        dateEnd.setMinutes(0);
        dateEnd.setSeconds(0);
        dateEnd.setMilliseconds(0);
        result.push(dateEnd);
        return result;
    }

    function getListByHour(dateStart, dateEnd) {
        if (dateStart.getTime() > dateEnd.getTime()) {
            throw "dateStart cannot after dateEnd";
        }
        var oneHourMilliseconds = 60 * 60 * 1000;
        var result = [];
        while (!compareByHour(dateStart, dateEnd)) {
            var milliseconds = dateStart.getTime();
            dateStart.setMinutes(0);
            dateStart.setSeconds(0);
            dateStart.setMilliseconds(0);
            result.push(dateStart);
            dateStart = new Date(milliseconds + oneHourMilliseconds);
        }
        dateEnd.setMinutes(0);
        dateEnd.setSeconds(0);
        dateEnd.setMilliseconds(0);
        result.push(dateEnd);
        return result;
    }

    function getBrowser() {
        var ua = window.navigator.userAgent.toLowerCase();
        var re = {
            'ie': [/msie ([\d.]+)/, /rv:11/],
            'firefox': /firefox\/([\d.]+)/,
            'chrome': /chrome\/([\d.]+)/,
            'opera': /opera.([\d.]+)/,
            'safari': /version\/([\d.]+).*safari/
        };
        for (var b in re) {
            if (angular.isArray(re[b])) {
                for (var i = 0; i < re[b].length; i++) {
                    if (ua.match(re[b][i])) {
                        return b;
                    }
                }
            } else {
                if (ua.match(re[b])) {
                    return b;
                }
            }
        }
        return 'unknown';
    }

    var dateFormat = {
        generalDateFormatFull: 'YYYY-MM-DD HH:mm:ss.SSS',
        generalDateFormatDateTime: 'YYYY-MM-DD HH:mm:ss',
        generalDateFormatDate: 'YYYY-MM-DD',
        generalDateFormatTime: 'HH:mm:ss.SSS',
        generalDateFormat_yyyyMMddHHmm: 'YYYY-MM-DD HH:mm',
        generalDateFormat_yyyyMMddHH: 'YYYY-MM-DD HH',
        generalDateFormat_HHmm: 'HH:mm',
        generalDateFormat_HHmmss: 'HH:mm:ss',
        generalDateFormat_HHmmssSSS: 'HH:mm:ss.sss'
    };

    angular.extend(angular, {
        'uuid': uuid,
        'contains': contains,
        'range': range,
        'endsWith': endsWith,
        'isEmpty': isEmpty,
        'achieve': achieve,
        'addDate': addDate,
        "unique": unique,
        "toNgStyle": toNgStyle,
        "trim": trim,
        "getListByDate": getListByDate,
        "getListByHour": getListByHour,
        // 'startsWith': startsWith,
        'getBrowser': getBrowser,
        'dateFormat': dateFormat
    })

})(window, angular);