describe("Build a salad", () => {
    it("should submit name", () => {
        cy.visit("localhost:5173")
        cy.get('[data-cy="name-form"] input').type("Mike")
        cy.get('[data-cy="name-submit"]').click()
    })
})