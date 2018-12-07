angular.module('starter.factory')
    .factory("testAc", function () {
        var name = "我是自定义服务";
        return name;
    });