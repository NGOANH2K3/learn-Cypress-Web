export class HomePageApi {
    static getHomePageProduct(){
        this._waitForEntriesRequest()
        return cy.get('@entries').then(entries => {
            return entries.response.body.Items
        })
    }
    static waitForHomePageLoaded(){
        this._waitForEntriesRequest()
    }

    static _waitForEntriesRequest(){
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
    }
}