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
    /* @ts-expect-error Test tag without text props  */
    const { container } = render(<Tag />);
    expect(container).toBeEmptyDOMElement();
  });
});
