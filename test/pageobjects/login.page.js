const Page = require('./page');

class LoginPage extends Page {
   
   
    get acceptCookies(){return $('#onetrust-accept-btn-handler')}

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    acceptCookie () {
       
        this.acceptCookies.click(); 
    }


    /**
     * overwrite specifc options to adapt it to page object
     */
    open () {
        return super.open('login');
    }
}

module.exports = new LoginPage();
