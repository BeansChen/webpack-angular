angular
	.module('starter.aboutMe')
	.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('main.aboutMe', {
			url: '/aboutMe',
			templateProvider: ['$q', function ($q) {
				let deferred = $q.defer();
				require.ensure([], function () {
					let template = require('./aboutMe.html');
					deferred.resolve(template);
				});
				return deferred.promise;
			}],
			controller: 'aboutMeController',
			controllerAs: 'vmaboutMe',
			resolve: {
				foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
					let deferred = $q.defer();
					require.ensure([], function () {
						let c = require('./aboutMe.controller.js');
						$ocLazyLoad.load({
							name: 'starter.aboutMe'
						});
						deferred.resolve(c);
					});
					return deferred.promise;
				}]
			}
		});
}