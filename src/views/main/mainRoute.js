module.exports = function(Angular) {
	return {
		url: '/main',
		templateProvider: ['$q', function($q) {
			let deferred = $q.defer();
			require.ensure([], function() {
				let template = require('./main.html');
				deferred.resolve(template);
			});
			return deferred.promise;
		}],
		controller: 'mainController',
		controllerAs: 'vmmain',
		resolve: {
			foo: ['$q', '$ocLazyLoad', function($q, $ocLazyLoad) {
				let deferred = $q.defer();
				require.ensure([], function() {
					let module1 = require('./mainModule.js')(Angular);
					$ocLazyLoad.load({
						name: 'mainApp'
					});
					deferred.resolve(module1);
				});
				return deferred.promise;
			}]
		}
	}
}