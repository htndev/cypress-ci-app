import About from './About';
import { mount } from '@cypress/react';

beforeEach(() => {
  mount(<About />);
});

it('find about text', () => {
  cy.findByText(/is about/i).should('exist');
});

it('build output', () => {
  const firstName = 'Oleksandr';
  const lastName = 'Vanilchuk';

  const output = `${firstName} ${lastName}`;

  cy.get('#firstName').type(firstName);
  cy.get('#lastName').type(lastName);

  cy.get('#submit').click();

  cy.get('#output').contains(output);
})
