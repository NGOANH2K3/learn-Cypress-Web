import { DemoBlazePage } from "../../models/pages/demoBlazePage";
import { HomePageApi } from "../../support/homePageApi";

describe('Homepage Category Test', () => {
    beforeEach(() => {
        cy.visit("/")
        HomePageApi._waitForEntriesRequest()
    });

    function verifycategoryFilterBy(productName){
        cy.intercept('/bycat').as('cats')
        cy.get(`[onclick="byCat(\'${productName}\')"]`).click({force:true})
        cy.wait('@cats')
        cy.request({
            method: "POST",
            url: "https://api.demoblaze.com/bycat",
            body: {
                cat:`${productName}`
            }
        }).then(res => {
            let apiProductData = res.body.Items.map(item => {
                return{
                    itemName: item.title.replace('\n', ''),
                    itemPrice: `$${item.price}`
                }
            })
            new DemoBlazePage().getAllCardData().then(allCardData => {
                cy.wrap('').then(()=> {
                    expect(allCardData).to.be.eql(apiProductData)
                })
            })
        })
    }

    const PRODUCT = ["phone", "notebook", "monitor"]

    PRODUCT.forEach((product)=> {
        it(`shuold be able to filter ${product} products`, () => {
            verifycategoryFilterBy(`${product}`)
        });
    })

});