import { Component } from '@Core/component';

export class CashOnDelivery extends Component {
    protected LOCATORS = {
        cashOnDeliveryButton: this.locator.locator('//button[contains(., "Cash On Delivery")]'),
        placeOrderButton: this.locator.locator('//button[contains(., "Place Order")]'),
    };
    public async openCashOnDelivery(): Promise<void> {
        await this.LOCATORS.cashOnDeliveryButton.click();
    }
    public async clickPlaceOrder(): Promise<void> {
        await this.LOCATORS.placeOrderButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
