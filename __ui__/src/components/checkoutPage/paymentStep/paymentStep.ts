import { Component } from '@Core/component';
import { CreditCard } from './paymentMethods/creditCard';

export class PaymentStep extends Component {
    protected LOCATORS = {
        creditCard: this.locator.locator('[name="credit card form"]').last(),
    };
    public CreditCard = new CreditCard(this.LOCATORS.creditCard, this.page);
}
