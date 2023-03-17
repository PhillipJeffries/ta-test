import { Container } from '@Core/container';
import type { CartStateType } from 'frontend/store/types';
import { CartItem } from '@Components/cartPage/cartList/cartItem/cartItem';
import { Total } from '@Components/cartPage/totalAndForm/totalBlock';
import { Form } from '@Components/cartPage/totalAndForm/formBlock';

const SELECTORS = {
    emptyCart: './/h2[text()="Cart is empty, please add items"]',
    cartItem: ".//div[contains(@class, 'CartItemCard')]",
    totalBlock: './/div[contains(@class, "summary")]',
    formBlock: './/form[contains(@class, "form")]',
};

export class CartPageContainer extends Container {
    public async fulfill(initialState?: CartStateType): Promise<void> {
        await super.fulfill(initialState);
    }

    public isEmpty(): boolean {
        return Boolean(document.$x(SELECTORS.emptyCart));
    }
    public async getCartList(): Promise<CartItem[]> {
        const cartList = await document.waitForXpath(SELECTORS.cartItem);
        return cartList.map(item => new CartItem(item));
    }
    public async getTotalBlock(): Promise<Total> {
        const [totalBlock] = await document.waitForXpath(SELECTORS.totalBlock);
        return new Total(totalBlock);
    }
    public async getTotalPrice(): Promise<number> {
        const totalBlock = await this.getTotalBlock();
        return totalBlock.getTotalPrice();
    }
    public async getSubtotalSumFromAllCards(): Promise<number> {
        let sum = 0;
        const cartItems = await this.getCartList();
        for (const item of cartItems) {
            const itemSum = await item.getSubTotal();
            sum += itemSum;
        }
        return sum;
    }
    public async getFormBlock(): Promise<Form> {
        const [formBlock] = await document.waitForXpath(SELECTORS.formBlock);
        return new Form(formBlock);
    }
    public async fillFormData(data: { name: string; price: number; quantity: number }): Promise<void> {
        const form = await this.getFormBlock();
        await form.fillForm(data);
    }
}
