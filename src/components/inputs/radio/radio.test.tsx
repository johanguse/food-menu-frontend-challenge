import React from 'react';

import Radio from '@components/inputs/radio';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@assets/icons/radio_active.svg', () => {
  return {
    default: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} data-testid="radio-active-icon" />
    ),
  };
});

vi.mock('@assets/icons/radio_disabled.svg', () => {
  return {
    default: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} data-testid="radio-inactive-icon" />
    ),
  };
});

vi.mock('@assets/icons/cifra.svg', () => {
  return {
    default: (props: React.SVGProps<SVGSVGElement>) => (
      <svg {...props} data-testid="cifra-icon" />
    ),
  };
});

vi.mock('src/lib/utils', () => ({
  formatNumberToCurrency: (number: number) => `R$ ${number.toFixed(2)}`,
}));

describe('Radio Component', () => {
  it('renders with active icon when checked', () => {
    render(
      <Radio
        name="test"
        label="Test Item"
        price={10}
        isChecked={true}
        onChange={() => {}}
        value="test"
      />
    );
    expect(screen.getByTestId('radio-active-icon')).toBeInTheDocument();
  });

  it('renders with inactive icon when not checked', () => {
    render(
      <Radio
        name="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={() => {}}
        value="test"
      />
    );
    expect(screen.getByTestId('radio-inactive-icon')).toBeInTheDocument();
  });

  it('displays the correct label and price', () => {
    render(
      <Radio
        name="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={() => {}}
        value="test"
      />
    );
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('R$ 10.00')).toBeInTheDocument();
  });

  it('calls onChange when radio is clicked', () => {
    const handleChange = vi.fn();
    render(
      <Radio
        name="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={handleChange}
        value="test"
      />
    );
    fireEvent.click(screen.getByLabelText('Test Item'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('displays discount price when available', () => {
    render(
      <Radio
        name="test"
        label="Test Item"
        price={10}
        discountPrice={8}
        isChecked={false}
        onChange={() => {}}
        value="test"
      />
    );
    expect(screen.getByText('R$ 8.00')).toBeInTheDocument();
    expect(screen.getByText('de R$ 10.00 por')).toBeInTheDocument();
    expect(screen.getByTestId('cifra-icon')).toBeInTheDocument();
  });
});
