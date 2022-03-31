import {Login, Register, Settings} from "../fixtures/selectors.js";
 
describe("Given I am on the Home Page", function () {
    beforeEach(function () {
        cy.visit('/')
 
    });
 
    it("Login- User able to login after 10 minutes of staying in the login screen ", function () {
        cy.wait(100000)
        cy.get(Register.userNameField).type(Login.usernameText)
        cy.wait(2000)
        cy.get(Login.PswdField).type(Login.pswdTxt)
        cy.get(Login.loginBtn).click()
        
    })
})