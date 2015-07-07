import {async, register} from 'platypus';
import BaseRepository from '../base/base.repo';
import ProductsService from '../../services/products/products.svc';

export default class ProductsRepository extends BaseRepository {
    constructor(private productsService: ProductsService) {
        super();
    }

	getProducts(): async.IThenable<Array<models.IProduct>> {
	    return this.productsService.getProducts();
	}

	placeOrder(order: models.IOrder): async.IThenable<boolean> {
	    return this.productsService.placeOrder(order);
	}
}

register.injectable('products-repo', ProductsRepository, [ProductsService]);
