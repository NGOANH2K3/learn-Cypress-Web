import HeaderComponent from "../../models/components/HeaderComponent";
import LoginComponent from "../../models/components/LoginComponent";
import { HomePageApi } from "../../support/homePageApi";


describe('Order Item Component Test', () => {
    
    beforeEach(()=> {
        cy.visit('/'); 
    })

    it('order item as guest', () => {
       purchaseItem()
    });

    it('Order item as loggin in user', () => {
        //loggin
        const LOGIN_CRED = {
            username: 'ngoanh',
            password: '123456'
        }
        const {username, password} = LOGIN_CRED
        login(username, password);  
        
        // Purchase
        purchaseItem()

     });
 

});
const login = (username, password) => {
    let headerComp = new HeaderComponent()
    let logincomp = new LoginComponent()
    headerComp.loginLink().click();
    logincomp.getLogin().should('be.visible')
    logincomp.getUserName().type(`${username}`, {force: true, waitForAnimations:true})
    logincomp.getPassword().type(`${password}`, {force: true, waitForAnimations:true})
    logincomp.getClink().click({force:true})
}

const purchaseItem = () => {
    HomePageApi.getHomePageProduct().then(hpApiProduct => {
        const randomProduct = hpApiProduct[Math.floor(Math.random() * hpApiProduct.length)];
        const randomProductTitle = randomProduct.title.trim().replace("\n",'')
        cy.contains(randomProductTitle).click();

        //click on add to cart button
        cy.contains('Add to cart').click();

        // go to cart
        cy.get('#cartur').click()

        // verify cart detail


        // place order
        cy.contains('Place Order').click()

        // place order details
        cy.get('#name').type('ngoanh')
        cy.get('#country').type('Viet Name')
        cy.get('#city').type('Ha Noi')
        cy.get('#card').type('123456789')
        cy.get('#month').type('04')
        cy.get('#year').type('2025')
        cy.contains('Purchase').click()

        //verification
        // verify purchase confirm dialog
        cy.get('.sweet-alert h2').should('have.text', 'Thank you for your purchase!')
        cy.get('.sweet-alert .lead').then($confirmOrderDetais => {
            cy.wrap($confirmOrderDetais).should('contain.text', randomProduct.price)
            cy.wrap($confirmOrderDetais).should('contain.text', 'Card Number: 123456789')

        })

    })
}