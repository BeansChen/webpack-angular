module.exports = function(Angular) {
	return {
		url: '/technology',
		templateProvider: ['$q', function($q) {
			let deferred = $q.defer();
			require.ensure([], function() {
				let template = require('./technology.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'technologyController',
		controllerAs: 'vmtechnology',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				let deferred = $q.defer();
				require.ensure([], function() {
					let module1 = require('./technologyModule.js')(Angular);
					$ocLazyLoad.load({
						name: 'technologyApp'
					});
					deferred.resolve(module1);
				});
				return deferred.promise;
			}]
		}
	}
}