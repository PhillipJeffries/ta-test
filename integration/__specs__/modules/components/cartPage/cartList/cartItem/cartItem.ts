import { Component } from '@Core/component';

const SELECTORS = {
    // buttonAdd: ".//button[text()='+']",
    buttonRemove: ".//button[text()='Remove']",
    // itemQuantity: './/div[@data-testid="quantity-current"]',
    subTotal: ".//p[contains(., 'Subtotal')]",
    title: './/h3',
};

export class CartItem extends Component {
    // public async add(): Promise<void> {
    //     await this.element.clickByXpath(SELECTORS.buttonAdd);
    // }

    public async remove(): Promise<void> {
        await this.element.clickByXpath(SELECTORS.buttonRemove);
    }
    // public async getPriceArray(): Promise<[]> {
    //     const arr = await this.element.waitForXpath(SELECTORS.subTotal);
    //     const arrOfValues = [];
    //     for (const item of arr) {
    //         const text = item.textContent;
    //         const number = text.replace(/[^0-9.]/g, '');
    //         arrOfValues.push(number);
    //     }
    //     arrOfValues.reduce()
    // }
    public async getSubTotal(): Promise<number> {
        const [cardSum] = await this.element.waitForXpath(SELECTORS.subTotal);
        const cardSumText = cardSum.textContent;
        return Number(cardSumText.replace(/[^0-9.]/g, ''));
    }
    public async getItemTitle(): Promise<string> {
        const [title] = await this.element.waitForXpath(SELECTORS.title);
        return title.textContent;
    }
    // public async getItemQuantity(): Promise<number> {
    //     const [itemQuantity] = await this.element.waitForXpath(SELECTORS.itemQuantity);
    //     return Number(itemQuantity.textContent);
    // }
}
