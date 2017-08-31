module.exports = function(Angular) {
	return {
		url: '/aboutMe',
		templateProvider: ['$q', function($q) {
			let deferred = $q.defer();
			require.ensure([], function() {
				let template = require('./aboutMe.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'aboutMeController',
		controllerAs: 'vmaboutMe',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				let deferred = $q.defer();
				require.ensure([], function() {
					let module1 = require('./aboutMeModule.js')(Angular);
					$ocLazyLoad.load({
						name: 'aboutMeApp'
					});
					deferred.resolve(module1);
				});
				return deferred.promise;
			}]
		}
	}
}