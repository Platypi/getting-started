/// <reference path="../../../_references.d.ts" />
import plat = require('platypus');
import platui = require('platypusui');
import BaseTemplatecontrol = require('../base/base.templatecontrol');

class NavbarTemplateControl extends BaseTemplatecontrol {
    templateString: string = require('./navbar.templatecontrol.html');
    context: any = {
    	showNavbar: false
    };
    drawerController: plat.controls.INamedElement<HTMLDivElement, platui.DrawerController>;
    initialize() {
    	this.on('navigating', (ev: plat.events.DispatchEvent, utils: plat.web.UrlUtils) => {
            this.drawerController.control.close();
            if(utils.pathname.indexOf('/login') === 0 ||
                utils.pathname.indexOf('/register') === 0) {
                this.context.showNavbar = false;
            } else {
                this.context.showNavbar = true;
            }
    	});
    }
}

plat.register.control('navbar', NavbarTemplateControl);

export = NavbarTemplateControl;
