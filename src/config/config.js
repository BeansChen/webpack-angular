module.exports = function(Starter, Angular) {
	Starter.config(['$stateProvider', '$locationProvider', '$urlRouterProvider', function($stateProvider, $locationProvider, $urlRouterProvider) {
		$locationProvider.hashPrefix('');
		$urlRouterProvider.otherwise('/main');
		$stateProvider
			.state('main', require('../views/main/mainRoute.js')(Angular))
			.state('main.homePage', require('../views/homePage/homePageRoute.js')(Angular))
			.state('main.technology', require('../views/technology/technologyRoute.js')(Angular))
			.state('main.archive', require('../views/archive/archiveRoute.js')(Angular))
			.state('main.leaveMessage', require('../views/leaveMessage/leaveMessageRoute.js')(Angular))
			.state('main.aboutMe', require('../views/aboutMe/aboutMeRoute.js')(Angular));
	}]);
}