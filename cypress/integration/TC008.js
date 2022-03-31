import {Login, Register, Settings} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("Login- User logging in with invalid information ", function () {
        cy.wait(2000)
        cy.get(Register.userNameField).type(Login.invalidUsername)
        cy.wait(2000)
        cy.get(Login.PswdField).type(Login.invalidpasswordtext)
        cy.get(Login.loginBtn).click()
        
    })
})