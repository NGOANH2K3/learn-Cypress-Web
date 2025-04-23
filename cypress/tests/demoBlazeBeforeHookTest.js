import { DemoBlazePage } from "../models/pages/demoBlazePage";
import { HomePageApi } from "../support/homePageApi";

describe('DB HomePage', () => {
   
    let apiProduct
    beforeEach(() => {
        cy.visit('https://www.demoblaze.com/')
        HomePageApi.getHomePageProduct().then(entries => apiProduct = entries)
    });

    it('should be able to get hero card title', () => {
        let apiProductdata = apiProduct.response.body.Items.map(item => {
            return {
                itemName: item.title.replace('\n', ''),
                itemPrice: `$${item.price}`
            }
        })
        new DemoBlazePage().getAllCaraData().then(allCardData => {
            cy.wrap('').then(()=>{
                expect(allCardData).to.be.deep.eq(apiProductdata);
            }); 
        })
    });
});