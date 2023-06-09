import { Container } from '@Core/container';

export class CategoryPage extends Container {
    protected LOCATORS = {
        product: this.page.locator('[data-test-name="product"]'),
    };
    public async open(url: 'eyeglasses-collection' | 'sunglasses' | 'contact-lenses') {
        await this.page.goto(`/${url}`, {
            waitUntil: 'domcontentloaded',
        });
        await this.page.waitForLoadState('domcontentloaded');
    }
    public async clickFirstProduct(): Promise<void> {
        const productsArray = await this.LOCATORS.product.all();
        await productsArray[0].click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
