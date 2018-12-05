angular
	.module('starter.main')
	.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('main', {
			url: '/main',
			templateProvider: ['$q', function ($q) {
				let deferred = $q.defer();
				require.ensure([], function () {
					let template = require('./main.html');
					deferred.resolve(template);
				});
				return deferred.promise;
			}],
			controller: 'mainController',
			controllerAs: 'vmmain',
			resolve: {
				foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
					let deferred = $q.defer();
					require.ensure([], function () {
						let c = require('./main.controller.js');
						$ocLazyLoad.load({
							name: 'starter.main'
						});
						deferred.resolve(c);
					});
					return deferred.promise;
				}]
			}
		});
}