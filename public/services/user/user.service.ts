/// <reference path="../../_references.d.ts" />

import plat = require('platypus');

import BaseService = require('../base/base.service');

class UserService extends BaseService {
    constructor() {
        super();
    }

    login(email: string, password: string): plat.async.IThenable<any> {
    	return this._http.json({
    		method: 'POST',
    		url: '/login',
    		data: {
    			email: email,
    			password: password
    		}
    	});
    }
}

plat.register.injectable('user-service', UserService);

export = UserService;
