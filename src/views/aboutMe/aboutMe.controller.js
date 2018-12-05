angular.module('starter.aboutMe').controller('aboutMeController', ['testAc', '$q', '$scope', function (testAc, $q, $scope) {
	console.log(testAc)
	let vm = this;
	vm.content = '这是关于我的详情....';
}]);