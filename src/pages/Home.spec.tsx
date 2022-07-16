import { mount } from '@cypress/react';
import Home from './Home';

it('renders learn react link', () => {
  mount(<Home />);

  // Without testing-library
  // cy.get('a').should('exist');

  // With testing-library
  cy.findByText(/learn react/i).should('exist');
});
