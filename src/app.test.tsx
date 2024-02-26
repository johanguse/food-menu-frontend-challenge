import { App } from './app';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

describe('Component | App', () => {
  it('should render the app component', async () => {
    render(<App />);
    expect(screen.getByText('Ceviche Salmão')).toBeInTheDocument();
  });
});
