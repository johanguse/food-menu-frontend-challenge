import Footer from './footer';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it } from 'vitest';

describe('Footer Component', () => {
  beforeEach(() => {
    render(<Footer />);
  });
  it('renders the love message correctly', () => {
    expect(screen.getByText('feito com 💜 em maringá-PR')).toBeInTheDocument();
  });

  it('renders the company details correctly', () => {
    expect(
      screen.getByText(
        'aiqfome.com © 2007-2023 aiqfome LTDA . CNPJ: 09.186.786/0001-58'
      )
    ).toBeInTheDocument();
  });
});
