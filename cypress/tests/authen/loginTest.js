import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";

const LOGIN_CRED = {
    username: 'ngoanh',
    password: '123456'
}
describe('Login Test', () => {
    let headerComp;
    let logincomp;
    beforeEach(() => {
        cy.visit('/')
        headerComp = new HeaderComponent()
        logincomp = new LoginComponent()
    });

    const login = (username, password) => {
        headerComp.loginLink().click();
        logincomp.getLogin().should('be.visible')
        logincomp.getUserName().type(`${username}`, {force: true, waitForAnimations:true})
        logincomp.getPassword().type(`${password}`, {force: true, waitForAnimations:true})
        logincomp.getClink().click({force:true})
    }
    it('should be able to login with correct creds', () => {     
        const {username, password} = LOGIN_CRED
        login(username, password);  

        headerComp.nameUser().should('be.visible')
        headerComp.nameUser().should('contain.text',`Welcome ${LOGIN_CRED.username}`)
    });

    it('should be able to login with correct creds', () => {
        const {username, password} = LOGIN_CRED
        login(username + "_123", password);  
        cy.on('window:alert', (alert)=> {
            expect(alert).to.contains("User does not exist.")
        })
    });

    it('should be able to login with correct creds', () => {
        const {username, password} = LOGIN_CRED
        login(username, password + "-123");  
        cy.on('window:alert', (alert)=> {
            expect(alert).to.contains("Wrong password.")
        })
    });
});