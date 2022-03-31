import {Settings, Login, Register} from "../../cypress/fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    before(function () {
        cy.visit('/')
 
    });

    it("Login- User should be able to login  ", function () {
        cy.wait(3000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(3000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        
        
    })
 
    it("Settings- User able to give spaces in full name field inside settings page", function () {
        cy.get(Settings.editBtn).click()
        cy.get(Settings.fullNameField).type(Settings.fullNameTxt2)
        cy.get(Settings.saveBtn).click()

    })
})
