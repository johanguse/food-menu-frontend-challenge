import Checkbox from '@components/inputs/checkbox';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

vi.mock('@assets/icons/checkbox_active.svg', () => {
  const MockCheckboxActive: React.FC<React.SVGProps<SVGSVGElement>> = (
    props
  ) => <svg {...props} data-testid="checkbox-active" />;
  return MockCheckboxActive;
});

vi.mock('@assets/icons/checkbox_disabled.svg', () => {
  const MockCheckboxInactive: React.FC<React.SVGProps<SVGSVGElement>> = (
    props
  ) => <svg {...props} data-testid="checkbox-inactive" />;
  return MockCheckboxInactive;
});
vi.mock('src/lib/utils', () => ({
  formatNumberToCurrency: (number: number) => `R$ ${number.toFixed(2)}`,
}));

describe('Checkbox Component', () => {
  it('renders with inactive icon when not checked', () => {
    render(
      <Checkbox
        value="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={() => {}}
      />
    );
    expect(screen.getByTestId('checkbox-inactive')).toBeInTheDocument();
    expect(screen.queryByTestId('checkbox-active')).not.toBeInTheDocument();
  });

  it('renders with active icon when checked', () => {
    render(
      <Checkbox
        value="test"
        label="Test Item"
        price={10}
        isChecked={true}
        onChange={() => {}}
      />
    );
    expect(screen.getByTestId('checkbox-active')).toBeInTheDocument();
    expect(screen.queryByTestId('checkbox-inactive')).not.toBeInTheDocument();
  });

  it('displays the correct label and price', () => {
    render(
      <Checkbox
        value="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Test Item')).toBeInTheDocument();
    expect(screen.getByText('R$ 10.00')).toBeInTheDocument();
  });

  it('calls onChange when clicked', () => {
    const handleChange = vi.fn();
    render(
      <Checkbox
        value="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={handleChange}
      />
    );
    fireEvent.click(screen.getByLabelText('Test Item'));
    expect(handleChange).toHaveBeenCalled();
  });

  it('changes style when checked', () => {
    const { rerender } = render(
      <Checkbox
        value="test"
        label="Test Item"
        price={10}
        isChecked={false}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Test Item')).toHaveClass(
      'text-gray-500 font-normal'
    );
    rerender(
      <Checkbox
        value="test"
        label="Test Item"
        price={10}
        isChecked={true}
        onChange={() => {}}
      />
    );
    expect(screen.getByText('Test Item')).toHaveClass(
      'text-gray-500 font-bold'
    );
  });
});
