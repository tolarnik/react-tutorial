describe('Test single form', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('Form exists', ()=>{
        cy.get('[data-cy=player-1-name]').should('be.visible');
        cy.get('[data-cy=player-1-hp]').should('be.visible');
    });
});
