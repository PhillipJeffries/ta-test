import { Component } from '@Core/component';

export class MentionMe extends Component {
    protected LOCATORS = {
        // mentionMeContainer: this.locator.locator('[data-test-name="mentionMeContainer"]'),
        proceedToCheckout: this.locator.locator('//button[contains(., "Proceed to Checkout")]'),
        summarySubTotal: this.locator.locator('[id="summary_subtotal"]'),
    };
    public async proceedToCheckout(): Promise<void> {
        await this.LOCATORS.proceedToCheckout.click();
        await this.page.waitForLoadState('domcontentloaded');
    }

    public async getSubtotal(): Promise<string | null> {
        return await this.LOCATORS.summarySubTotal.textContent();
    }
}
