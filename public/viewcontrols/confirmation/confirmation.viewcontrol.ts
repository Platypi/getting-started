/// <reference path="../../_references.d.ts" />
import plat = require('platypus');
import BaseViewcontrol = require('../base/base.viewcontrol');

class ConfirmationViewControl extends BaseViewcontrol {
    templateString: string = require('./confirmation.viewcontrol.html');
    context: any = { };
}

plat.register.viewControl('confirmation-vc', ConfirmationViewControl);

export = ConfirmationViewControl;
