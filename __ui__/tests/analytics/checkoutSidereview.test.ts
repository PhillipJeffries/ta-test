import { test } from '@Test';
import faker, { address, phone } from 'faker';

test.describe('"CheckoutNonInteraction" "Error" events', () => {
    const formData = {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        phone: faker.phone.phoneNumber(),
        address: faker.address.streetAddress(),
        city: faker.address.city(),
        postal: faker.address.zipCode(),
    };
    test('test', async ({ page, categoryPage, productPage, cartPage, checkoutPage }) => {
        await categoryPage.open('sunglasses');
        await categoryPage.clickFirstProduct();
        await productPage.GlassesSidebar.addToCart();
        await cartPage.proceedToCheckout();
        await checkoutPage.DeliveryStep.Form.fill(formData);
        await checkoutPage.DeliveryStep.Form.selectFirstCountry();
    });
});
