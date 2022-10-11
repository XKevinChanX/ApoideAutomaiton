const { Given, When, Then } = require('@wdio/cucumber-framework');
const BusinessDigestExternal = require('../pageobjects/functions/BusinessDigestExternal.function');
const Home = require('../pageobjects/functions/Home.function');

Then(/^I should see Business Digest (.*_*) Page$/, {timeout: 1000000}, async (option) => {
    switch(option) {
        case 'Home':
            await browser.switchWindow(BusinessDigestExternal.homePageUrl);
            await expect(BusinessDigestExternal.homePageUniqueLocator).toBeDisplayed();
            break;

        case 'Facebook':
            await browser.switchWindow(BusinessDigestExternal.facebookUrl);
            await expect(BusinessDigestExternal.facebookUniqueLocator).toBeDisplayed();
            break;

        case 'Instagram':
            await browser.switchWindow(BusinessDigestExternal.instagramUrl);
            await expect(BusinessDigestExternal.instagramUniqueLocator).toBeDisplayed();
            break;
     
        default:
            console.log(`${option} is not an option`);
        }
    await browser.switchWindow(Home.HomeUrl);
});