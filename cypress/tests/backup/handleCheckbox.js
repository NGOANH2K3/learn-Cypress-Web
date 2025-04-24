
describe('handling checkbox', () => {
    it('should be able to select/unselect a checkbox', () => {
        cy.visit("/checkboxes")
        //try to unselect to second checkbox
        cy.get("[type='checkbox']").eq(1).click()
        // varify all checkboxes are unselected
        cy.get("[type='checkbox']").filter(":not([checked])").should("have.length",2)
        // loop over all checkbox again then select all
        cy.get("[type='checkbox']").filter(":not([checked])").then(items => {
            cy.get(items).click({multiple:true})
        })
    });
});