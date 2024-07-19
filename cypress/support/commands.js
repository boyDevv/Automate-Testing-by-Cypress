//npm install --save-dev @testing-library/cypress
import '@testing-library/cypress/add-commands';
// -- This is a parent command --
// Cypress.Commands.add('register', (email, fname,lname,phone,newpassword,password) => { 
//     cy.get('input[name="email"]').type(email);
//     cy.get('input[name="firstName"]').type(fname);
//     cy.get('input[name="lastName"]').type(lname);
//     cy.get('input[name="phoneNumber"]').type(phone);
//     cy.get('input[name="newPassword"]').type(newpassword);
//     cy.get('input[name="confirmPassword"]').type(password);
//     cy.get('input[name="consent"]').check();
//     cy.get('[type="submit"]').should("be.visible").click()
//  })

Cypress.Commands.add('openWebPage', (url) => {
    cy.visit(url);
});
//ลองสร้างมาเรียกดู //ไม่ได้ใช้งาน
Cypress.Commands.add('checkConsent', () => {
    cy.get('input[name="consent"]').check();
});
//api
Cypress.Commands.add('expect_status_200',(response) => {
    expect(response.status).to.eql(200);
})
Cypress.Commands.add('expect_status_201_202',(response)=> {
    expect(response.status).to.be.oneOf([201, 202]);
})

// });
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })