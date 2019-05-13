describe('Test StartingScreen', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('fill out form', ()=>{
        cy.get('[data-cy=player-1-name]').type("Brett Broďák");
        cy.get('[data-cy=player-1-hp]').type("{selectall}{backspace}15");
        cy.get('[data-cy=player-2-name]').type("Riviera Kid");
        cy.get('[data-cy=player-2-hp]').type("{selectall}{backspace}12");
        cy.contains('Start').click();
    });
});

describe('Test Counter', ()=>{
    it('counts player hp correctly', () => {
        for (let i = 0; i < 10; i++) {
            cy.get('[data-cy=inc-1]').click();
            cy.get('[data-cy=dec-2]').click();
        }
        for (let i = 0; i < 15; i++) {
            cy.get('[data-cy=inc-2]').click();
            cy.get('[data-cy=dec-1]').click();
        }
        cy.get('[data-cy=val-1]').should('have.text', '10');
        cy.get('[data-cy=val-2]').should('have.text', '17');
    });
});
