angular.module('starter.homePage').controller('homePageController', ['version', function (version) {
	console.log(version)
	let vm = this;
	vm.title = '登录页面';
	vm.pets = [{
		name: '张三'
	},
	{
		name: '李四'
	},
	{
		name: '王五'
	},
	{
		name: '马六'
	}
	];
}]);
