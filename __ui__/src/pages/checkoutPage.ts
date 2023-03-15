import { Container } from '@Core/container';
import { DeliveryStep } from '@Components/checkoutPage/deliveryStep/deliveryStep';
import { PaymentStep } from '@Components/checkoutPage/paymentStep/paymentStep';

export class CheckoutPage extends Container {
    protected LOCATORS = {
        deliveryStep: this.page.locator('[name="deliveryStep"]'),
        paymentStep: this.page.locator('[name="paymentStep"]'),
    };
    public DeliveryStep = new DeliveryStep(this.LOCATORS.deliveryStep, this.page);
    public PaymentStep = new PaymentStep(this.LOCATORS.paymentStep, this.page);
}
