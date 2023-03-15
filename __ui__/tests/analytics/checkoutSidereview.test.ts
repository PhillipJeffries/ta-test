import { test } from '@Test';
import faker from 'faker';

test.describe('"CheckoutNonInteraction" "Error" events', () => {
    const fakeFormData = {
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
        await cartPage.MentionMe.proceedToCheckout();
        await checkoutPage.DeliveryStep.Form.fill(fakeFormData);
        await checkoutPage.DeliveryStep.Form.selectCountry('AL');
        await page.waitForTimeout(5000);
        await checkoutPage.DeliveryStep.Form.continue();
        await page.waitForTimeout(5000);
        await checkoutPage.PaymentStep.CreditCard.fillNumber('1213413425');
        await checkoutPage.PaymentStep.CreditCard.fillDate('2205');
        await checkoutPage.PaymentStep.CreditCard.fillCVV('444');
        await page.waitForTimeout(5000);
        await checkoutPage.PaymentStep.CreditCard.placeOrderClick();
    });
});
