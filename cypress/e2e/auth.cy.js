/// <reference types='cypress' />
import Auth from "../pages/auth";
import Dashboard from "../fixtures/dashboard";


beforeEach(function () {
    Auth.navigateToLoginPath()
});

describe('Login', function () {
    it('TC_Login_01: Verify successful login with valid credentials', function () {
        Auth.filloutWithValidCredentials()
            .clickLoginBtn()
            .getCurrentUrl()
            .should('include', Dashboard.path)
    });

});

