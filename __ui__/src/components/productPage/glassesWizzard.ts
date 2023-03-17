import { Component } from '@Core/component';

export class GlassesWizzard extends Component {
    protected LOCATORS = {
        singleVision: this.locator.locator('//div[@role = "button"][contains(., "Single Vision")]'),
        sendLater: this.locator.locator('//div[@role = "button"][contains(., "Send later")]'),
        basicLenses: this.locator.locator(
            '//div[@role = "button"][contains(., "Free")][contains(., "Index Basic Lenses")]'
        ),
        lensesForEverydayUse: this.locator.locator('//div[@role="button"][contains(., "Clear")]'),
        continue: this.locator.locator('//button[contains(., "Continue")]'),
        noThanks: this.locator.locator('//button[contains(., "No Thanks")]'),
        addToCart: this.locator.locator('//button[contains(., "Add to Cart")]'),
    };
    public async chooseNoExtraChargeSteps(): Promise<void> {
        await this.clickSingleVision();
        await this.clickSendLater();
        await this.clickBasicLenses();
        await this.clickContinue();
        await this.clickLensesForEverydayUse();
        await this.clickContinue();
        await this.clickNoThanks();
    }

    public async clickSingleVision(): Promise<void> {
        await this.LOCATORS.singleVision.click();
        await this.page.waitForTimeout(2000);
    }
    public async clickSendLater(): Promise<void> {
        await this.LOCATORS.sendLater.click();
        await this.page.waitForTimeout(2000);
    }
    public async clickBasicLenses(): Promise<void> {
        await this.LOCATORS.basicLenses.click();
        await this.page.waitForTimeout(2000);
    }
    public async clickLensesForEverydayUse(): Promise<void> {
        await this.LOCATORS.lensesForEverydayUse.click();
        await this.page.waitForTimeout(2000);
    }
    public async clickContinue(): Promise<void> {
        await this.LOCATORS.continue.click();
        await this.page.waitForTimeout(2000);
    }
    public async clickNoThanks(): Promise<void> {
        await this.LOCATORS.noThanks.click();
        await this.page.waitForTimeout(2000);
    }
    public async clickAddToCart(): Promise<void> {
        await this.LOCATORS.addToCart.click();
        await this.page.waitForTimeout(2000);
    }
}
