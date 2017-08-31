module.exports = function (Angular) {
	const homePageApp = Angular.module('homePageApp', []);
    require('./homePage.scss');
    require('./homePageController')(homePageApp);
}