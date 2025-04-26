export default class LoginComponent {
    getLogin = () => {
        return cy.get("#logInModal form")
    }
    getUserName = ()=>{
        return cy.get("#loginusername")
    }
    getPassword = () => {
        return cy.get("#loginpassword")
    }
    getClink = () => {
        return cy.get('[onclick="logIn()"]')
    }
    
    getMenuDetails(){
        let menuDetails = [];
        this.headerMenuItemList().each($item => {
            const style = $item.attr("style");
            if(style === undefined || !style.includes("display:none")){
                menuDetails.push({
                    text: $item.text(),
                    href: $item.attr("href")
                })
            }
        })
        
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(() => resolve(menuDetails));
        })
    }
}