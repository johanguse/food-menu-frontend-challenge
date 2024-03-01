import PlusButtonComponent from '@components/inputs/plus-button';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('PlusButtonComponent', () => {
  it('calls increaseFunction when clicked and not disabled', () => {
    const increaseFunction = vi.fn();
    render(<PlusButtonComponent increaseFunction={increaseFunction} />);
    fireEvent.click(screen.getByTestId('plus-button'));
    expect(increaseFunction).toHaveBeenCalled();
  });

  it('does not call increaseFunction when clicked and disabled', () => {
    const increaseFunction = vi.fn();
    render(
      <PlusButtonComponent increaseFunction={increaseFunction} disabled />
    );
    fireEvent.click(screen.getByTestId('plus-button'));
    expect(increaseFunction).not.toHaveBeenCalled();
  });
});
