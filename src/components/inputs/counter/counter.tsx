import TrashIcon from '@assets/icons/trash.svg';
import MinusButtonComponent from '@components/inputs/minus-button';
import PlusButtonComponent from '@components/inputs/plus-button';
import { useTicketStore } from '@stores/ticket';
import { formatNumberToCurrency } from 'src/lib/utils';

interface CounterComponentProps {
  sectionName: string;
  optionName: string;
  showTrashIcon: boolean;
  size: 'small' | 'large';
  label?: string;
  price: number;
  discountPrice?: number;
  isAddition?: boolean;
}

export default function Counter({
  sectionName,
  optionName,
  showTrashIcon,
  size,
  label,
  price,
  discountPrice,
  isAddition,
}: CounterComponentProps) {
  const { currentTicket, updateSelection } = useTicketStore();
  const counter =
    currentTicket?.selections[sectionName]?.[optionName]?.quantity || 0;
  const itemPrice =
    currentTicket?.selections[sectionName]?.[optionName]?.price || 0;

  const increaseFunction = () => {
    updateSelection(
      'COUNTER',
      sectionName,
      optionName,
      counter + 1,
      discountPrice ? discountPrice : price
    );
  };

  const decreaseFunction = () => {
    if (counter === 0) return;
    updateSelection(
      'COUNTER',
      sectionName,
      optionName,
      counter - 1,
      discountPrice ? discountPrice : price
    );
  };

  const textSizeClass = size === 'small' ? 'text-14' : 'text-16';
  const iconSizeClass = size === 'small' ? 'size-6' : 'size-8';

  const getFormattedPrice = () => {
    let calculatedPrice;

    switch (counter) {
      case 0:
        calculatedPrice = price;
        break;
      case 1:
        calculatedPrice = price * 2;
        break;
      case 2:
        calculatedPrice = price + itemPrice * 2;
        break;
      default:
        calculatedPrice = price * (counter + 1);
        break;
    }

    return formatNumberToCurrency(calculatedPrice);
  };

  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <div className="flex items-center gap-5">
        {(!label && counter === 1) || (!showTrashIcon && !label) ? (
          <button onClick={decreaseFunction} className="flex cursor-pointer">
            <img src={TrashIcon} alt="trash icon" className={iconSizeClass} />
          </button>
        ) : (
          <MinusButtonComponent
            disabled={counter === 0}
            decreaseFunction={decreaseFunction}
            size={size}
          />
        )}
        <span className={`${textSizeClass} font-bold`}>{counter}</span>
        <PlusButtonComponent increaseFunction={increaseFunction} size={size} />
      </div>
      {label && (
        <span className="ml-1 mr-auto text-14 text-gray-500">{label}</span>
      )}

      {price !== undefined && label && (
        <span className="text-14 font-semibold text-primary">
          {isAddition ? '+' : ''} {getFormattedPrice()}
        </span>
      )}
    </div>
  );
}
