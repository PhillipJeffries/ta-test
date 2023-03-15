import { Container } from '@Core/container';
import { MentionMe } from '@Components/cartPage/mentionMe';

export class CartPage extends Container {
    protected LOCATORS = {
        mentionMeContainer: this.page.locator('[data-test-name="mentionMeContainer"]'),
    };
    public async proceedToCheckout(): Promise<void> {
        await this.page.waitForLoadState('domcontentloaded');
    }
    public MentionMe = new MentionMe(this.LOCATORS.mentionMeContainer, this.page);
}
