import {Login, Register, Settings} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("Login- User should be able to login after loggin out consecutively ", function () {
        cy.wait(3000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(3000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        cy.wait(3000)
        cy.get(Settings.logOutBtn).click()

    })

    it("Login- User should be able to login after loggin out consecutively ", function () {
        cy.wait(3000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(3000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        cy.wait(3000)
        cy.get(Settings.logOutBtn).click()

    })

    it("Login- User should be able to login after loggin out consecutively ", function () {
        cy.wait(3000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(3000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        cy.wait(3000)
        cy.get(Settings.logOutBtn).click()

    })

    it("Login- User should be able to login after loggin out consecutively ", function () {
        cy.wait(3000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(3000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        cy.wait(3000)
        cy.get(Settings.logOutBtn).click()



    })


})