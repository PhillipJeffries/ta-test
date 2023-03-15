import { Component } from '@Core/component';

export class Form extends Component {
    public LOCATORS = {
        input: (name: string) => this.locator.locator(`[name=${name}]`).first(),
        countrySelect: this.locator.locator('(//select[@data-test-name="countrySelect"])[1]'),
        // countryItem: this.locator.locator('//select[@data-test-name="countrySelect"]//option[1]'),
        continue: this.locator.locator('//button[contains(@type, "submit")]'),
    };
    public async fill(dataToFill: Record<string, string>): Promise<void> {
        for (const [inputName, data] of Object.entries(dataToFill)) {
            await this.LOCATORS.input(inputName).fill(data);
            // await inputs[0].fill(data);
            // console.log(await this.LOCATORS.input(inputName).all());
            // await this.page.waitForTimeout(5000);
        }
    }
    public async selectFirstCountry(): Promise<void> {
        // const countriesList = await this.LOCATORS.countryItem.all();
        await this.LOCATORS.countrySelect.selectOption('AL');
        // await this.LOCATORS.countryItem.scrollIntoViewIfNeeded();
        // await this.LOCATORS.countryItem.click();
    }
    public async continue(): Promise<void> {
        await this.LOCATORS.continue.click();
        await this.page.waitForLoadState('domcontentloaded');
    }
}
