import {register} from 'platypus';
import BaseViewControl from '../base/base.vc';
import OrderViewControl from '../order/order.vc';
import UserRepository from '../../repositories/user/user.repo';
import ProductsRepository from '../../repositories/products/products.repo';

export default class HomeViewControl extends BaseViewControl {
	templateString: string = require('./home.vc.html');

	context = {
	    products: <Array<models.IProduct>>[]
	};

	constructor(private userRepository: UserRepository, private productsRepository: ProductsRepository) {
	    super();
	}

	canNavigateTo() {
	    if(this.userRepository.userid === 0) {
	        this.navigator.navigate('login-vc');
	        return false;
	    }
	}

	navigatedTo() {
	    this.productsRepository.getProducts().then((products) => {
	        this.context.products = products;
	    });
	}

	order(id: number) {
	    this.navigator.navigate(OrderViewControl, { parameters: { id: id } });
	}
}

register.viewControl('home-vc', HomeViewControl, [UserRepository, ProductsRepository]);
