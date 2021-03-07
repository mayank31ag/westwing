const Page = require('./page')

class SearchPage extends Page {

    get clickSearch(){return $('//input[@type=search]')}
    get selectMobel(){return$('//div[contains(@class=Item__StyledWrapper-sc-184dx11-0 iFsDBf)][1]')}
    get clickWishListIcon(){return$('//body/div[@id=app-root]/div[1]/div[1]/div[7]/div[1]/div[1]/main[1]/div[1]/div[2]/div[1]/a[1]/div[1]/div[2]/div[2]/div[1]/*[1]')}
    get verifyMobelPage(){return$('//h1[contains(text=Möbel)]')}

    search () {

        this.clickSearch.isClickable();
        this.clickSearch.setValue('Möbel'); 
        browser.pause(1000);
    }

    selectMobel() {

        this.selectMobel.waitForClickable(timeout,2000);
        this.selectMobel();
        this.verifyMobelPage();

    }

    clickWishListIcon(){

        this.clickWishListIcon().click();

    }

    open () {
        return super.open('login');
    }

}

module.exports = new SearchPage();