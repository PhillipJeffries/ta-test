import { Component } from '@Core/component';

export class MentionMe extends Component {
    public LOCATORS = {
        // mentionMeContainer: this.locator.locator('[data-test-name="mentionMeContainer"]'),
        proceedToCheckout: this.page.locator('//button[contains(., "Proceed to Checkout")]'),
    };
    public async proceedToCheckout(): Promise<void> {
        await this.LOCATORS.proceedToCheckout.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
