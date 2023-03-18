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
    const cardData = {
        correctNumber: '4111 1111 1111 1111',
        wrongNumber: '4222 2222 2222 2222',
        date: '1205',
    };
    test.beforeEach(async ({ page, categoryPage, productPage, cartPage, checkoutPage }) => {
        await categoryPage.open('sunglasses');
        await categoryPage.clickFirstProduct();
        await productPage.GlassesSidebar.addToCart();
        await cartPage.MentionMe.proceedToCheckout();
        await page.waitForTimeout(2000);
        await checkoutPage.DeliveryStep.Form.fill(fakeFormData);
        await checkoutPage.DeliveryStep.Form.selectCountry('AL');
        await checkoutPage.DeliveryStep.Form.continue();
        // await page.waitForTimeout(5000);
    });
    test('1 Wrong credit card number, no date, no cvv Event', async ({
        page,
        checkoutPage,
        dataLayer,
    }) => {
        await test.step('1 Wrong credit card number, no date, no cvv Event', async () => {
            const expectedEvent = {
                event: 'CheckoutNonInteraction',
                eventAction: 'Step 2 - Credit card',
                eventCategory: 'Checkout - D',
                eventLabel: 'Error – Please enter a valid credit card number',
            };
            const verifyEvent = dataLayer.createEventVerifier(expectedEvent);
            await checkoutPage.PaymentStep.CreditCard.fillNumber(cardData.wrongNumber);
            await checkoutPage.PaymentStep.CreditCard.placeOrderClick();
            await verifyEvent('Error – Please enter a valid credit card number');
        });
        await test.step('2 Correct credit card number, no date, no cvv Event', async () => {
            const expectedEvent = {
                event: 'CheckoutNonInteraction',
                eventAction: 'Step 2 - Credit card',
                eventCategory: 'Checkout - D',
                eventLabel: 'Error – Please enter a valid expiration date',
            };
            const verifyEvent = dataLayer.createEventVerifier(expectedEvent);
            await checkoutPage.PaymentStep.CreditCard.fillNumber(cardData.correctNumber);
            await checkoutPage.PaymentStep.CreditCard.placeOrderClick();
            await verifyEvent('Error – Please enter a valid expiration date');
        });
        await test.step('3 Correct card number, correct date, no cvv Event', async () => {
            const expectedEvent = {
                event: 'CheckoutNonInteraction',
                eventAction: 'Step 2 - Credit card',
                eventCategory: 'Checkout - D',
                eventLabel: "Error – Please enter your card's security code (CVV/CID)",
            };
            const verifyEvent = dataLayer.createEventVerifier(expectedEvent);
            await checkoutPage.PaymentStep.CreditCard.fillDate(cardData.date);
            await checkoutPage.PaymentStep.CreditCard.placeOrderClick();
            await verifyEvent("Error – Please enter your card's security code (CVV/CID)");
        });
        await test.step('4 Cash on delivery Event', async () => {
            const expectedEvent = {
                event: 'CheckoutInteraction',
                eventCategory: 'Checkout - D',
                eventAction: 'Step 2 - Payment',
                eventLabel: 'CTA - Place Order - Cash On Delivery',
            };
            const verifyEvent = dataLayer.createEventVerifier(expectedEvent);
            await checkoutPage.PaymentStep.CreditCard.fillNumber(cardData.correctNumber);
            await checkoutPage.PaymentStep.CreditCard.fillDate(cardData.date);
            await checkoutPage.PaymentStep.CashOnDelivery.openCashOnDelivery();
            await checkoutPage.PaymentStep.CashOnDelivery.clickPlaceOrder();
            await page.waitForLoadState('domcontentloaded');
            await verifyEvent('CTA - Place Order - Cash On Delivery');
        });
    });
});
