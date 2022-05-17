const Page = require('./page');

class MembershipPage extends Page {
    get insurerDropDown(){
        return $('');
    }
    async createMember() {
        await browser.pause(3000);

    }
    open () {
        return super.open('portal/en/membership-applications/create');
    }
}
module.exports = new MembershipPage();