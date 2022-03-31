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
        cy.wait(3000)
        
    })
    
    
    it("Settins- User should be able to update info in the settings page", function () {
        cy.get(Settings.editBtn).click()
        cy.get(Settings.fullNameField).type(Settings.fullNameTxt)
        cy.get(Settings.mobileNumberField).type(Settings.mobileNumberText)
        cy.get(Settings.addressField).type(Settings.addressFieldTxt)
        cy.get(Settings.saveBtn).click()
        cy.get(Settings.logOutBtn).click()

    })
    before(function () {
        cy.visit('/')
    })
    
    it("Settins- User should be able to chaange mobile number ", function () {
    
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(2000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        cy.wait(3000)
        cy.get(Settings.editBtn).click()
        cy.get(Settings.mobileNumberField).clear(Settings.mobileNumberText).type(Settings.mobileNumberChange)
        cy.get(Settings.saveBtn).click()

    })
})