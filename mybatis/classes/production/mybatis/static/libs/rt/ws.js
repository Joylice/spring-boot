




;(function (window) {
    /**
     * Created by liuyang on 2016/12/6.
     */

    function _RT(conf) {

        if (typeof (conf.target) !== 'string') {
            throw "you must set target";
        }

        var RT = {};
        var socket;
        var isConnected;
        var target = conf.target;
        var eventKey = conf.event || 'rtevent';

        //idMap 里面存放每一个id号作为key,value就是对应的回调函数数组
        var idMap = {};

        //callbackMap 存放的是callbackId作为key，callback函数作为value
        var callbackMap = {};

        var isConnecting = false;

        var initCallbacks = [];

        RT.ready = function (callback) {
            RT.init(callback);
        };

        //初始化，创建websocket对象，建立长连接，监听事件
        RT.init = function (callback) {

            //已经连接了
            if (isConnected && typeof callback === 'function') {
                callback();
                return;
            }
            //未连接，进入连接逻辑
            initCallbacks.push(callback);

            //已经在连接中
            if (isConnecting) {
                return;
            }
            //未在连接中则标记未连接中
            isConnecting = true;


            socket = io.connect(target, {'reconnection': true, 'reconnectionDelay': 500, 'reconnectionAttempts': 10});

            //建立连接
            socket.on('connect', function () {

                // console.log("connected .....");

                isConnected = true;
                isConnecting = false;
                idMap = {};
                callbackMap = {};

                for (var i = 0; i < initCallbacks.length; i++) {
                    typeof initCallbacks[i] === 'function' && initCallbacks[i]();
                }
            });

            //接收到数据
            //格式必须是: "{"4503":"2.0401","3501":"10.010000"}"
            socket.on(eventKey, function (data) {

                // console.log("rtevent(" + data.length + ")");

                var RTData = JSON.parse(data);

                var callbacks = {};

                for (var id in RTData) {

                    var callbackArr = idMap[id];//获取每一个id号对应的callback数组

                    if (callbackArr instanceof Array && callbackArr.length > 0) {

                        for (var j = 0; j < callbackArr.length; j++) {

                            callbacks[callbackArr[j]] = undefined; //just for gettting callbackIds
                        }
                    }
                }

                for (var callbackId in callbacks) {
                    var callback = callbackMap[callbackId];
                    typeof (callback) === 'function' && callback(RTData);//数据传递给回调
                }
            });

            //断开连接
            socket.on('disconnect', function () {

                isConnected = false;

                // console.log("disconneced...");
            });
        }

        RT.close = function () {

            socket.disconnect();
        }

        RT.sendMessage = function (message) {
            // console.log("RT.sendMessage(" + message + ")");
            socket.emit(eventKey, message);
        }

        /*
         * watch:监控前台请求id号的变化，变化时，调用callback方法
         * @param ids:被监控id列表
         * @param callback:每一次watch 就指定一个回调函数，对应一组id
         * */
        RT.watch = function (ids, callback) {

            var callbackId = uuid();  //random generate callbackID
            var watcher = new Watcher(ids, callbackId);

            callbackMap[callbackId] = callback;

            var addIdArr = [];  //组装message数组,针对新增的id，请求服务端数据

            for (var i = 0; i < ids.length; i++) {

                var id = ids[i];

                if (idMap[id]) {
                    //如果id已经存在，就只把新的callbackId添加到callback数组
                    idMap[id].push(callbackId);
                } else {
                    //如果id不存在，说明是新添加的，把callbackId装在数组里，作为id对应的value
                    //同时需要向server发送一个[id:'idID',action:'add']消息，来请求该id数据
                    idMap[id] = [callbackId];
                    //add id to server  make a message to server
                    addIdArr.push({id: id, action: 'add'});
                }
            }

            try {
                RT.sendMessage(JSON.stringify(addIdArr));

            } catch (e) {

            }

            return watcher;
        };

        function Watcher(ids, callbackId) {
            this.ids = ids;
            this.callbackId = callbackId;
        }

        Watcher.prototype.destroy = function () {

            function CheckIdMap() {

                var deleteIdArr = [];

                for (var id in idMap) {

                    if (idMap[id] && idMap[id].length === 0) {

                        delete callbackMap[this.callbackId];
                        delete idMap[id];
                        deleteIdArr.push({id: id, action: 'remove'});
                    }
                }

                if (deleteIdArr != null && deleteIdArr.length > 0) {

                    try {
                        RT.sendMessage(JSON.stringify(deleteIdArr));
                    } catch (e) {

                    }
                }
            }

            for (var id in idMap) {
                if (isContains(this.ids, id)) {

                    var callbackArr = idMap[id];

                    jFor: for (var j = 0; j < callbackArr.length; j++) {
                        if (callbackArr[j] === this.callbackId) {
                            callbackArr.splice(j, 1);
                            break jFor;
                        }
                    }
                }
            }

            //检查一下idMap，把callback数组为空的id号去掉。同时通知服务器，不再请求该数据
            CheckIdMap();

        };

        //util functions generate random uuid
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

        function isContains(arr, element) {
            for (var i = 0; i < arr.length; i++) {
                if (arr[i] == element) {
                    return true;
                }
            }
            return false;
        }

        return RT;

    }

    window.RT = _RT;

})(window);