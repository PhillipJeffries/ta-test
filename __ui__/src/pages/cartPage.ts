import { Container } from '@Core/container';
import { MentionMe } from '@Components/cartPage/mentionMe';
import { CartItem } from '@Components/cartPage/cartItem';
import type { Locator } from '@playwright/test';

export class CartPage extends Container {
    protected LOCATORS = {
        mentionMeContainer: this.page.locator('[data-test-name="mentionMeContainer"]'),
        cartItem: this.page.locator('[data-test-name="cartItem"]'),
        emptyCart: this.page.locator('[data-test-name="emptyCart"]'),
    };
    public async proceedToCheckout(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
    public async cartItemsList(): Promise<Locator[]> {
        return await this.LOCATORS.cartItem.all();
    }
    public async checkEmptyCartBlock(): Promise<boolean> {
        return await this.LOCATORS.emptyCart.isVisible();
    }
    public MentionMe = new MentionMe(this.LOCATORS.mentionMeContainer, this.page);
    public CartItem = new CartItem(this.LOCATORS.cartItem, this.page);
}
