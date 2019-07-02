describe('Todo List', () => {
    beforeEach(() => { 
        cy.visit('/')
    });

    it('add task', () => {
        cy.get(':nth-child(3) > input').type('{enter}')
        cy.get(':nth-child(4) > input').type('task 4').should('have.value', 'task 4') 
    });
});