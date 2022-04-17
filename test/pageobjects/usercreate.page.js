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



    get createButton () {
        return $("//button[@class='mat-focus-indicator font-size-10 ml-12 mat-raised-button mat-button-base mat-accent']")
    }

    get firstName () {
        return $("#mat-input-1")
    }
    get lastName () {
        return $("#mat-input-2")
    }
    get telephone () {
        return $("#mat-input-3")
    }
    get countryCode () {
        return $("#mat-input-7")
    }
    get number () {
        return $("#mat-input-8")
    }
    get dateOfBirth () {
        return $("#mat-input-4")
    }
    get gender () {
        return $$(".cdk-overlay-origin")
    }

    async enterUser (firstname, lastname) {

        

        await this.firstName.setValue(firstname)
        console.log("First Name success")
        await this.lastName.setValue(lastname)
        console.log("Last Name success")


        const Gender = this.gender.getValue()
        console.log(Gender);
    }

    open () {
        return super.open('portal/en/user-management/users/create');
    }
}

module.exports = new UserPage();