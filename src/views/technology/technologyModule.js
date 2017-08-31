module.exports = function (Angular) {
	const technologyApp = Angular.module('technologyApp', []);
    require('./technology.scss');
    require('./technologyController')(technologyApp);
}