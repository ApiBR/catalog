import { render, screen } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
  it('renders the API BR logo and title', () => {
    render(<Header />);
    expect(screen.getByAltText('API BR Logo')).toBeInTheDocument();
    expect(screen.getByText('API BR - Catalog')).toBeInTheDocument();
  });
});
