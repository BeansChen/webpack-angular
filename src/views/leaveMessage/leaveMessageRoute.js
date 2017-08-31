module.exports = function(Angular) {
	return {
		url: '/leaveMessage',
		templateProvider: ['$q', function($q) {
			let deferred = $q.defer();
			require.ensure([], function() {
				let template = require('./leaveMessage.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'leaveMessageController',
		controllerAs: 'vmleaveMessage',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				let deferred = $q.defer();
				require.ensure([], function() {
					let module1 = require('./leaveMessageModule.js')(Angular);
					$ocLazyLoad.load({
						name: 'leaveMessageApp'
					});
					deferred.resolve(module1);
				});
				return deferred.promise;
			}]
		}
	}
}