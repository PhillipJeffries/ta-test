import { test } from '@Test';

test.describe('Item controls on cart page', () => {
    test('test', async ({ page, categoryPage, productPage }) => {
        await categoryPage.open('eyeglasses-collection');
        await categoryPage.clickFirstProduct();
        await productPage.GlassesSidebar.chooseLenses();
        await page.waitForTimeout(5000);
        await productPage.GlassesWizzard.clickSingleVision();
        await productPage.GlassesWizzard.clickSendLater();
        await productPage.GlassesWizzard.clickBasicLenses();
        await productPage.GlassesWizzard.clickContinue();
        await productPage.GlassesWizzard.clickLensesForEverydayUse();
        await productPage.GlassesWizzard.clickContinue();
        await productPage.GlassesWizzard.clickNoThanks();
        await productPage.GlassesWizzard.clickAddToCart();
    });
});
