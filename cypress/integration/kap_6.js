describe('Test multi-components', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('Fill out form', ()=>{
        cy.get('[data-cy=player-1-name]').type("Brett Broďák");
        cy.get('[data-cy=player-1-hp]').clear().type("15");
        cy.get('[data-cy=player-2-name]').type("Riviera Kid");
        cy.get('[data-cy=player-2-hp]').clear().type("12");
        cy.contains('Start').click();
    });
    it('Show counters', () => {
        cy.get('[data-cy=val-1]').should('be.visible');
        cy.get('[data-cy=val-2]').should('be.visible');
    });
    it('Show inverted player', () => {
        cy.get('[data-cy=player-2]').should('not.have.css', 'transform')
    });
});
