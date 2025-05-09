describe('Multiple elems matching interaction', () => {
    it('should be able to interact with list of element', () => {
        cy.visit('/login')

        // use eq
        // cy.get("input").eq(0).type('tomsmith')
        // cy.get('input').eq(1).type('SuperSecretPassword!')


        // use closure
        // cy.get('input').then(items => {
        //     cy.get(items[0]).clear()
        //     cy.get(items[0]).type("tomsmith")
        //     cy.get(items[1]).clear()
        //     cy.get(items[1]).type("SuperSecretPassword!")
        // })

        // use .each
        cy.get("input").each((items, index)=>{
            cy.get(items).type('tomsmith')
        })

        cy.get("button[type='submit']").click()

    });
});