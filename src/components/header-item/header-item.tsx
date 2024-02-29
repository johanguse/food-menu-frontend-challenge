import mockDataDish from '../../../__mock__/item.json';
import mockDataRestaurant from '../../../__mock__/restaurant.json';
import Button from '@components/button';
import CounterComponent from '@components/inputs/counter';
import { useTicketStore } from '@stores/ticket';
import { formatNumberToCurrency } from 'src/lib/utils';

export default function HeaderItem() {
  const { addItem, currentTicket } = useTicketStore((state) => ({
    addItem: state.addItem,
    currentTicket: state.currentTicket,
    total: state.currentTicket?.total || 0,
  }));

  const handleAddItem = () => {
    console.log('handleAddItem');
    addItem(
      mockDataDish.item.sections[0].name,
      mockDataDish.item.sections[0].options[0].name,
      mockDataDish.item.initialPrice,
      1
    );
  };
  const total = useTicketStore((state) => state.currentTicket?.total || 0);

  return (
    <div className="w-full bg-white pt-20">
      <div className="container mx-auto">
        <div className="item-header py-6">
          <div className="mb-6 flex flex-row items-center gap-2 px-0">
            <img
              src={mockDataRestaurant.company.logo}
              alt={mockDataRestaurant.company.name}
              width={48}
              height={48}
              className="size-12 rounded-sm outline outline-1 -outline-offset-1 outline-white"
            />
            <h1 className="text-24 font-bold">
              {mockDataRestaurant.company.name}
            </h1>
          </div>
          <div className="mx-12 flex flex-row items-stretch justify-between bg-white">
            <div className="flex flex-1 flex-col items-start justify-between pb-4">
              <div>
                <h2 className="text-24 font-bold text-gray-700">
                  {mockDataDish.item.name}
                </h2>
                <div className="flex flex-row items-center gap-2">
                  <span className="text-16 font-bold text-gray-500">
                    a partir de
                  </span>
                  <span className="text-20 font-extrabold text-primary">
                    {formatNumberToCurrency(mockDataDish.item.initialPrice)}
                  </span>
                </div>
                <p className="text-16 font-semibold text-gray-500">
                  {mockDataDish.item.description}
                </p>
              </div>
              <div className="flex w-80 flex-row items-start justify-between">
                <div className="flex flex-col">
                  <span className="text-16 font-bold text-gray-700">
                    quantos?
                  </span>
                  {!(
                    !currentTicket ||
                    Object.keys(currentTicket?.selections ?? {}).length === 0 ||
                    currentTicket?.total === 0
                  ) && (
                    <p className="flex flex-row items-center gap-1 text-14">
                      total:
                      <span className="font-extrabold">
                        {formatNumberToCurrency(total)}
                      </span>
                    </p>
                  )}
                </div>
                {!currentTicket ||
                Object.keys(currentTicket?.selections ?? {}).length === 0 ||
                currentTicket?.total === 0 ? (
                  <Button
                    buttonStyle={{ variant: 'primary' }}
                    onClick={handleAddItem}>
                    adicionar
                  </Button>
                ) : (
                  <CounterComponent
                    sectionName={mockDataDish.item.sections[0].name}
                    optionName={mockDataDish.item.name}
                    price={mockDataDish.item.initialPrice}
                    size="large"
                    showTrashIcon
                  />
                )}
              </div>
            </div>
            <div>
              <img
                src={mockDataDish.item.image}
                alt={mockDataDish.item.imageAlt}
                title={mockDataDish.item.imageTitle}
                className="rounded-xl border border-white"
                width={390}
                height={195}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
