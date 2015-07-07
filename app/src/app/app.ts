import {App as Base, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';
import RegisterViewControl from '../viewcontrols/register/register.vc';
import LoginViewControl from '../viewcontrols/login/login.vc';
import OrderViewControl from '../viewcontrols/order/order.vc';
import ConfirmationViewControl from '../viewcontrols/confirmation/confirmation.vc';

export default class App extends Base {
	constructor(router: routing.Router) {
		super();

		router.configure([
		    { pattern: '', view: HomeViewControl },
		    { pattern: 'login', view: LoginViewControl },
		    { pattern: 'register', view: RegisterViewControl },
		    { pattern: 'order/:id', view: OrderViewControl },
		    { pattern: 'confirmation', view: ConfirmationViewControl }
		]);
	}
}

register.app('app', App, [
	routing.Router
]);
