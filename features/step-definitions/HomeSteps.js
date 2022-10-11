const { Given, When, Then } = require('@wdio/cucumber-framework');
const Home = require('../pageobjects/functions/Home.function');

Given(/^I am on the home page$/, {timeout: 1000000}, async () => {
    await Home.open();
});

When(/^I click the top bar (.*_*) button$/, {timeout: 1000000}, async (option) => {
    switch(option){
        case 'Business Digest':
            await Home.clickTopBarBusinessDigestButton();
            break;

        case 'Market Digest':
            await Home.clickTopBarMarketDigestButton();
            break;

        case 'Health Concept':
            await Home.clickTopBarHealthConceptButton();
            break;

        case 'Beauty Digest':
            await Home.clickTopBarBeautyDigestButton();
            break;

        case 'Enquire':
            await Home.clickTopBarEnquireButton();
            break;
            
        default:
            console.log(`${option} is not an option`);
    }
});

When(/^I click on (.*_*) button on home page$/, {timeout: 1000000}, async (option) => {
    switch(option){
        case 'Business Digest Home Page':
            await Home.clickBusinessDigestHomePageButton();
            break;

        case 'Business Digest Facebook':
            await Home.clickBusinessDigestFacebookButton();
            break;

        case 'Business Digest Instagram':
            await Home.clickBusinessDigestInstagramButton();
            break;

        case 'Market Digest':
            await Home.clickTopBarMarketDigestButton();
            break;

        case 'Health Concept':
            await Home.clickTopBarHealthConceptButton();
            break;

        case 'Beauty Digest':
            await Home.clickTopBarBeautyDigestButton();
            break;

        case 'Enquire':
            await Home.clickTopBarEnquireButton();
            break;
            
        default:
            console.log(`${option} is not an option`);
    }
});

Then(/^I should see (.*_*) heading on home page$/, {timeout: 1000000}, async (option) => {
    switch(option){
        case 'Business Digest':
            await expect(Home.BusinessDigestHeading).toBeDisplayedInViewport();
            break;

        case 'Market Digest':
            await expect(Home.MarketDigestHeading).toBeDisplayedInViewport();
            break;

        case 'Health Concept':
            await expect(Home.HealthConceptHeading).toBeDisplayedInViewport();
            break;

        case 'Beauty Digest':
            await expect(Home.BeautyDisgestHeading).toBeDisplayedInViewport();
            break;

        default:
            console.log(`${option} is not an option`);
    }
});
function sleep(time) {
    return new Promise((resolve) => {
        setTimeout(resolve, time || 1000);
    });
}
Then(/^I wait$/, async() => {
    await sleep(5000)
});