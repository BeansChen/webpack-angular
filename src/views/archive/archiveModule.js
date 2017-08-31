module.exports = function (Angular) {
	const archiveApp = Angular.module('archiveApp', []);
    require('./archive.scss');
    require('./archiveController')(archiveApp);
}