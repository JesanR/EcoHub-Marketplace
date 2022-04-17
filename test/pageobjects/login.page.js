

const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername () {
        //Example code
        /* return $('#username'); */
        return $('#signInName');
        
    }

    get inputPassword () {
        return $('#password');
    }

    get btnSubmit () {
        //Example code
        /* return $('button[type="submit"]'); */
        return $('button[id="next"]');  
        
    }

    get skipSubscription () {
        //return $('button[id="skip"]');
        return $('a[id*="skip"]');
    }

    get skipTutorial () {
        return $("button[class='mat-focus-indicator close-btn mat-icon-button mat-button-base'] mat-icon[role='img']")
    }

    get clickBottomOkay () {
        return $("a[class*='cc-btn cc-dismiss']")
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    //Example code
    /* async login (username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
        */
    
    async login (signInName, password) {
        await this.inputUsername.setValue(signInName)
        await this.inputPassword.setValue(password)
        await this.btnSubmit.click()
        console.log("Success in LOGIN")
        await browser.setTimeout({ 'pageLoad': 60000 })
        //await $(".ng-star-inserted").waitForDisplayed();
        const text = await $("//h1[normalize-space()='Welcome']")
        console.log("Successful Login with Welcome modal with tutorial videos")
        await text.waitForDisplayed({timeout: 60000})
        await expect(browser).toHaveUrlContaining("members")
        console.log("Successful Login with URL containing Members in it.")
        await this.skipTutorial.click()
        console.log("Success in clicking SKIP Tutorial")
        await this.clickBottomOkay.click()
        console.log("Successful in clicking bottom okay!!!")
           
    }

    /**
     * overwrite specific options to adapt it to page object
     */
    open () {
        //Example Code
        /* return super.open('login'); */
        return super.open('portal/en/');
    }
}

module.exports = new LoginPage();
