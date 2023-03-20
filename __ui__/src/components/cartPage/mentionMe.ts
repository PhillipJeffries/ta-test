import { Component } from '@Core/component';
import { priceToNumber } from '@Utils/stringHandlers';

export class MentionMe extends Component {
    protected LOCATORS = {
        // mentionMeContainer: this.locator.locator('[data-test-name="mentionMeContainer"]'),
        proceedToCheckout: this.locator.locator('//button[contains(., "Proceed to Checkout")]'),
        summarySubTotal: this.locator.locator('[id="summary_subtotal"]'),
        summaryDiscount: this.locator.locator('[id="summary_discount"]'),
        summaryShippingPrice: this.locator.locator('[id="summary_shipping_price"]'),
        summaryGrandTotal: this.locator.locator('[id="summary_grand_total"]'),
    };
    public async proceedToCheckout(): Promise<void> {
        await this.LOCATORS.proceedToCheckout.click();
        await this.page.waitForLoadState('load');
    }

    public async getSubtotal(): Promise<number | null> {
        const subTotalValue = await this.LOCATORS.summarySubTotal.textContent();
        if (subTotalValue) {
            return priceToNumber(subTotalValue);
        }
        return null;
    }
    public async getManualSubTotalCount(): Promise<number | null> {
        const grandTotalValue = await this.LOCATORS.summaryGrandTotal.textContent();
        const discountValue = await this.LOCATORS.summaryDiscount.textContent();
        const shippingPriceValue = await this.LOCATORS.summaryShippingPrice.textContent();
        if (grandTotalValue && discountValue && shippingPriceValue) {
            const manualSubTotalCount =
                priceToNumber(grandTotalValue) -
                priceToNumber(shippingPriceValue) +
                priceToNumber(discountValue);
            return manualSubTotalCount;
        }
        return null;
    }
}
