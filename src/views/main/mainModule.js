module.exports = function (Angular) {
	const mainApp = Angular.module('mainApp', []);
    require('./main.scss');
    require('./mainController')(mainApp);
}