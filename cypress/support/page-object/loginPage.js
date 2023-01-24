class loginPage{

    getUsernameTextBox(){
        return cy.xpath("//input[@name='username']",{timeout:2000})
    }
    getPasswordTextBox(){
       return cy.xpath("//input[@name='password']",{timeout:2000})
    }
    getLoginButton(){
       return cy.get("button[type='submit']",{timeout:2000})
    }
    getErrorText(){
        return cy.get("[class*=alert-content-text]",{timeout:2000})
    }
}
export default loginPage;