import Button from './button';
import LoaderSpinner from '@assets/icons/loader_spinner.svg?react';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Button Component', () => {
  it('renders correctly with default props', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button', { name: 'Click me' })).toBeVisible();
    expect(screen.getByRole('button')).not.toHaveAttribute('disabled');
  });

  it('shows loader and disables button when loading', () => {
    render(<Button isLoading>Click me</Button>);
    expect(screen.getByRole('button')).toBeDisabled();
    expect(screen.getByRole('button')).toContainElement(
      screen.getByTestId('loader')
    );
  });

  it('displays left icon when provided', () => {
    render(
      <Button leftIcon={<LoaderSpinner className="size-8" />}>Click me</Button>
    );
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button.firstChild).toHaveClass(
      'inline-flex shrink-0 self-center -ml-1 mr-2'
    );
  });

  it('displays right icon when provided', () => {
    render(
      <Button rightIcon={<LoaderSpinner className="size-8" />}>Click me</Button>
    );
    const button = screen.getByRole('button', { name: 'Click me' });
    expect(button.lastChild).toHaveClass(
      'inline-flex shrink-0 self-center -mr-1 ml-2'
    );
  });

  it('applies button variant styles correctly', () => {
    const { rerender } = render(<Button variant="primary">Primary</Button>);
    expect(screen.getByRole('button', { name: 'Primary' })).toHaveClass(
      'text-center relative whitespace-nowrap align-middle inline-flex items-center justify-center select-none rounded-lg py-2 px-6'
    );

    rerender(<Button variant="secondary">Secondary</Button>);
    expect(screen.getByRole('button', { name: 'Secondary' })).toHaveClass(
      'text-center relative whitespace-nowrap align-middle inline-flex items-center justify-center select-none rounded-lg py-2 px-6'
    );
  });
});
