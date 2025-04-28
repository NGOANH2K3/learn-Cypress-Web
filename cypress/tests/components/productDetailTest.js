import ProductDetailsComponent from "../../models/components/ProductDetailsComponent";
import { HomePageApi } from "../../support/homePageApi";

describe('Product Detail Component Test', () => {
    
    beforeEach(()=> {
        cy.visit('/'); 
    })

    it('should be able to verify product details', () => {
        HomePageApi.getHomePageProduct().then(hpApiProduct => {
            const randomProduct = hpApiProduct[Math.floor(Math.random() * hpApiProduct.length)];
            const randomProductTitle = randomProduct.title.trim().replace("\n",'')
            cy.contains(randomProductTitle).click();
            
            const productDetais = new ProductDetailsComponent()
            productDetais.getProductImg().should('be.visible')
            productDetais.getProductName().should('have.text',randomProductTitle)
            productDetais.getProductPrice().should('contain.text', randomProduct.price)
            productDetais.getProductDesc().should('not.be.empty')
        })
    });

});

//test:cy2 --ci-build-id=cypress-api-build-${cypressBuildNum} --env baseUrl=${baseUrl}