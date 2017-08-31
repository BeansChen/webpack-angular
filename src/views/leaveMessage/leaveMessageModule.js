module.exports = function (Angular) {
	const leaveMessageApp = Angular.module('leaveMessageApp', []);
    require('./leaveMessage.scss');
    require('./leaveMessageController')(leaveMessageApp);
}