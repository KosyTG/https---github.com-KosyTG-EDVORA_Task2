import {Register} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("REGISTER- After registering an account,there should be native browser popup . ", function () {
        cy.get(Register.signInBtn).click()
        cy.wait(3000)
        cy.get(Register.userNameField).click().type(Register.userNameTxt2)
        cy.wait(3000)
        cy.get(Register.passwordField).type(Register.PswdTxt3)
        cy.get(Register.createAcctBtn).click()
        



      
    })
 
 
})