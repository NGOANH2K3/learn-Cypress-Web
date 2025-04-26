export default class SignupComponent {
    getSignin = () => {
        return cy.get("#signInModal form")
    }
    getUserName = ()=>{
        return cy.get("#sign-username")
    }
    getPassword = () => {
        return cy.get("#sign-password")
    }
    getClink = () => {
        return cy.get('[onclick="register()"]')
    }
    
}