import { render, screen } from '@testing-library/react';
import App from './App';

test('Testing form validation Lab2', () => {
  render(<App />);
  const linkElement = screen.getByText(/Form Validation! Lab2/i);
  expect(linkElement).toBeInTheDocument();
});
