import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import ProductsRepository from '../../repositories/products/products.repo';
import ConfirmationViewControl from '../confirmation/confirmation.vc';

export default class OrderViewControl extends BaseViewControl {
	templateString: string = require('./order.vc.html');

	context = {
	    order: <models.IOrder>{
	        productid: 0,
	        address: '',
	        city: '',
	        state: '',
	        zip: '',
	        productsize: ''
	    },
	    error: ''
	};

	constructor(private productsRepository: ProductsRepository) {
	    super();
	}

	navigatedTo(params: { id: string; }, query: any) {
	    this.context.order.productid = Number(params.id);
	}

	placeOrder() {
	    this.productsRepository.placeOrder(this.context.order).then((success) => {
	        this.navigator.navigate(ConfirmationViewControl);
	    }).catch((error) => {
	        this.context.error = error;
	    });
	}
}

register.viewControl('order-vc', OrderViewControl, [ProductsRepository]);
