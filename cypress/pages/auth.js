import data from "../fixtures/auth";

class Auth {
    navigateToLoginPath() {
        cy.visitUrl(data.path);
    }

    filloutWithValidCredentials() {
        cy.get(data.credential.$username).type(data.credential.username);
        cy.get(data.credential.$password).type(data.credential.password);
    }

    clickLoginBtn() {
        cy.get(data.credential.$login_btn).click();
        return cy.url()
    }

}

export default new Auth;