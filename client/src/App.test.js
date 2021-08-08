import { render, screen } from '@testing-library/react';
import App from './App';

test('renders a link to the home page', () => {
  render(<App />);
  const linkElement = screen.getByText(/Titanic/i);
  expect(linkElement).toBeInTheDocument();
});
