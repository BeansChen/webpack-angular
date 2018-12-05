angular
	.module('starter.archive')
	.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('main.archive', {
			url: '/archive',
			templateProvider: ['$q', function ($q) {
				let deferred = $q.defer();
				require.ensure([], function () {
					let template = require('./archive.html');
					deferred.resolve(template);
				});
				return deferred.promise;
			}],
			controller: 'archiveController',
			controllerAs: 'vmarchive',
			resolve: {
				foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
					let deferred = $q.defer();
					require.ensure([], function () {
						let c = require('./archive.controller.js');
						$ocLazyLoad.load({
							name: 'starter.archive'
						});
						deferred.resolve(c);
					});
					return deferred.promise;
				}]
			}
		});
}