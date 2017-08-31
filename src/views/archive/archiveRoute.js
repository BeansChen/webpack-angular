module.exports = function(Angular) {
	return {
		url: '/archive',
		templateProvider: ['$q', function($q) {
			let deferred = $q.defer();
			require.ensure([], function() {
				let template = require('./archive.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'archiveController',
		controllerAs: 'vmarchive',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				let deferred = $q.defer();
				require.ensure([], function() {
					let module1 = require('./archiveModule.js')(Angular);
					$ocLazyLoad.load({
						name: 'archiveApp'
					});
					deferred.resolve(module1);
				});
				return deferred.promise;
			}]
		}
	}
}