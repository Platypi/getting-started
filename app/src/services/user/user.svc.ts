import {async, register} from 'platypus';
import BaseService from '../base/base.svc';

export default class UserService extends BaseService {
	register(email: string, password: string,
	    firstname: string,
	    lastname: string): async.IThenable<models.IUser> {

		return this.json(this.host + '/users/register', {
            email: email,
            password: password,
            firstname: firstname,
            lastname: lastname
        }, 'POST').then(
	        (success) => {
	            return <models.IUser>{
	                id: success.response.data,
	                email: email
	            };
	        }
	    );
	}

	login(email: string, password: string): async.IThenable<models.IUser> {
		return this.json(this.host + '/users/login', {
            email: email,
            password: password
        }, 'POST').then(
	        (success) => {
	            return <models.IUser>{
	                id: success.response.data,
	                email: email
	            };
	        }
	    );
	}
}

register.injectable('user-svc', UserService);
