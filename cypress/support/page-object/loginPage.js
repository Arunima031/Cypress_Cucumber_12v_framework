class loginPage{

    getUsernameTextBox(){
        return cy.get("[placeholder='Username']",{timeout:2000})
    }
    getPasswordTextBox(){
       return cy.get("[placeholder='Password']",{timeout:2000})
    }
    getLoginButton(){
       return cy.get("button[type='submit']",{timeout:2000})
    }
    getErrorText(){
        return cy.get("[class*=alert-content-text]",{timeout:2000})
    }
}
export default loginPage;