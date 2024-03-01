import Checkbox from '@components/inputs/checkbox';
import CounterComponent from '@components/inputs/counter';
import Radio from '@components/inputs/radio';
import Tag from '@components/ui/tag';
import { useTicketStore } from '@stores/ticket';

interface Option {
  label: string;
  value: string;
  price: number;
  isAddition?: boolean;
  discountPrice?: number;
  isChecked?: boolean;
  count?: number;
}

interface FieldsetComponentProps {
  legend: string;
  description: string;
  required?: boolean;
  type: 'RADIO' | 'CHECKBOX' | 'COUNTER';
  options: Option[];
}

export default function FieldsetComponent({
  legend,
  description,
  required,
  type,
  options,
}: FieldsetComponentProps) {
  const { currentTicket, updateSelection } = useTicketStore();

  const handleOptionChange = (
    type: FieldsetComponentProps['type'],
    sectionName: string,
    optionName: string,
    value: number,
    price: number
  ) => {
    updateSelection(type, sectionName, optionName, value, price);
  };

  const renderOptions = () => {
    switch (type) {
      case 'RADIO':
        return options.map((option) => {
          const isChecked =
            currentTicket &&
            currentTicket.selections &&
            currentTicket.selections[legend] &&
            currentTicket.selections[legend][option.value] &&
            currentTicket.selections[legend][option.value].quantity > 0;

          return (
            <Radio
              key={option.value}
              name={`${legend}Group`}
              label={option.label}
              value={option.value}
              isChecked={isChecked || false}
              onChange={() =>
                handleOptionChange(
                  'RADIO',
                  legend,
                  option.value,
                  1,
                  option.discountPrice || option.price
                )
              }
              price={option.price}
              discountPrice={option.discountPrice}
            />
          );
        });
      case 'CHECKBOX':
        return options.map((option) => {
          const isChecked =
            currentTicket &&
            currentTicket.selections &&
            currentTicket.selections[legend] &&
            currentTicket.selections[legend][option.value] &&
            currentTicket.selections[legend][option.value].quantity > 0;

          return (
            <Checkbox
              key={option.value}
              label={option.label}
              value={option.value}
              isChecked={isChecked || false}
              onChange={(e) =>
                handleOptionChange(
                  'CHECKBOX',
                  legend,
                  option.value,
                  e.target.checked ? 1 : 0,
                  option.price
                )
              }
              price={option.price}
            />
          );
        });
      case 'COUNTER':
        return options.map((option) => (
          <CounterComponent
            key={option.value}
            sectionName={legend}
            optionName={option.value}
            showTrashIcon={false}
            size="small"
            label={option.label}
            price={option.price}
            discountPrice={option.discountPrice}
            isAddition={option.isAddition}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <fieldset className="item-choose border-t-4 border-gray-100 px-5 py-6">
      <div className="container px-12">
        <div className="flex flex-row items-center justify-between gap-2 px-0">
          <div className="mb-5 flex flex-col">
            <legend className="text-16 font-bold">{legend}</legend>
            <small className="text-12 font-semibold text-gray-500">
              {description}
            </small>
          </div>
          {required && (
            <div className="place-self-start">
              <Tag text="obrigatório" />
            </div>
          )}
        </div>
        <div className="grid grid-cols-3 gap-20">{renderOptions()}</div>
      </div>
    </fieldset>
  );
}
