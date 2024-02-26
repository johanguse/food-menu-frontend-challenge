import Header from './header';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Header Component', () => {
  beforeEach(() => {
    render(<Header />);
  });
  it('renders correctly', () => {
    expect(screen.getByAltText('Company Logo')).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText('busque pela loja ou culinária')
    ).toBeInTheDocument();
    expect(
      screen.getByRole('button', { name: 'ver ticket' })
    ).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'entrar' })).toBeInTheDocument();
  });

  it('displays the address correctly', () => {
    expect(screen.getByText('Rua Mandaguari, 198')).toBeInTheDocument();
  });

  it('contains the search icon', () => {
    expect(screen.getByAltText('Search Icon')).toBeInTheDocument();
  });

  it('displays correct text for buttons', () => {
    expect(screen.getByText('ver ticket')).toBeVisible();
    expect(screen.getByText('entrar')).toBeVisible();
  });

  it('checks for location information presence', () => {
    expect(screen.getByText('entregando em')).toBeVisible();
  });
});
