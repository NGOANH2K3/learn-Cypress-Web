export default class HeaderComponent {
    brandLogo = () => {
        return cy.get("#nava")
    }
    brandLogoImg = ()=>{
        return cy.get("#nava img")
    }
    headerMeNuItemList = () => {
        return cy.get(".nav-item a")
    }

    getMenuDetails(){
        let menuDetails = [];
        //excludde "display: none"
        this.headerMeNuItemList().each($item => {
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