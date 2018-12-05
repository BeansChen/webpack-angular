angular
	.module('starter.technology')
	.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('main.technology', {
			url: '/technology',
			templateProvider: ['$q', function ($q) {
				let deferred = $q.defer();
				require.ensure([], function () {
					let template = require('./technology.html');
					deferred.resolve(template);
				});
				return deferred.promise;
			}],
			controller: 'technologyController',
			controllerAs: 'vmtechnology',
			resolve: {
				foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
					let deferred = $q.defer();
					require.ensure([], function () {
						let c = require('./technology.controller.js');
						$ocLazyLoad.load({
							name: 'starter.technology'
						});
						deferred.resolve(c);
					});
					return deferred.promise;
				}]
			}
		});
}