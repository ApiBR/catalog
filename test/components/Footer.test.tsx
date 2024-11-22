import { render, screen } from '@testing-library/react';
import Footer from '../../src/components/Footer';

describe('Footer Component', () => {
  it('renders the developer information', () => {
    render(<Footer />);
    expect(screen.getByText(/Developed by/)).toBeInTheDocument();
    expect(screen.getByAltText('Guilherme Branco Stracini')).toBeInTheDocument();
    expect(
      screen.getByText('Guilherme Branco Stracini').closest('a')
    ).toHaveAttribute('href', expect.stringContaining('https://guibranco.github.io'));
  });

  it('renders the GitHub repository link', () => {
    render(<Footer />);
    const githubLink = screen.getAllByText('GitHub')[1].closest('a');
    expect(githubLink).toHaveAttribute(
      'href',
      'https://github.com/ApiBR/catalog'
    );
    expect(screen.getByTitle('GitHub')).toBeInTheDocument();
  });

  it('renders the footer with appropriate content', () => {
    render(<Footer />);
    const footerElement = screen.getByRole('contentinfo');
    expect(footerElement).toBeInTheDocument();
    expect(footerElement).toHaveTextContent('Developed by');
  });
});
