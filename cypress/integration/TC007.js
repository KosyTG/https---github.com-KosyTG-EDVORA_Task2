import {Register} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("REGISTER- User stays on the same page after registering ", function () {
        cy.get(Register.signInBtn).click()
        cy.wait(3000)
        cy.get(Register.userNameField).click().type(Register.userNameTxt)
        cy.wait(3000)
        cy.get(Register.passwordField).type(Register.pswdText2)
        cy.get(Register.createAcctBtn).click()
        cy.wait(5000)



      
    })
 
 
})