import { useTicketStore } from '@stores/ticket';

const TicketItems = () => {
  const { currentTicket } = useTicketStore();

  if (!currentTicket || Object.keys(currentTicket.selections).length === 0) {
    return <p>No items in the ticket.</p>;
  }

  const renderTicketItems = () => {
    return Object.entries(currentTicket.selections).map(
      ([sectionName, options]) => (
        <div key={sectionName}>
          <h3>{sectionName}</h3>
          {Object.entries(options).map(([optionName, { quantity, price }]) => (
            <div key={optionName}>
              <p>
                {optionName}: {quantity} x ${price.toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      )
    );
  };

  return (
    <div className="fixed top-40 bg-red-50">
      <h2>Ticket Items</h2>
      {renderTicketItems()}
      /* show total the itens on ticket from all itens */
      <p>Quantity: {currentTicket.quantity}</p>
      <p>Observation: {currentTicket.observation}</p>
      <p>Total: ${currentTicket.total.toFixed(2)}</p>
    </div>
  );
};

export default TicketItems;
