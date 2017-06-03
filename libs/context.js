'use strict';
require('zone').enable();
//const  domainContext = require('connect-reqcontext');

const GetCurrent = () => {
	return zone.get('applicationContext');
}

class ApplicationContext {
	constructor() {
		this.ctx = {};
	}

	set(key, value) {
		this.ctx[key] = value;
	}

	get(key) {
		return this.ctx[key];
	}
}

class ApplicationContextMiddleware {
	constructor() {

	}

	startContext() {
		return (req, res, next) => {
			zone.create(() => {
				zone.set('applicationContext', new ApplicationContext());
				next();
			});
		}
	}

	stopContext() {
		return (req, res, next) => {
			zone.return();
			next();
		}
	}
}

module.exports.ApplicationContext = ApplicationContext;
module.exports.ApplicationContextMiddleware = ApplicationContextMiddleware;
module.exports.GetCurrent = GetCurrent;
