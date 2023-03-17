import { expect, test } from '@Test';

test.describe('Item controls on cart page', () => {
    test('increase and decrease product quantity and check changes in "subtotal" value', async ({
        page,
        categoryPage,
        productPage,
        cartPage,
    }) => {
        await categoryPage.open('eyeglasses-collection');
        await categoryPage.clickFirstProduct();
        await productPage.GlassesSidebar.chooseLenses();
        await page.waitForTimeout(5000);
        await productPage.GlassesWizzard.chooseNoExtraChargeSteps();
        await productPage.GlassesWizzard.clickAddToCart();
        await test.step('1 increase quantity', async () => {
            const subTotalInitial = await cartPage.MentionMe.getSubtotal();
            await cartPage.CartItem.increaseQuantity();
            const subTotalAfterIncrease = await cartPage.MentionMe.getSubtotal();
            expect(subTotalInitial).not.toEqual(subTotalAfterIncrease);
        });
        await test.step('2 decrease quantity', async () => {
            const subTotalInitial = await cartPage.MentionMe.getSubtotal();
            await cartPage.CartItem.decreaseQuantity();
            const subTotalAfterDecrease = await cartPage.MentionMe.getSubtotal();
            expect(subTotalInitial).not.toEqual(subTotalAfterDecrease);
        });
        await test.step('3 remove item from cart', async () => {
            await cartPage.CartItem.removeItem();
            const cartItems = await cartPage.cartItemsList();
            const isEmptyCartBlockOnPage = await cartPage.checkEmptyCartBlock();
            expect(cartItems).toHaveLength(0);
            expect(isEmptyCartBlockOnPage).toBeTruthy();
        });
    });
});
