const DROPDOWN_SEL = "select[id='dropdown']"
describe('Dropdown hendling', () => {
    it('should be able to select dropdown option', () => {
        // Visit the page
        cy.visit("/dropdown")

        // Select by index | Select option 1
        cy.get(DROPDOWN_SEL).select(1);

        // Select by value | Select option 1
        cy.get(DROPDOWN_SEL).select("2");

        // select by visible text | Select option1
        cy.get(DROPDOWN_SEL).select("Option 1")

        // veryfy the selected option is now option
        cy.get("select option:selected").invoke("text").should("eq","Option 1")
    });
});