describe('Todo List', () => {
    beforeEach(() => { 
        cy.visit('/')
    });

    it('add task', () => {
        cy.get(':nth-child(3) > input').type('{enter}')
        cy.get(':nth-child(4) > input').type('task 4').should('have.value', 'task 4') 
    });

    it('delete task', () => {
        cy.get(':nth-child(3) > input').type('{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}{backspace}')
        cy.get(':nth-child(3) > input').should('not.have.value', 'task 3')
    });

    it('complete task', () => {
        cy.get(':nth-child(3) > .checkbox').click()
        cy.get('ul > :nth-child(3)').should('have.class', 'todo-is-completed')
    });

    it('uncomplete task', () => {
        cy.get('ul > :nth-child(1)').should('have.class', 'todo-is-completed')
        cy.get(':nth-child(1) > .checkbox').click()
        cy.get('ul > :nth-child(1)').should('not.have.class', 'todo-is-completed')
    });
});