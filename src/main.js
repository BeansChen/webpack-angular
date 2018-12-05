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
/* module*/
require('./views/main/main.module')
require('./views/leaveMessage/leaveMessage.module')
require('./views/technology/technology.module')
require('./views/archive/archive.module')
require('./views/homePage/homePage.module')
require('./views/aboutMe/aboutMe.module')

const Starter = Angular.module('starter', [
    'starter.core',
    'starter.service',
    'starter.filter',
    'starter.directive',
    'starter.main',
    'starter.leaveMessage',
    'starter.homePage',
    'starter.archive',
    'starter.aboutMe',
    'starter.technology'
]);
require('./config/config')(Starter, Angular);
