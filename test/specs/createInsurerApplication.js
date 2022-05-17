const LoginPage = require('../pageobjects/login.page');
const Credentials = require('../data/credentials');
const CreateMember = require('../pageobjects/membershipcreate.page');
describe('EcoHub-Portal', () => {
    it('should login and create new Insurer membership application', async () => {
        const creds = new Credentials();
        username = creds.userName;
        password = creds.password;
        await LoginPage.open();
        await LoginPage.login(username, password);
        await CreateMember.open();
    });
});


/* npx wdio run wdio.conf.js --spec createInsurerApplication.js 
npx wdio wdio.conf.js --suite insurerCreation
*/