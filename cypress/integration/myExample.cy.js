// This is a basic Cypress test script
describe('Cypress Website Test', () => {
    it('should visit the Cypress website', () => {
      // Visit the Cypress website
      cy.visit('https://www.cypress.io/');
  
      // Check for the presence of the "Get Started" button
      cy.contains('Get  Started').should('be.visible');
    });
  });