const  {DemoBlazePage}  = require("../models/pages/demoBlazePage");
import products from './products.json';
describe('DB HomePage', () => {
    it('should be able to get hero card title', () => {
        cy.visit('https://www.demoblaze.com/');
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(()=>{
                expect(allCardData).to.be.deep.eq(products);
            }); 
        })
    })
    it.only('should be able to get hero card title', () => {
        cy.visit('https://www.demoblaze.com/');
        // Intercept default homepage product
        cy.intercept('/entries').as('entries')
        cy.wait('@entries')
        cy.get('@entries').then(entries => {
            let apiProduct = entries.response.body.Items
            apiProduct = apiProduct.map(item => {
                return {
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`
                }
            })
            new DemoBlazePage().getAllCardData().then(allCardData => {
                cy.wrap('').then(()=>{
                    expect(allCardData).to.be.deep.eq(apiProduct);
                }); 
            })
        })
    })
});