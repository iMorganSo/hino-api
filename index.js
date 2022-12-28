"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var API = {
    version: "v1.0",
    url: "https://hino.tk/api",
    connect: function (url) {
        if (url === void 0) { url = "https://hino.tk/api"; }
        axios_1["default"].get(url).then(function (res) {
            console.log(res.data);
        });
    },
    status: function (url) {
        if (url === void 0) { url = "https://hino.tk/api"; }
        axios_1["default"].get(url).then(function (res) {
            console.log(res.status);
        });
    },
    latency: function (url) {
        if (url === void 0) { url = "https://hino.tk/api"; }
        var start = Date.now();
        axios_1["default"].get(url);
        var finish = Date.now();
        var time = (finish - start) / 1000;
        console.log(time);
    }
};
API;