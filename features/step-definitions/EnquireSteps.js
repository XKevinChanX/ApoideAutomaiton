const { Given, When, Then } = require('@wdio/cucumber-framework');
const Enquire = require('../pageobjects/functions/Enquire.function');

Then(/^I should see Enquire Form$/, {timeout: 1000000}, async () => {
    await expect(Enquire.uniqueLocator).toBeDisplayed();
});

When(/^I input (.*_*) in (.*_*) field in Enquire Form$/, {timeout: 1000000}, async (input, option) => {
    switch(option){
        case 'Name':
            await Enquire.inputNameField(input);
            break;

        case 'Email':
            await Enquire.inputEmailField(input);
            break;

        case 'Remark':
            await Enquire.inputRemarkField(input);
            break; 
            
        default:
            console.log(`${option} is not an option`);
    }
});

When(/^I click on (.*_*) check box in Enquire Form$/, {timeout: 1000000}, async (option) => {
    switch(option){
        case 'Business Digest':
            await Enquire.clickBusinessDigestCheckBox();
            break;

        case 'Market Digest':
            await Enquire.clickMarketDigestCheckBox();
            break;

        case 'Health Concept':
            await Enquire.clickHealthConceptCheckBox();
            break;

        case 'Beauty Digest':
            await Enquire.clickBeautyDigestCheckBox();
            break;

        default:
            console.log(`${option} is not an option`);
    }
});

When(/^I click on (.*_*) button in Enquire Form$/, {timeout: 1000000}, async (option) => {
    switch(option){
        case 'CLose':
            await expect(Enquire.clickCloseButton).click();
            break;

        case 'Submit':
            await expect(Enquire.clickSubmitButton).click();
            break;

        default:
            console.log(`${option} is not an option`);
    }
});

Then(/^I should see send success message$/, {timeout: 1000000}, async () => {
    await expect(Enquire.sendSuccessMessage).toBeDisplayed();
});