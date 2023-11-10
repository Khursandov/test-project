describe('Main Page', () => {
  it('should display the title', () => {
    cy.visit('http://localhost:5173/')
    cy.get('div').should('contain', 'Welcome to My Vue App')
  })
})
