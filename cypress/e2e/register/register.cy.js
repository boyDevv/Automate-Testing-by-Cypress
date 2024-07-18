const testData = require("../../fixtures/datatest");
import register from "../../pageObjects/register";
import homepage from "../../pageObjects/homepage";

describe("Register Page", () => {
  beforeEach(() => {
    // cy.openWebPage อยู่ใน commands.js
    cy.visit(testData.url);
  });

  it("Register member ", () => {
    cy.contains("สมัครสมาชิก").should("be.visible").click();
    register.inputEmail(testData.email);
    register.inputFname(testData.fname);
    register.inputlname(testData.lname);
    register.inputPhonenumber(testData.phone);
    register.inputNewpassword(testData.password);
    register.inputConfirmpassword(testData.password);
    register.checkConsent();
    register.submitRegister();
    homepage.checkMsg();
  });
});
