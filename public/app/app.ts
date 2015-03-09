/// <reference path='../_references.d.ts' />

import plat = require('platypus');
import HomeViewControl = require('../viewcontrols/home/home.viewcontrol');
import LoginViewControl = require('../viewcontrols/login/login.viewcontrol');
import RegisterViewControl = require('../viewcontrols/register/register.viewcontrol');
import OrderViewControl = require('../viewcontrols/order/order.viewcontrol');
import ConfirmationViewControl = require('../viewcontrols/confirmation/confirmation.viewcontrol');
declare var StatusBar: { hide(): void; };

export class App extends plat.App {
    constructor(router: plat.routing.Router) {
        super();

        router.configure([
            { pattern: '', view: HomeViewControl },
            { pattern: '/login', view: LoginViewControl },
            { pattern: '/register', view: RegisterViewControl },
            { pattern: '/order/:id', view: OrderViewControl },
            { pattern: '/confirmation', view: ConfirmationViewControl },
        ]);
    }
    ready(ev: plat.events.LifecycleEvent) { 
        try {
            StatusBar.hide();
        } catch(e) { }
    }
    error(ev: plat.events.ErrorEvent<Error>) {
        // log or handle errors at a global level
        console.log(ev.error);
    }
    suspend(ev: plat.events.LifecycleEvent) { }
    exiting(ev: plat.events.LifecycleEvent): void { }
    resume(ev: plat.events.LifecycleEvent) { }
    online(ev: plat.events.LifecycleEvent) { }
    offline(ev: plat.events.LifecycleEvent) { }
}

plat.register.app('Getting-started', App, [
    plat.routing.Router
]);
