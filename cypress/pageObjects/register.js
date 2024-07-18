class InputRegister {
    inputEmail(email) {
        cy.get('input[name="email"]').type(email);
    }
    inputFname(fname) {
        cy.get('input[name="firstName"]').type(fname);
    }
    inputlname(lname) {
        cy.get('input[name="lastName"]').type(lname);
    }
    inputPhonenumber(phone) {
        cy.get('input[name="phoneNumber"]').type(phone);
    }
    inputNewpassword(newpassword) {
        cy.get('input[name="newPassword"]').type(newpassword);
    }
    inputConfirmpassword(password) {
        cy.get('input[name="confirmPassword"]').type(password);
    }
    checkConsent() {
        cy.get('input[name="consent"]').check();
    }
    submitRegister() {
        cy.get('[type="submit"]').should("be.visible").click()
    }
}

export default new InputRegister();