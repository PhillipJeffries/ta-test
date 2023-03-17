import { CartPageContainer } from '@Components/cartPage/cartPage';
import { Mock } from '@Core/mock';
import { GetCartProductsMock } from '@Mocks/products/get';

describe('cart interaction', () => {
    const cartPage = new CartPageContainer();
    const mock = Mock.getInstance();
    const mockNewCardData = {
        name: 'wooden dick',
        price: 2000,
        quantity: 5,
    };
    beforeEach(async () => {
        mock.addMocks(new GetCartProductsMock());
        await cartPage.fulfill();
        window.dataLayer = [];
    });
    test('Check if all prices add up', async () => {
        const subtotalSumFromAllCards = await cartPage.getSubtotalSumFromAllCards();
        const subtotalPrice = await cartPage.getTotalPrice();
        expect(subtotalSumFromAllCards).toBe(subtotalPrice);
    });
    test('Check all "Remove" events', async () => {
        const cartItems = await cartPage.getCartList();
        for (const item of cartItems) {
            const title = await item.getItemTitle();
            await item.remove();
            const removeEvent = await window.dataLayer.find(e => e.value === title);
            expect(removeEvent).toMatchObject({
                name: 'Remove item',
                value: title,
            });
        }
    });
    test('Check for empty cart label, zero price & disabled "Proceed to Checkout" button', async () => {
        console.log((await cartPage.getTotalBlock()).isButtonDisable());
        const cartItems = await cartPage.getCartList();
        for (const item of cartItems) {
            await item.remove();
        }
        expect(cartPage.isEmpty()).toBe(true);
        expect(await cartPage.getTotalPrice()).toBe(0);
        expect((await cartPage.getTotalBlock()).isButtonDisable()).toBe(true);
    });
    test('Check "Proceed to Checkout" event', async () => {
        const cartItems = await cartPage.getCartList();
        for (const item of cartItems) {
            await item.remove();
        }
        await cartPage.fillFormData(mockNewCardData);
        await (await cartPage.getFormBlock()).addNewItem();
        await (await cartPage.getTotalBlock()).clickProceedAndCheckout();
        const subtotalPrice = await cartPage.getTotalPrice();
        const proceedToCheckoutEvent = await window.dataLayer.find(e => e.name === 'Proceed to Checkout');
        expect(proceedToCheckoutEvent).toMatchObject({
            name: 'Proceed to Checkout',
            value: `$${subtotalPrice}.00`,
        });
    });
});
