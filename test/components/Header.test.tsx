import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, it, expect, vi } from 'vitest';
import { Header } from '../../src/components/Header';

describe('Header', () => {
  it('renders logo and title', () => {
    render(<Header language="pt-BR" onLanguageChange={() => {}} />);
    expect(screen.getByAltText('API BR Logo')).toBeInTheDocument();
    expect(screen.getByText('API BR - Catálogo')).toBeInTheDocument();
  });

  it('renders language selector', () => {
    render(<Header language="pt-BR" onLanguageChange={() => {}} />);
    expect(screen.getByRole('combobox')).toBeInTheDocument();
  });

  it('calls onLanguageChange when language is changed', async () => {
    const onLanguageChange = vi.fn();
    render(<Header language="pt-BR" onLanguageChange={onLanguageChange} />);
    
    const select = screen.getByRole('combobox');
    await userEvent.selectOptions(select, 'en-US');
    
    expect(onLanguageChange).toHaveBeenCalledWith('en-US');
  });
});