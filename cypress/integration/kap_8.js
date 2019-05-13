describe('Test StartingScreen', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('fill out form', ()=>{
        cy.url().should('eq', "http://localhost:3000/");
        cy.get('[data-cy=player-1-name]').type("Brett Broďák");
        cy.get('[data-cy=player-1-hp]').type("{selectall}{backspace}15");
        cy.get('[data-cy=player-2-name]').type("Riviera Kid");
        cy.get('[data-cy=player-2-hp]').type("{selectall}{backspace}12");
        cy.contains('Start').click();
    });
    it('should redirect to gameBoard', () => {
        cy.url().should('contain', '/board')
    });
});
