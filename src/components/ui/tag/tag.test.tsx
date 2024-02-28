import Tag from './tag';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Tag Component', () => {
  it('renders with text', () => {
    const text = 'Sample Tag';
    render(<Tag text={text} />);
    expect(screen.getByText(text)).toBeInTheDocument();
  });

  it('does not render without text', () => {
    const { container } = render(<Tag />);
    expect(container).toBeEmptyDOMElement();
  });

  it('applies the primary variant class correctly', () => {
    const text = 'Primary Tag';
    render(<Tag text={text} tagVariant="primary" />);
    expect(screen.getByText(text)).toHaveClass(
      'text-center relative whitespace-nowrap align-middle inline-flex items-center justify-center select-none rounded px-2 py-1 bg-gray-700 text-white text-xs font-semibold'
    );
  });
});
