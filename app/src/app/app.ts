import {App as Base, register, routing} from 'platypus';
import HomeViewControl from '../viewcontrols/home/home.vc';

export default class App extends Base {
	constructor(router: routing.Router) {
		super();

		router.configure([
			{ pattern: '', view: HomeViewControl }
		]);
	}
}

register.app('app', App, [
	routing.Router
]);
