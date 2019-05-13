const name = "Riviera Kid";
const hp = '15';

describe('Test props propagation', ()=>{
    it('Visits localhost', ()=>{
        cy.visit('/');
    });
    it('fill out form', ()=>{
        cy.get('[data-cy=player-1-name]').type(name);
        cy.get('[data-cy=player-1-hp]').type(hp);
    });
    it('shows propagated props correctly', () => {
        cy.get('[data-cy=name-1]').should($el => {
            expect($el).to.contain(name)
        });
    });
});
