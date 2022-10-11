const EnquirePage = require('../elements/EnquirePage.elements');

class Enquire extends EnquirePage{
    async clickCloseButton () {
        await this.closeBtn.click();
    }

    async inputNameField (name) {
        await this.nameField.setValue(name);
    }

    async inputEmailField (email) {
        await this.emailField.setValue(email);
    }

    async clickBusinessDigestCheckBox () {
        await this.businessDigestCheckBox.click();
    }

    async clickHealthConceptCheckBox () {
        await this.healthConceptCheckBox.click();
    }

    async clickMarketDigestCheckBox () {
        await this.marketDigestCheckBox.click();
    }

    async clickBeautyDigestCheckBox () {
        await this.beautyDigestCheckBox.click();
    }

    async inputRemarkField (remark) {
        await this.remarkField.setValue(remark);
    }

    async clickSubmitButton () {
        await this.submitBtn.click();
    }
}

module.exports = new Enquire();