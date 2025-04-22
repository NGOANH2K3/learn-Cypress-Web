const { SRHomePage } = require("../models/pages/SimplyHomePage");

describe('SR HomePage Test', () => {
    it('should be able to print all title', () => {
        cy.visit('https://www.simplyrecipes.com/')
        cy.get('.card__title').each(($title, index)=>{
            cy.log(index)
            cy.log($title.text().trim())
        })
    });

    it('should be able to interact with a componen',()=>{
        cy.visit('https://www.simplyrecipes.com/')
        const srHomePage = new SRHomePage;
        srHomePage.HeroComponent().cardTitle.each(($title, index)=>{
            cy.log(index)
            cy.log($title.text().trim())
        })
    })

    it.only('should be able to get hero card title', () => {
        cy.visit('https://www.simplyrecipes.com/');
        new SRHomePage().getHeroCompTitle().then(title => {
            cy.wrap('').then(()=>{
                expect(title).to.be.eq('My Uncle Oliver’s Spiced Roasted Potatoes Are My Favorite Side Dish')
            });
            
        })
    })
});