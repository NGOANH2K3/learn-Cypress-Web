describe('exploring default command time out', () => {
    it('should be able to apply custom default time out', () => {
        // cy.visit("/login")
        // cy.get('#username__').type('abc')
        // cy.get('#password__').type('abc') 
        cy.visit('https://the-internet.herokuapp.com/')
        cy.get('a[href="/login"]').click()
        cy.location('pathname',{timeout:500}).should('eq', '/login')
    });
});