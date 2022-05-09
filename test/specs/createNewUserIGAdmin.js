const LoginPage = require('../pageobjects/login.page');
const Credentials = require('../data/credentials');
//const ImpersonateMember = require('../pageobjects/impersonateMember')
const CreateUser = require('../pageobjects/usercreate.page');

describe('EcoHub-portal', () => {
    it('should login with valid credentials Create a new user', async () => {
        /* await LoginPage.open();

        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!'); */

        const creds = new Credentials()
        username = creds.userName;
        password = creds.password;

        await LoginPage.open();
        
        //Example code
        /* await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!'); */
        
        await LoginPage.login(username, password);


        await CreateUser.open()
        await CreateUser.enterUser("Jesan", "Rahman", "123456789", "+880", "1687711728", "1/1/1985", "auto.eco214210@yopmail.com", "AUTO PAA")
    });
});

/* run this command below:
npx wdio run wdio.conf.js --spec createNewUserIGAdmin.js
or

npx wdio wdio.conf.js --suite userCreation*/

/* run this command below to run all the specs:
npx wdio run wdio.conf.js */

