module.exports = function(Angular) {
	return {
		url: '/homePage',
		templateProvider: ['$q', function($q) {
			let deferred = $q.defer();
			require.ensure([], function() {
				let template = require('./homePage.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'homePageController',
		controllerAs: 'vmhomePage',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				let deferred = $q.defer();
				require.ensure([], function() {
					let module1 = require('./homePageModule.js')(Angular);
					$ocLazyLoad.load({
						name: 'homePageApp'
					});
					deferred.resolve(module1);
				});
				return deferred.promise;
			}]
		}
	}
}