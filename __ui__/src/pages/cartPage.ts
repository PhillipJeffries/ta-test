import { Container } from '@Core/container';

export class CartPage extends Container {
    protected LOCATORS = {
        proceedToCheckout: this.page.locator('//button[contains(., "Proceed to Checkout")]'),
    };
    public async proceedToCheckout(): Promise<void> {
        await this.LOCATORS.proceedToCheckout.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
