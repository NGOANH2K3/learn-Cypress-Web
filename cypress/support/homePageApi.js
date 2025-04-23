export class HomePageApi {
    static getHomePageProduct(){
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        return cy.get('@entries')
    }
}