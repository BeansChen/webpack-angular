/*angular*/
const Angular = require('angular');
require('oclazyload');
require('angular-ui-router')
/*css*/
require('./plugins/bootstrap/dist/css/bootstrap.min.css');
require('./style/reset.css');
require('./style/common.css');
/*js*/
require('./plugins/bootstrap/dist/js/bootstrap.min.js');
require('./plugins/bootstrap/dist/js/ui-bootstrap-tpls-2.2.0.min.js');
/*dev*/
require('./config/core');
require('./config/directive');
require('./config/filter');
require('./config/service');
require('./config/value');
/* module*/
require('./views/main/main.module')
require('./views/leaveMessage/leaveMessage.module')
require('./views/technology/technology.module')
require('./views/archive/archive.module')
require('./views/homePage/homePage.module')
require('./views/aboutMe/aboutMe.module')

const Starter = Angular.module('starter', [
    // common
    'starter.core',
    'starter.service',
    'starter.filter',
    'starter.directive',
    'starter.value',
    // module
    'starter.main',
    'starter.leaveMessage',
    'starter.homePage',
    'starter.archive',
    'starter.aboutMe',
    'starter.technology'
]);
require('./config/config')(Starter, Angular);
Starter.provider("myProvider",function(){
    var name=0;
    this.getName = function(n){
        name = n;
    }
    this.$get = function(){
        return {
            name:"bean",
            height:"175cm"
        }
    }
})
Starter.config(function(myProviderProvider){
    console.log(myProviderProvider,"的")
})