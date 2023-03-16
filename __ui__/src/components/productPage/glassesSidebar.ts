import { Component } from '@Core/component';

export class GlassesSidebar extends Component {
    protected LOCATORS = {
        addToCartButton: this.locator.locator('//button[contains(., "Add to Cart")]'),
        chooseLensesButton: this.locator.locator('//button[contains(., "Choose Lenses")]'),
    };
    public async addToCart(): Promise<void> {
        await this.LOCATORS.addToCartButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
    public async chooseLenses(): Promise<void> {
        await this.LOCATORS.chooseLensesButton.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
