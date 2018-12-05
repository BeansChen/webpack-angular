angular
	.module('starter.homePage')
	.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('main.homePage', {
			url: '/homePage',
			templateProvider: ['$q', function ($q) {
				let deferred = $q.defer();
				require.ensure([], function () {
					let template = require('./homePage.html');
					deferred.resolve(template);
				});
				return deferred.promise;
			}],
			controller: 'homePageController',
			controllerAs: 'vmhomePage',
			resolve: {
				foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
					let deferred = $q.defer();
					require.ensure([], function () {
						let c = require('./homePage.controller.js');
						$ocLazyLoad.load({
							name: 'starter.homePage'
						});
						deferred.resolve(c);
					});
					return deferred.promise;
				}]
			}
		});
}