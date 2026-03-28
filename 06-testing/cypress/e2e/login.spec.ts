describe('Login specs', () => {
  it('visit the login page', () => {
    // Arrange

    // Act
    cy.visit('/');

    // Assert
  });

  it('textbox should receive focus when clicked', () => {
    // Arrange

    // Act
    cy.visit('/');
    cy.findByRole('textbox').click();

    // Assert
    cy.findByRole('textbox').should('have.focus');
  });

  it('should show an alert with a message when type invalid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    cy.on('window:alert', cy.stub().as('alertStub'));

    // Act
    cy.visit('/');
    cy.get('input[type="text"]').as('userInput');
    cy.get('input[type="password"]').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.get('.MuiSnackbar-root', { timeout: 10000 }).should('be.visible');
    cy.get('.MuiSnackbarContent-message').should(
      'contain.text',
      'Usuario y/o password no válidos'
    );
    cy.clock().then((clock) => {
      clock.restore();
    });
  });

  it('should navigate to project tracker when type valid credentials', () => {
    // Arrange
    const user = 'admin';
    const password = 'test';

    // Act
    cy.visit('/');
    cy.get('input[type="text"]').as('userInput');
    cy.get('input[type="password"]').as('passwordInput');

    cy.get('@userInput').type(user);
    cy.get('@passwordInput').type(password);
    cy.findByRole('button', { name: 'Login' }).click();

    // Assert
    cy.url().should('equal', 'http://localhost:5173/#/submodule-list');
    cy.location('hash').should('equal', '#/submodule-list');
  });
});
