describe('Test Counter', () => {
    before( () => {
        cy.visit('/')
    });
    it('displays counter with increment and decrement buttons', () => {
        cy.get('[data-cy=inc-1]').should('be.visible');
        cy.get('[data-cy=dec-1]').should('be.visible');
    });
    it('counts player hp correctly', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy=inc-1]').click();
        }
        for (let i = 1; i < 10; i++) {
            cy.get('[data-cy=dec-1]').click();
        }
        cy.get('[data-cy=val-1]').should('have.text', '1');
    });
});
