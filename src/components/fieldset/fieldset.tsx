import Checkbox from '@components/inputs/checkbox';
import CounterComponent from '@components/inputs/counter';
import Radio from '@components/inputs/radio';
import Tag from '@components/ui/tag';
import { useTicketStore } from '@stores/ticket';

interface Option {
  label: string;
  value: string;
  price: number;
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

  const handleOptionChange = (type, sectionName, optionName, value, price) => {
    updateSelection(type, sectionName, optionName, value, price);
  };

  const handleCounterChange = (value: string, count: number, price: number) => {
    updateSelection('COUNTER', legend, value, count, price);
  };

  const renderOptions = () => {
    switch (type) {
      case 'RADIO':
        return options.map((option) => {
          const isChecked =
            currentTicket?.selections[legend]?.[option.value]?.quantity > 0;
          const isDiscountPrice = option.discountPrice ? true : false;
          return (
            <Radio
              key={option.value}
              name={`${legend}Group`}
              label={option.label}
              value={option.value}
              isChecked={isChecked}
              onChange={() =>
                handleOptionChange(
                  'RADIO',
                  legend,
                  option.value,
                  1,
                  option.price
                )
              }
              price={option.price}
              isdiscountPrice={isDiscountPrice}
            />
          );
        });
      case 'CHECKBOX':
        return options.map((option) => {
          const isChecked =
            currentTicket?.selections[legend]?.[option.value]?.quantity > 0;
          return (
            <Checkbox
              key={option.value}
              label={option.label}
              value={option.value}
              isChecked={isChecked}
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
            counter={option.count || 0}
            increaseFunction={() =>
              handleCounterChange(
                option.value,
                (option.count || 0) + 1,
                option.price
              )
            }
            decreaseFunction={() =>
              handleCounterChange(
                option.value,
                (option.count || 0) - 1,
                option.price
              )
            }
            showTrashIcon={option.count === 1}
            size="small"
            label={option.label}
            price={option.price}
          />
        ));
      default:
        return null;
    }
  };

  return (
    <fieldset className="item-choose border-t-4 border-gray-300 px-5 py-14">
      <div className="container px-12">
        <div className="flex flex-row items-center justify-between gap-2 px-0">
          <div className="mb-6 flex flex-col">
            <legend className="text-16 font-bold">{legend}</legend>
            <small className="text-12">{description}</small>
          </div>
          {required && <Tag text="obrigatório" />}
        </div>
        <div className="grid grid-cols-3 gap-20">{renderOptions()}</div>
      </div>
    </fieldset>
  );
}
