import { Component } from '@Core/component';
import { Form } from './form/form';

export class DeliveryStep extends Component {
    protected LOCATORS = {
        form: this.locator.locator('//form'),
    };
    public Form = new Form(this.LOCATORS.form, this.page);
}
