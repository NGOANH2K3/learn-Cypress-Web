describe('Element interaction', () => {
    it('should be able to complete the form', () => {
        cy.visit("/login")


        // find username by id then input the text
        cy.get("#username").type("tomsmith")

        // find password by attribute name then input the text
        cy.get("[name='password']").type("SuperSecretPassword!")

        // find login btn by attribute and tag name then click
        cy.get("button[type='submit']").click()
        // DEBUG purpose only  (chỉ test lúc học và không đc khi làm thực tế)
    });
});