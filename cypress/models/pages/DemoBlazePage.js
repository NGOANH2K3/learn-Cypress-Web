export class DemoBlazePage {

    _getCardDatails(){
        let cardData = {}
        cy.get('h4').then($title => cardData.itemName = $title.text().trim())
        cy.get('h5').then($price => cardData.itemPrice = $price.text().trim())
        return new Cypress.Promise(resolve => resolve(cardData))
    }

    getAllCaraData(){
        let allCardData = [];
        cy.get('.card').each($card => {
            cy.wrap($card).within(()=> {
                this._getCardDatails().then(cardData => allCardData.push(cardData))
            })
        })
        return new Cypress.Promise(resolve => {
            cy.wrap('').then(()=> {resolve(allCardData)})
        })
    }
}