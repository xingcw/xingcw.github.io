// jest-dom adds custom jest matchers for asserting on DOM nodes.
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';

import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Academic from '../pages/Academic';
import NotFound from '../pages/NotFound';

const renderWithRouter = (ui, { route = '/' } = {}) => {
  window.history.pushState({}, 'Test page', route);
  return render(ui, { wrapper: BrowserRouter });
};

test('Renders 404 Page Component', () => {
  renderWithRouter(<NotFound />);
  expect(screen.getByText(/Page Not Found/i)).toBeInTheDocument();
});

test('Renders the academic home page', () => {
  window.scrollTo = () => {};
  renderWithRouter(<Academic />, { route: '/' });
  expect(screen.getByTestId('heading')).toHaveTextContent('Chunwei Xing');
});
