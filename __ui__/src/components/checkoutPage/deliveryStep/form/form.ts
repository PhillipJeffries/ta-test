import { Component } from '@Core/component';

export class Form extends Component {
    protected LOCATORS = {
        input: (name: string) => this.locator.locator(`[name=${name}]`).first(),
        countrySelect: this.locator.locator('(//select[@data-test-name="countrySelect"])[1]'),
        continue: this.locator.locator('//button[contains(@type, "submit")]'),
    };
    public async fill(dataToFill: Record<string, string>): Promise<void> {
        for (const [inputName, data] of Object.entries(dataToFill)) {
            await this.LOCATORS.input(inputName).fill(data);
            await this.page.waitForTimeout(1000);
        }
    }
    public async selectCountry(value: string): Promise<void> {
        await this.LOCATORS.countrySelect.selectOption(value);
        await this.page.waitForTimeout(1000);
    }
    public async continue(): Promise<void> {
        await this.LOCATORS.continue.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
