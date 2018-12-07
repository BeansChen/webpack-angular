angular.module('starter').config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function ($stateProvider, $locationProvider, $urlRouterProvider) {
	$locationProvider.hashPrefix('');
	$urlRouterProvider.otherwise('/main');
}]);