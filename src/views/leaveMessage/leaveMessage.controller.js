angular.module('starter.leaveMessage', []).controller('leaveMessageController', ['testAc', '$q', '$scope', function (testAc, $q, $scope) {
	console.log(testAc)
	let vm = this;
	vm.content = '这是归档的详情....';
}]);