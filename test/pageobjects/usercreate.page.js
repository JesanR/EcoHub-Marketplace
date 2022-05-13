const Page = require('./page');
    /* const firstName = $('input[formcontrolname="firstName"]');
    const GenderM = $(`.cdk-overlay-pane mat-option:nth-child(1)`);
    const primaryLanguageDropdown = element(by.css("[formcontrolname='primaryLanguage']"));
    const languageOptionGerman = $(`.cdk-overlay-pane mat-option:nth-child(1)`);
    const langOptGerman = $('mat-option[value="German"]')
    const languageOptionFrench = $(`.cdk-overlay-pane mat-option:nth-child(2)`);
    const languageOptionEnglish = element(by.css('[value="English"]'));
    const languageOptionItalian = $(`.cdk-overlay-pane mat-option:nth-child(4)`);
    const rolesDD = $$('.list');
    const roles01 = $$('.list').get(0); */

class UserPage extends Page {

    /* //_primaryLanguageDropdown = element(by.css("[formcontrolname='primaryLanguage']"));
    get primaryLanguageDropdown() {
        return this._primaryLanguageDropdown;
    }
    set primaryLanguageDropdown(value) {
        this._primaryLanguageDropdown = value;
    }
    languageOptionEnglish = element(by.css('[value="English"]')); */
    get userPageTitle () {
        return $('.title.m-0.font-size-40.font-weight-700')
    }
    get firstName () {
        return $('input[formcontrolname="firstName"]')
    }
    get lastName () {
        return $('input[formcontrolname="lastName"]')
    }
    get telephone () {
        return $('input[formcontrolname="phone"]')
    }
    get countryCode () {
        return $('input[formcontrolname="code"]')
    }
    get number () {
        return $('input[formcontrolname="number"]')
    }
    get dateOfBirth () {
        return $('input[formcontrolname="birthDay"]')
    }
    get gender () {
        /* return $$(".cdk-overlay-pane mat-option") */
        return $('mat-select[formcontrolname="gender"]')
    }
    get genderM () {
        /* return $(".cdk-overlay-pane mat-option:nth-child(1)") */
        return $('mat-option:nth-child(1)')
    }
    get email () {
        return $('input[formcontrolname="email"]')
    }
    get areaOfResponse () {
        return $('input[formcontrolname="designatedPosition"]')
    }
    get languageDropDown () {
        return $('mat-select[formcontrolname="primaryLanguage"]')
    }
    get languageOptionGerman () {
        return $('.mat-option[value="German"]')
    }
    get roleInput () {
        return $(`div.mat-form-field-infix input[data-placeholder="Search for role"]`)
    }
    get role () {
        return $$('.lists')
    }
    get role01 () {
        return $('li.lists')
    }
    get designatedPosition () {
        return $('input[formcontrolname="designatedPosition"]')
    }
    get assignButton () {
        return $("button[class='mat-focus-indicator round-btn mat-stroked-button mat-button-base mat-accent'] span[class='mat-button-wrapper']")
    }
    get enterButton () {
        return $("button[class='mat-focus-indicator ml-4 mr-4 font-size-10 mat-stroked-button mat-button-base mat-accent ng-star-inserted'] span[class='mat-button-wrapper'] span")
    }
    get userStatusPending () {
        return $('.color-pending.ng-star-inserted')
    }

    async enterUser (firstname, lastname, telephone, cc, number, DoB, email, desigPos) {

        
        //let gen = $$('.cdk-overlay-pane mat-option')

        await this.firstName.setValue(firstname)
        console.log("First Name success")
        await this.lastName.setValue(lastname)
        console.log("Last Name success")
        await browser.pause(1000)
        await this.telephone.setValue(telephone)
        console.log("telephone number success.")
        await browser.pause(1000)

        await this.countryCode.setValue(cc)
        await this.number.setValue(number)
        console.log("number success.")

        await this.dateOfBirth.setValue(DoB)
        console.log("dob success.")
        await browser.pause(1000)

        await this.email.setValue(email)
        console.log("email success.")
        await browser.pause(1000)

        /* let langDD = $('mat-select[formcontrolname="primaryLanguage"]')
        await langDD.click() */

        /* asdas */
        await (await this.languageDropDown).click()
        console.log("language Drop Down click success!")
        await browser.pause(1000)
        await (await this.languageOptionGerman).moveTo()
        await this.languageOptionGerman.click()
        await browser.pause(1000)
        console.log("language selection success.")

        await this.gender.click()
        console.log("Gender dropdown click success.")
        await browser.pause(1000)
        await (await this.genderM).moveTo()
        await (await this.genderM).click()
        console.log("Click on Male success!")
        await browser.pause(1000)

        await (await this.designatedPosition).setValue(desigPos)
        console.log("Designated Post input success!")
        await browser.pause(1000)

        /* let rI = $(`div.mat-form-field-infix input[data-placeholder="Search for role"]`); */
        await this.roleInput.scrollIntoView()
        await browser.pause(1000)
        await this.roleInput.setValue("Ig")
        await (await this.roleInput).click()
        await browser.pause(2000)
        //await this.role01.moveTo()
        await this.role01.click()
        await browser.pause(1000)
        await (await this.assignButton).click()
        await browser.pause(1000)

        await (await this.enterButton).scrollIntoView()
        await browser.pause(2000)
        await (await this.enterButton).click()
        await browser.pause(6000)
        
        await expect(browser).toHaveUrlContaining("users")
        await (await this.userStatusPending).waitForDisplayed({timeout: 60000})
        await browser.pause(4000)

    }

    open () {
        return super.open('portal/en/user-management/users/create');
    }
}

module.exports = new UserPage();