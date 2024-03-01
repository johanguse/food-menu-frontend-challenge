import { useTicketStore } from '@stores/ticket';
import { formatNumberToCurrency } from 'src/lib/utils';

const TicketItems = () => {
  const { currentTicket } = useTicketStore();

  if (!currentTicket || Object.keys(currentTicket.selections).length === 0) {
    return null;
  }

  const renderTicketItems = () => {
    return Object.entries(currentTicket.selections).map(
      ([sectionName, options]) => (
        <div key={sectionName}>
          <h3>{sectionName}</h3>
          {Object.entries(options).map(([optionName, { quantity, price }]) => (
            <div key={optionName}>
              <p>
                {optionName}: {quantity} x {formatNumberToCurrency(price)}
              </p>
            </div>
          ))}
        </div>
      )
    );
  };

  return (
    <div className="fixed right-1 top-40 bg-red-50 p-4">
      <h2>Ticket Items</h2>
      {renderTicketItems()}
      /* show total the itens on ticket from all itens */
      <pre>{JSON.stringify(currentTicket.selections, null, 2)}</pre>
      <p>Name: {currentTicket.name}</p>
      <p>Initial Price: {formatNumberToCurrency(currentTicket.initialPrice)}</p>
      <p>Quantity: {currentTicket.quantity}</p>
      <p>Observation: {currentTicket.observation}</p>
      <p>Total: {formatNumberToCurrency(currentTicket.total)}</p>
    </div>
  );
};

export default TicketItems;
