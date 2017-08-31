module.exports = function (Angular) {
	const StarterService = Angular.module('starter.service', []);
	StarterService.factory("testAc",function(){
		var name="我是自定义服务";
		return name;
	});
}