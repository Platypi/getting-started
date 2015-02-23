/// <reference path="../../_references.d.ts" />
import plat = require('platypus');
import BaseService = require('../base/base.service');
import UserRepository = require('../../repositories/user/user.repository');

class ProductsService extends BaseService {
    constructor(private userRepository: UserRepository) {
        super();
    }

    getProducts(): plat.async.IAjaxThenable<Array<models.IProduct>> {
    	return this._http.json<models.IResponse>({
			method: 'GET',
			url: this.host + '/products/all'
    	}).then((success) => {
    		return <Array<models.IProduct>>success.response.data;
    	});
    }

    placeOrder(order: models.IOrder): plat.async.IAjaxThenable<boolean> {
    	order.userid = this.userRepository.userid;
    	return this._http.json<models.IResponse>({
			method: 'POST',
			url: this.host + '/orders/create',
			data: order
    	}).then((success) => {
    		return true;
    	});
    }
}

plat.register.injectable('products-service', ProductsService, [UserRepository]);

export = ProductsService;
