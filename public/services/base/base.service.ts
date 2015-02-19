/// <reference path="../../_references.d.ts" />

import plat = require('platypus');

class BaseService {
    protected static _inject: any = {
        _http: plat.async.Http,
        _Promise: plat.async.IPromise,
        _utils: plat.Utils
    };

    protected _http: plat.async.Http;
    protected _Promise: plat.async.IPromise;
    protected _utils: plat.Utils;

    host: string = 'http://platypisamples.azurewebsites.net/gettingstarted/api';
}

export = BaseService;
