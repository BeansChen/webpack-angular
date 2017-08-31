module.exports = function (Angular) {
	const aboutMeApp = Angular.module('aboutMeApp', []);
    require('./aboutMe.scss');
    require('./aboutMeController')(aboutMeApp);
}