const Page = require('./page')

class WishListPage extends Page {

    get clickLoginHere(){return $('//button[contains(text=Hier einloggen)]')}
    get enterEmail(){return $('//input[contains(@type=email)]')}
    get enterPassword(){return $('//input[contains(@type=password)]')}
    get submitButton(){return $('//button[contains(@type=submit)]')}
    get wishListCount(){return $('//span[contains(@class=IconsButtonTray__MenuIconWrapper-sc-1k6jcrl-1 ktRzWe)]//span')}
    get deleteProduct(){return $('//button[contains(@class=blockListProduct__delete qaBlockListProduct__delete)]')}


    enterEmailAndPassword () {

        this.clickLoginHere.click();
        this.enterEmail.isClickable(timeout,1000);
        this.enterEmail.setValue('mayank3141@gmail.com'); 
        this.enterPassword.setValue('Test@12345');
        this.submitButton.click();
        browser.pause(1000);
    }

    verifyWishList(){
        this.wishListCount.click();
    }

    deleteWishList(){
        this.deleteProduct.click();
    }









    open () {
        return super.open('login');
    }


}

module.exports = new WishListPage();