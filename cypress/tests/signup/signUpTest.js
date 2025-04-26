import HeaderComponent from "../../models/components/HeaderComponent";
import SignupComponent from "../../models/components/SignupComponent";

const generateRandomUser = usernameLength=>{
    const ALL_CHARS = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@123456789"
    const ALL_CHARS_LENGTH = ALL_CHARS.length;
    let randomUsername = ''
    for (let index=0; index< usernameLength; index++) {
        randomUsername += ALL_CHARS.charAt(Math.floor(Math.random() * ALL_CHARS_LENGTH))
    }
    return randomUsername
}
const SIGN_UP_CRED = {
    username: generateRandomUser(9),
    password: '123456'
}
describe('SignUp Test', () => {
    let headerComp;
    let signupcomp;
    beforeEach(() => {
        cy.visit('/')
        headerComp = new HeaderComponent()
        signupcomp = new SignupComponent()
    });

    const signup = (username, password) => {
        headerComp.signinLink().click();
        signupcomp.getSignin().should('be.visible')
        signupcomp.getUserName().type(`${username}`, {force: true, waitForAnimations:true})
        signupcomp.getPassword().type(`${password}`, {force: true, waitForAnimations:true})
        signupcomp.getClink().click({force:true})
    }
    it('should be able to login with correct creds', () => {     
        const {username, password} = SIGN_UP_CRED
        signup(username, password); 
        cy.on('window:alert', (alert)=> {
            expect(alert).to.contains("Sign up succesful.")
        })
    });
    it('should be able to login with correct creds', () => {
        const { password} = SIGN_UP_CRED
        signup("ngoanh", password );  
        cy.on('window:alert', (alert)=> {
            expect(alert).to.contains("This user already exist.")
        })
    });
});