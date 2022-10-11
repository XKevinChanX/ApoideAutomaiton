module.exports = class BusinessDigestHomePage {
    get homePageUrl() {return 'https://businessdigest.io/';}
    get facebookUrl() {return 'https://www.facebook.com/BusinessDigest.io';}
    get instagramUrl() {return 'https://www.instagram.com/business.digest.io/';}
    
    get homePageUniqueLocator() {return $('//*[contains(@src, "/images/business-digest/HeaderLogo.png")]');}
    get facebookUniqueLocator() {return $('#facebook');}
    get instagramUniqueLocator() {return $('//*[@aria-label=\'Instagram\']');}
}