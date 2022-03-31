import {Register} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("REGISTER- User should be able to create account using special symbol “@” in password field", function () {
        cy.get(Register.signInBtn).click()
        cy.wait(3000)
        cy.get(Register.userNameField).click().type(Register.userNameTxt)
        cy.wait(3000)
        cy.get(Register.passwordField).type(Register.passwordTxt)
        cy.get(Register.createAcctBtn).click()
        cy.wait(8000)



      
    })
 
 
})
