const currencyFormatter = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
});

export const formatNumberToCurrency = (
  number: number | undefined
): string | null => {
  if (typeof number !== 'number' || number === 0) {
    return null;
  }

  return currencyFormatter.format(number);
};

interface TicketItem {
  price: number;
  quantity?: number;
}

interface TicketSelection {
  [key: string]: { [key: string]: TicketItem };
}

export const calculateTotalPrice = (selections: TicketSelection) => {
  let total = 0;
  Object.values(selections).forEach((section) => {
    Object.values(section).forEach((item: TicketItem) => {
      total += item.price * (item.quantity ?? 1);
    });
  });
  return total;
};
