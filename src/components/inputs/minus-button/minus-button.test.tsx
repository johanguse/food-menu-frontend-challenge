import MinusButtonComponent from '@components/inputs/minus-button';
import '@testing-library/jest-dom';
import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

describe('MinusButtonComponent', () => {
  it('calls decreaseFunction when clicked and not disabled', () => {
    const decreaseFunction = vi.fn();
    render(<MinusButtonComponent decreaseFunction={decreaseFunction} />);
    fireEvent.click(screen.getByTestId('minus-button'));
    expect(decreaseFunction).toHaveBeenCalled();
  });

  it('does not call decreaseFunction when clicked and disabled', () => {
    const decreaseFunction = vi.fn();
    render(
      <MinusButtonComponent decreaseFunction={decreaseFunction} disabled />
    );
    fireEvent.click(screen.getByTestId('minus-button'));
    expect(decreaseFunction).not.toHaveBeenCalled();
  });
});
