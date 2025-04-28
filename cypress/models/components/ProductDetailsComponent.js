export default class ProductDetailsComponent {
    getProductImg = () => {
        return cy.get(".product-image img")
    }
    getProductName = ()=>{
        return cy.get("#tbodyid .name")
    }
    getProductPrice = () => {
        return cy.get("#tbodyid .price-container")
    }
    getProductDesc = () => {
        return cy.get('#tbodyid .description ')
    }
    getAddCart = () => {
        return cy.get('[onclick="addToCart(1)"]')
    }
    
}