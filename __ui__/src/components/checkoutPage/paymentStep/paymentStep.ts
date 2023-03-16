import { Component } from '@Core/component';
import { CreditCard } from './paymentMethods/creditCard';
import { CashOnDelivery } from './paymentMethods/cashOnDelivery';

export class PaymentStep extends Component {
    protected LOCATORS = {
        creditCard: this.page.locator('[name="credit card form"]').last(),
        cashOnDelivery: this.page.locator('//button[contains(., "Cash On Delivery")]/..'),
    };
    public CashOnDelivery = new CashOnDelivery(this.LOCATORS.cashOnDelivery, this.page);
    public CreditCard = new CreditCard(this.LOCATORS.creditCard, this.page);
}
