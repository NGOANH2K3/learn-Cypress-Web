import { DemoBlazePage } from "../../models/pages/demoBlazePage";
import { HomePageApi } from "../../support/homePageApi";

describe('DB HomePage', () => {

    let apiProduct
    beforeEach(() => {
        cy.login('ngoanh', '123456')
        cy.visit('https://www.demoblaze.com/')
        HomePageApi.getHomePageProduct().then(entries => apiProduct = entries)
    });

    it('should be able to login by using Api', () => {
        
        let apiProductData = apiProduct.map(item => {
            return{
                itemName: item.title.replace('\n', ''),
                itemPrice: `$${item.price}`
            }
        })
        new DemoBlazePage().getAllCardData().then(allCardData => {
            cy.wrap('').then(()=>{
                expect(allCardData).to.be.deep.eq(apiProductData)
            })
        })
    });
});