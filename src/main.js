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
require('./config/directive')(Angular);
require('./config/filter')(Angular);
require('./config/service')(Angular);

const Starter = Angular.module('starter', ['ui.router', 'oc.lazyLoad','ui.bootstrap','starter.service','starter.filter','starter.directive']);
require('./config/config')(Starter, Angular);
 