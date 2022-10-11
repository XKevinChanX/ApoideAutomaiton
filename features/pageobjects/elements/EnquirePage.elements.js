module.exports = class EnquirePage {
    get uniqueLocator() {return $('//*[@id=\'formModal\']');}
    get closeBtn() {return $('//div[@id=\'formModal\']/div/div/button[@aria-label=\'Close\']');}
    get nameField() {return $('//div[@id=\'formModal\']/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[1]/input[1]');}
    get emailField() {return $('//div[@id=\'formModal\']/div[1]/div[1]/div[2]/div[1]/div[1]/form[1]/div[2]/input[1]');}
    get businessDigestCheckBox() {return $('//*[@id=\'formModal\']/div/div/div/div/div/form/div/div/div[1]');}
    get healthConceptCheckBox() {return $('//*[@id=\'formModal\']/div/div/div/div/div/form/div/div/div[2]');}
    get marketDigestCheckBox() {return $('//*[@id=\'formModal\']/div/div/div/div/div/form/div/div/div[3]');}
    get beautyDigestCheckBox() {return $('//*[@id=\'formModal\']/div/div/div/div/div/form/div/div/div[4]');}
    get remarkField() {return $('//*[@id=\'formModal\']/div/div/div/div/div/form/div/textarea[1]');}
    get submitButton() {return $('//div[@id=\'formModal\']/div/div/div/div/div/form/div/div/button[@name=\'submit\']');}
    get sendSuccessMessage() {return $('');}
}