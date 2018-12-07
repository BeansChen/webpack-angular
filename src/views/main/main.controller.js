angular.module('starter.main').controller('mainController', ['version', function (version) {
	let vm = this;
	vm.version = version;
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