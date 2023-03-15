import { Component } from '@Core/component';

export class CreditCard extends Component {
    protected LOCATORS = {
        numberInput: this.locator
            .frameLocator('//div[@id="card-number"]//iframe')
            .locator('[id="pan"]'),
        dateInput: this.locator
            .frameLocator('//div[@id="exp-date"]//iframe')
            .locator('[id="expiration_date"]'),
        cvvInput: this.locator.frameLocator('//div[@id="cvv"]//iframe').locator('[id="cvv"]'),
        placeOrder: this.locator.locator('[aria-label="Place Order"]'),
    };
    public async fillNumber(cardNumber: string): Promise<void> {
        await this.LOCATORS.numberInput.fill(cardNumber);
    }
    public async fillDate(cardDate: string): Promise<void> {
        await this.LOCATORS.dateInput.fill(cardDate);
    }
    public async fillCVV(cvv: string): Promise<void> {
        await this.LOCATORS.cvvInput.fill(cvv);
    }
    public async placeOrderClick(): Promise<void> {
        await this.LOCATORS.placeOrder.click();
    }
}
