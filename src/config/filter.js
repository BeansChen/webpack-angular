const StarterFilter = angular.module('starter.filter', []);
StarterFilter.filter("toText", function () {
	return function (value) {
		return value + "：我已经经过过滤拉"
	}
});