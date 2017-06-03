'use strict';
const zone = require('cordjs-zone')

const GetCurrent = () => {
	return zone.applicationContext;
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
			debugger;
			zone.run(() => {
				zone.applicationContext = new ApplicationContext();
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
