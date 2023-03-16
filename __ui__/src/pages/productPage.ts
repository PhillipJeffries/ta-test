import { Container } from '@Core/container';
import { GlassesSidebar } from '@Components/productPage/glassesSidebar';
import { GlassesWizzard } from '@Components/productPage/glassesWizzard';

export class ProductPage extends Container {
    protected LOCATORS = {
        glassesSidebar: this.page.locator('#sidebar'),
        glassesWizzard: this.page.locator('//div[contains(@class, "steps__container_")]'),
    };
    public GlassesSidebar = new GlassesSidebar(this.LOCATORS.glassesSidebar, this.page);
    public GlassesWizzard = new GlassesWizzard(this.LOCATORS.glassesWizzard, this.page);
}
