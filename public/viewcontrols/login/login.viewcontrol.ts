/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
import BaseViewControl = require('../base/base.viewcontrol');
import UserRepository = require('../../repositories/user/user.repository');

class LoginViewControl extends BaseViewControl {
    templateString: string = require('./login.viewcontrol.html');
    context: any = {
        email: '',
        password: '',
        error: ''
    };

    constructor(private userRepository: UserRepository) {
        super();
    }

    login() {
        this.userRepository.login(this.context.email, this.context.password)
            .then((success) => {
                if(success) {

                } else {
                    this.context.error = 'Login Failed';
                }
            }
        );
    }

    register() {

    }
}

plat.register.viewControl('login-vc', LoginViewControl, [UserRepository]);

export = LoginViewControl;
