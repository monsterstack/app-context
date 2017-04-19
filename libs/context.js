'use strict';

const GetCurrent = () => {
	return process.domain.applicationContext;
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

module.exports.ApplicationContext = ApplicationContext;
module.exports.GetCurrent = GetCurrent;
