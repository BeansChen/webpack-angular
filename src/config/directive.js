const StarterDirective = angular.module('starter.directive', []);
StarterDirective.directive("test", function () {
	return {
		restrict: "EA",
		template: "<a>我是一个自定义指令</a>"
	}
});