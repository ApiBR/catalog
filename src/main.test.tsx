import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the App component correctly', () => {
    render(<App />);
    // Check if a text from the App or components is in the document
    expect(screen.getByText(/API BR - Catalog/i)).toBeInTheDocument();
  });
});
