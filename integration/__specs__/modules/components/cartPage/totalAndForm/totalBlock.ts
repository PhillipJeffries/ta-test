import { Component } from '@Core/component';

const SELECTORS = {
    totalPrice: './/p',
    proceedAndCheckout: './/button[contains(@class, "checkoutBtn")]',
    disabledProceedAndCheckout: './/button[@disabled]',
};

export class Total extends Component {
    public async getTotalPrice(): Promise<number> {
        const [totalPrice] = await this.element.waitForXpath(SELECTORS.totalPrice);
        const text = totalPrice.textContent.replace(/[^0-9.]/g, '');
        return Number(text);
    }
    public async isTotalPriceEqualNull(): Promise<void> {
        expect(await this.getTotalPrice()).toBe(0);
    }
    public isButtonDisable(): boolean {
        return Boolean(this.element.$x(SELECTORS.disabledProceedAndCheckout));
    }
    public async clickProceedAndCheckout(): Promise<void> {
        await this.element.clickByXpath(SELECTORS.proceedAndCheckout);
    }
}
