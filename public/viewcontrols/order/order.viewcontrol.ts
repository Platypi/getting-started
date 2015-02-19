/// <reference path="../../_references.d.ts" />
import plat = require('platypus');
import BaseViewcontrol = require('../base/base.viewcontrol');
import ProductsService = require('../../services/products/products.service');
import ConfirmationViewControl = require('../confirmation/confirmation.viewcontrol');

class OrderViewControl extends BaseViewcontrol {
    templateString: string = require('./order.viewcontrol.html');
    context: any = {
        order: <models.IOrder> {
            productid: 0,
            address: '',
            city: '',
            state: '',
            zip: '',
            productsize: ''
        },
        error: ''
    };
    constructor(private productsService: ProductsService) {
        super();
    }

    navigatedTo(params: { id: string; }, query: any) {
        this.context.order.productid = params.id;
    }

    placeOrder() {
        this.productsService.placeOrder(this.context.order).then((success) => {
            if(success) {
                this.navigator.navigate(ConfirmationViewControl);
            } else {
                this.context.error = 'Order Failed';
            }
        });
    }
}

plat.register.viewControl('order-vc', OrderViewControl, [ProductsService]);

export = OrderViewControl;
