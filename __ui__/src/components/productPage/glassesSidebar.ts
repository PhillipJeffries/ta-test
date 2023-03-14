import { Component } from '@Core/component';

export class GlassesSidebar extends Component {
    protected LOCATORS = {
        addToCartButton: this.locator.locator('//button[contains(., "Add to Cart")]'),
    };
    public async addToCart(): Promise<void> {
        await this.LOCATORS.addToCartButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
