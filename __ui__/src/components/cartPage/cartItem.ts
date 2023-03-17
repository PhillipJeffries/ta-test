import { Component } from '@Core/component';

export class CartItem extends Component {
    protected LOCATORS = {
        increaseQuantity: this.locator.locator('[data-test-name="counterIncrease"]'),
        decreaseQuantity: this.locator.locator('[data-test-name="counterDecrease"]'),
        subTotal: this.locator.locator(
            '//div[@data-test-name="frameName"]//span[@data-test-name="totalPrice"]'
        ),
        quantity: this.locator.locator('//div[contains(@class, "counter__value")]'),
        removeBatton: this.locator.locator('[data-test-name="removeCartItem"]'),
        removeConfirmButton: this.locator.locator(
            '//div[contains(., "Are you sure")]//button[contains(., "Yes")]'
        ),
    };
    public async increaseQuantity(): Promise<void> {
        await this.LOCATORS.increaseQuantity.click();
        await this.page.waitForTimeout(5000);
    }
    public async decreaseQuantity(): Promise<void> {
        await this.LOCATORS.decreaseQuantity.click();
        await this.page.waitForTimeout(5000);
    }
    public async removeItem(): Promise<void> {
        await this.LOCATORS.removeBatton.click();
        await this.page.waitForTimeout(1000);
        await this.LOCATORS.removeConfirmButton.click();
        await this.page.waitForTimeout(2000);
    }
    public async getQuantity(): Promise<string | null> {
        const quantity = await this.LOCATORS.quantity.textContent();
        return quantity;
    }
}
