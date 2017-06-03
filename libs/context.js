'use strict';
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
			next();
		}
	}

	stopContext() {
		return (req, res, next) => {
			next();
		}
	}
}

module.exports.ApplicationContext = ApplicationContext;
module.exports.ApplicationContextMiddleware = ApplicationContextMiddleware;
module.exports.GetCurrent = GetCurrent;
