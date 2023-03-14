import { Container } from '@Core/container';
import { DeliveryStep } from '@Components/checkoutPage/deliveryStep/deliveryStep';

export class CheckoutPage extends Container {
    protected LOCATORS = {
        deliveryStep: this.page.locator('[name="deliveryStep"]'),
    };
    public DeliveryStep = new DeliveryStep(this.LOCATORS.deliveryStep, this.page);
}
