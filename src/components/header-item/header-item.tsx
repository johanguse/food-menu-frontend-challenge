import AddMainDish from '@components/inputs/add-main-dish';
import { data as mockDataDish } from '@mocks/itens';
import { data as mockDataRestaurant } from '@mocks/restaurant';
import { useTicketStore } from '@stores/ticket';
import { formatNumberToCurrency } from 'src/lib/utils';

export default function HeaderItem() {
  const { currentTicket, total } = useTicketStore((state) => ({
    currentTicket: state.currentTicket,
    total: state.currentTicket?.total || 0,
  }));

  return (
    <div className="mx-4 bg-white pt-20">
      <div className="container mx-auto">
        <div className="item-header py-7">
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
                  {currentTicket?.name}
                </h2>
                <div className="mb-2 flex flex-row items-center gap-2">
                  <span className="text-16 font-bold text-gray-500">
                    a partir de
                  </span>
                  <span className="text-20 font-extrabold text-primary">
                    {formatNumberToCurrency(currentTicket?.initialPrice)}
                  </span>
                </div>
                <p className="text-16 font-normal text-gray-500">
                  {mockDataDish.item.description}
                </p>
              </div>
              <div className="flex w-96 flex-row items-start justify-between">
                <div className="flex flex-col">
                  <span className="mb-1 text-16 font-semibold text-gray-700">
                    quantos?
                  </span>
                  {!(
                    !currentTicket ||
                    Object.keys(currentTicket?.selections ?? {}).length === 0 ||
                    currentTicket?.total === 0
                  ) && (
                    <p className="flex flex-row items-center gap-1 text-14">
                      <span className="text-gray-500">total:</span>
                      <span className="font-bold">
                        {formatNumberToCurrency(total)}
                      </span>
                    </p>
                  )}
                </div>
                <div className="self-center">
                  <AddMainDish />
                </div>
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
