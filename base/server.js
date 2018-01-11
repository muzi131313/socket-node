/**
 * @file server.js
 * @author roastwind
 * @description socket server
 */
var net = require('net');

var Constant = require('./config/constant');

var socketServer = net.createServer(function (socket) {
    socket.on('con');
    socket.on('error', function () {

    });
    socket.on('data', function () {

    });
    // error handle
    socket.on("close", function (e) {
    });
    socket.on('c_close', function () {
    });
    socket.addListener("timeout", function() {
        socket.emit("c_close");
    });
});

var Server = {
    init() {
        this.startServer();
    },
    startServer() {
        socketServer.listen(Constant.port, function () {
            global.log('listen on port ' + Constant.port + ' ok!');
        });
        this.caculateCountInterval();
    },
    // caculate online number
    caculateCount() {
        setInterval(function () {
            socketServer.getConnections(function (err, count) {
                if (!err) {
                    global.log('now count: ' + count);
                }
            });
        }, Constant.caculateCountInterval);
    }
}

module.exports = Server;
