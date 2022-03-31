import {Login, Register, Settings} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("Login- User able to go back after loggin out using native browser back button. ", function () {
        cy.wait(3000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(3000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        cy.get(Settings.logOutBtn).click()
        cy.go(1)

    })
})