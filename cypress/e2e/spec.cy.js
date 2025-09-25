describe('User flow: register, login, account', () => {
  const username = `testuser3_${Date.now()}`;
  const email = `test_${Date.now()}@example.com`;
  const password = 'TestPassword123!';

  it('registers a new account', () => {
    cy.visit('/register');
    cy.intercept('GET', '/isloggedin').as('isLoggedIn');
    cy.wait('@isLoggedIn');
    cy.get('[data-cy="form-register-username"]').type(username);
    cy.get('[data-cy="form-register-email"]').type(email);
    cy.get('[data-cy="form-register-password"]').type(password);
    cy.get('[data-cy="form-register-repeat-password"]').type(password);
    cy.get('input[type="submit"],button[type="submit"]').click();
    cy.get('[data-cy="form-register-success-link"]', { timeout: 10000 }).should('be.visible');
  });

  it('logs in with the new account', () => {
    cy.visit('/login');
    cy.intercept('GET', '/isloggedin').as('isLoggedIn');
    cy.wait('@isLoggedIn');
    cy.get('[data-cy="form-login-username"]').type(username);
    cy.get('[data-cy="form-login-password"]').type(password);
    cy.get('input[type="submit"],button[type="submit"]').click();
  });

  it('goes to My Account page', () => {
    cy.visit('/account');
    cy.contains('Account settings').should('exist');
    cy.get('[data-cy="form-account-username"]').should('exist')
    cy.get('[data-cy="form-account-email"]').should('exist')
    cy.get('[data-cy="form-account-password"]').should('exist');
    cy.get('[data-cy="form-account-repeat-password"]').should('exist');
    cy.get('[data-cy="form-account-save-button"]').should('exist');
  });
});