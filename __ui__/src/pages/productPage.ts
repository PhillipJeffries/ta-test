import { Container } from '@Core/container';
import { GlassesSidebar } from '@Components/productPage/glassesSidebar';

export class ProductPage extends Container {
    protected LOCATORS = {
        glassesSidebar: this.page.locator('#sidebar'),
    };
    public GlassesSidebar = new GlassesSidebar(this.LOCATORS.glassesSidebar, this.page);
}
