import HeaderComponent from "../../models/components/HeaderComponent";

describe('Header Component Test', () => {
    const BRAND_TEXT = 'PRODUCT STORE';
   
    let headerComp;

    before(()=> {
        cy.visit('/');
        headerComp = new HeaderComponent();
    })
    it('Test for brand logo', () => {
        headerComp.brandLogoImg().should('be.visible')
        headerComp.brandLogo().should('contain.text', BRAND_TEXT)
    });
    it('Test for header menu', () => {
        headerComp.getMenuDetails().then(menuDetailData => {
            cy.log(JSON.stringify(menuDetailData))
        })
    });
});