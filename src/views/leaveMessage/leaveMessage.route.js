angular
	.module('starter.leaveMessage')
	.config(config);

config.$inject = ['$stateProvider'];
function config($stateProvider) {
	$stateProvider
		.state('main.leaveMessage', {
			url: '/leaveMessage',
			templateProvider: ['$q', function ($q) {
				let deferred = $q.defer();
				require.ensure([], function () {
					let template = require('./leaveMessage.html');
					deferred.resolve(template);
				});
				return deferred.promise;
			}],
			controller: 'leaveMessageController',
			controllerAs: 'vmleaveMessage',
			resolve: {
				foo: ['$q', '$ocLazyLoad', function ($q, $ocLazyLoad) {
					let deferred = $q.defer();
					require.ensure([], function () {
						let c = require('./leaveMessage.controller.js');
						$ocLazyLoad.load({
							name: 'starter.leaveMessage'
						});
						deferred.resolve(c);
					});
					return deferred.promise;
				}]
			}
		});
}