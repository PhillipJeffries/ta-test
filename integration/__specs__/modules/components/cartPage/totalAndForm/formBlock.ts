import { Component } from '@Core/component';
import { fireEvent } from '@testing-library/react';

const SELECTORS = {
    nameInput: './/input[@name="name"]',
    priceInput: './/input[@name="price"]',
    quantityInput: './/input[@name="quantity"]',
    addNewItemButton: './/button[text()="Add new item"]',
};

export class Form extends Component {
    public async fillForm({ name, price, quantity }): Promise<void> {
        const [nameInput] = await this.element.waitForXpath(SELECTORS.nameInput);
        fireEvent.change(nameInput, { target: { value: name } });
        const [priceInput] = await this.element.waitForXpath(SELECTORS.priceInput);
        fireEvent.change(priceInput, { target: { value: price } });
        const [quantityInput] = await this.element.waitForXpath(SELECTORS.quantityInput);
        fireEvent.change(quantityInput, { target: { value: quantity } });
    }
    public async addNewItem(): Promise<void> {
        await this.element.clickByXpath(SELECTORS.addNewItemButton);
    }
}
