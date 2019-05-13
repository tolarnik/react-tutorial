describe('Test multi-components', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('shows form', () => {
        cy.get('[data-cy=player-1-name]').should('be.visible');
        cy.get('[data-cy=player-1-name]').should('be.visible');
    });
    it('does not show counter', () => {
        cy.get('[data-cy=val-1]').should('not.be.visible');
        cy.get('[data-cy=inc-1]').should('not.be.visible');
        cy.get('[data-cy=dec-1]').should('not.be.visible');
    });
    it('fill out form', ()=>{
        cy.get('[data-cy=player-1-name]').type("Brett Broďák");
        cy.get('[data-cy=player-1-hp]').clear().type("15");
        cy.get('button').should('be.visible').and('have.length', 1).click();
    });
    it('shows counters', () => {
        cy.get('[data-cy=val-1]').should('be.visible');
        cy.get('[data-cy=inc-1]').should('be.visible');
        cy.get('[data-cy=dec-1]').should('be.visible');
    });
    it('counts player hp correctly', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy=inc-1]').click();
        }
        for (let i = 0; i < 15; i++) {
            cy.get('[data-cy=dec-1]').click();
        }
        cy.get('[data-cy=val-1]').should('have.text', '10');
    });
});
