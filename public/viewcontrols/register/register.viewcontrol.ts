/// <reference path="../../_references.d.ts" />

import plat = require('platypus');
import BaseViewcontrol = require('../base/base.viewcontrol');
import UserRepository = require('../../repositories/user/user.repository');
import HomeViewControl = require('../home/home.viewcontrol');

class RegisterViewControl extends BaseViewcontrol {
    templateString: string = require('./register.viewcontrol.html');
    context: any = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        error: ''
    };
    constructor(private userRepository: UserRepository) {
        super();
    }

    register() {
        this.context.error = '';
        this.userRepository.register(this.context.email,
            this.context.password,
            this.context.firstname,
            this.context.lastname)
        .then((success) => {
            this.navigator.navigate(HomeViewControl);
        }).catch((error) => {
            this.context.error = error;
        });
    }
}

plat.register.viewControl('register-vc', RegisterViewControl, [UserRepository]);

export = RegisterViewControl;
