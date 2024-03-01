import HeaderItem from '@components/header-item';
import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { beforeEach, describe, expect, it, vi } from 'vitest';

vi.mock('@mocks/itens', () => ({
  data: {
    item: {
      name: 'Ceviche de salmão',
      description: 'salmão temperado com limão, cebola e pimenta',
      initialPrice: 19.9,
      image:
        'https://res.cloudinary.com/dvcywi3uf/image/upload/v1708968385/outros/fe-tests/food/main_dish_ceviche.jpg',
      imageAlt:
        'Ceviche de Salmão fresco com pedaços de salmão marinados, anéis de cebola roxa e cebolinha verde picada, temperado com limão, cebola e pimenta, servido em um prato branco.',
      imageTitle:
        'Ceviche de Salmão - um prato refrescante e cítrico perfeito como uma entrada leve.',
    },
  },
}));

vi.mock('@mocks/restaurant', () => ({
  data: {
    company: {
      name: 'Matsuri Concept',
      logo: 'https://res.cloudinary.com/dvcywi3uf/image/upload/v1708968385/outros/fe-tests/food/avatar_matsuri.jpg',
    },
  },
}));

vi.mock('@stores/ticket', () => ({
  useTicketStore: () => ({
    currentTicket: {
      name: 'Ceviche de salmão',
      initialPrice: 19.9,
      selections: {},
      total: 0,
    },
    total: 19.9,
  }),
}));

vi.mock('src/lib/utils', () => ({
  formatNumberToCurrency: (number: number) => `R$ ${number.toFixed(2)}`,
}));

describe('HeaderItem Component', () => {
  beforeEach(() => {
    render(<HeaderItem />);
  });
  it('renders the restaurant logo and name', () => {
    expect(screen.getByAltText('Matsuri Concept')).toBeInTheDocument();
    expect(screen.getByText('Matsuri Concept')).toBeInTheDocument();
  });

  it('renders the item name, description, and initial price', () => {
    expect(screen.getByText('Ceviche de salmão')).toBeInTheDocument();
    expect(
      screen.getByText('salmão temperado com limão, cebola e pimenta')
    ).toBeInTheDocument();
    expect(screen.getByText('R$ 19.90')).toBeInTheDocument();
  });

  it('renders the item image with correct attributes', () => {
    const image = screen.getByAltText(
      'Ceviche de Salmão fresco com pedaços de salmão marinados, anéis de cebola roxa e cebolinha verde picada, temperado com limão, cebola e pimenta, servido em um prato branco.'
    );
    expect(image).toHaveAttribute(
      'src',
      'https://res.cloudinary.com/dvcywi3uf/image/upload/v1708968385/outros/fe-tests/food/main_dish_ceviche.jpg'
    );
    expect(image).toHaveAttribute(
      'title',
      'Ceviche de Salmão - um prato refrescante e cítrico perfeito como uma entrada leve.'
    );
  });
});
