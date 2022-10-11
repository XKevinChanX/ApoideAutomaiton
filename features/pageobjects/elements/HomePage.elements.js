module.exports = class HomePage {
    get HomeUrl() {return "https://apoideamedia.io/"}

    //Top Bar Button
    get TopBarBusinessDigestBtn() {return $('//div[1]/div[1]/ul[1]/li[1]/a[1]/img[1]');}
    get TopBarMarketDigestBtn() {return $('//div[1]/div[1]/ul[1]/li[2]/a[1]/img[1]');}
    get TopBarHealthConceptBtn() {return $('//div[1]/div[1]/ul[1]/li[3]/a[1]/img[1]');}
    get TopBarBeautyDigestBtn() {return $('//div[1]/div[1]/ul[1]/li[4]/a[1]/img[1]');}
    get TopBarEnquireBtn() {return $('//nav/div[1]/div[1]/div[1]/a[1]');}

    //Business Digest Session
    get BusinessDigestHeading(){return $('//section[6]/div[2]/div[1]/div[1]/div[1]/div[1]/img[1]');}
    get BusinessDigestHomePageBtn() {return $('//*[@id=\'brand-BD\']/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/a[1]/span[1]');}
    get BusinessDigestFacebookBtn() {return $('//*[@id=\'brand-BD\']/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/a[2]/span[1]');}
    get BusinessDigestInstagramBtn() {return $('//*[@id=\'brand-BD\']/div[2]/div[1]/div[1]/div[1]/div[3]/div[2]/div[1]/div[1]/a[3]/span[1]');}

    //Market Digest Session
    get MarketDigestHeading(){return $('//section[7]/div[2]/div[1]/div[1]/div[1]/div[1]/img[1]');}

    //HealthConcept Session
    get HealthConceptHeading(){return $('//section[8]/div[2]/div[1]/div[1]/div[1]/div[1]/img[1]');}

    //Beauty Digest Session
    get BeautyDisgestHeading(){return $('//section[9]/div[2]/div[1]/div[1]/div[1]/div[1]/img[1]');}
}