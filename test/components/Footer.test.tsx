import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import { Footer } from '../../src/components/Footer';

describe('Footer', () => {
  it('renders developer information', () => {
    render(<Footer language="en-US" />);
    expect(screen.getByText('Developed by')).toBeInTheDocument();
    expect(screen.getByText('Guilherme Branco Stracini')).toBeInTheDocument();
  });

  it('renders repository link', () => {
    render(<Footer language="en-US" />);
    expect(screen.getByText('Repository')).toBeInTheDocument();
    expect(screen.getByText('GitHub')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /github/i })).toHaveAttribute(
      'href',
      'https://github.com/ApiBR/catalog'
    );
  });

  it('renders developer image with correct dimensions', () => {
    render(<Footer language="en-US" />);
    const img = screen.getByAltText('Guilherme Branco Stracini');
    expect(img).toHaveClass('h-[44px]', 'w-[24px]');
  });
});