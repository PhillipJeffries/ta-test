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
        await this.page.waitForTimeout(2000);
    }
    public async fillDate(cardDate: string): Promise<void> {
        await this.LOCATORS.dateInput.fill(cardDate);
        await this.page.waitForTimeout(2000);
    }
    public async fillCVV(cvv: string): Promise<void> {
        await this.LOCATORS.cvvInput.fill(cvv);
        await this.page.waitForTimeout(2000);
    }
    public async placeOrderClick(): Promise<void> {
        await this.LOCATORS.placeOrder.click();
        await this.page.waitForTimeout(5000);
    }
}
