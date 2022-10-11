const HomePage = require('../elements/HomePage.elements');

class Home extends HomePage{
    open () {
        return browser.url(this.HomeUrl);
    }
    
    async clickTopBarBusinessDigestButton () {
        await this.TopBarBusinessDigestBtn.click();
    }
    
    async clickTopBarMarketDigestButton () {
        await this.TopBarMarketDigestBtn.click();
    }

    async clickTopBarHealthConceptButton () {
        await this.TopBarHealthConceptBtn.click();
    }
    
    async clickTopBarBeautyDigestButton () {
        await this.TopBarBeautyDigestBtn.click();
    }
    
    async clickTopBarEnquireButton () {
        await this.TopBarEnquireBtn.click();
    }
    
    async clickBusinessDigestHomePageButton () {
        await this.BusinessDigestHomePageBtn.click();
    }

    async clickBusinessDigestFacebookButton () {
        await this.BusinessDigestFacebookBtn.click();
    }

    async clickBusinessDigestInstagramButton () {
        await this.BusinessDigestInstagramBtn.click();
    }
}

module.exports = new Home();