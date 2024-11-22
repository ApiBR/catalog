import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import App from './App';

describe('App Component', () => {
  it('renders the Header component', () => {
    render(<App />);
    const headerElement = screen.getByText(/API BR - Catalog/i);
    expect(headerElement).toBeInTheDocument();
  });

  it('renders the ProjectGrid component with projects', () => {
    render(<App />);
    const projectTitle = screen.getByText(/Sports Agenda/i);
    expect(projectTitle).toBeInTheDocument();
  });

  it('renders the Footer component', () => {
    render(<App />);
    const footerElement = screen.getByText(/developed by/i);
    expect(footerElement).toBeInTheDocument();
  });
});
