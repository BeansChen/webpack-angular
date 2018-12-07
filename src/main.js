/*angular*/
require('angular');
require('oclazyload');
require('angular-ui-router')
/*css*/
require('./lib/bootstrap/dist/css/bootstrap.min.css');
require('./reset.css');
require('./common.css');
/*js*/
require('./lib/bootstrap/dist/js/bootstrap.min.js');
require('./lib/bootstrap/dist/js/ui-bootstrap-tpls-2.2.0.min.js');
/*core*/
require('./core/core.module');
require('./directives/directives.module');
require('./filters/filters.module');
require('./factorys/factorys.module');
/* module*/
require('./views/main/main.module')
require('./views/leaveMessage/leaveMessage.module')
require('./views/technology/technology.module')
require('./views/archive/archive.module')
require('./views/homePage/homePage.module')
require('./views/aboutMe/aboutMe.module')

var Starter = angular.module('starter', [
    // common
    'starter.core',
    'starter.factory',
    'starter.filter',
    'starter.directive',
    // module
    'starter.main',
    'starter.leaveMessage',
    'starter.homePage',
    'starter.archive',
    'starter.aboutMe',
    'starter.technology'
]);
require('./config');
//这段只是测试provider
Starter.provider("myProvider", function () {
    var name = 0;
    this.getName = function (n) {
        name = n;
    }
    this.$get = function () {
        return {
            name: "bean",
            height: "175cm"
        }
    }
})
Starter.config(function (myProviderProvider) {
    console.log(myProviderProvider, "的")
})