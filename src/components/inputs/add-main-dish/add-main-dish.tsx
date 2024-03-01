import TrashIcon from '@assets/icons/trash.svg';
import Button from '@components/button';
import MinusButtonComponent from '@components/inputs/minus-button';
import PlusButtonComponent from '@components/inputs/plus-button';
import { useTicketStore } from '@stores/ticket';

export default function AddMainDish() {
  const { updateMainItemQuantity, addMainItem, currentItem, currentTicket } =
    useTicketStore();

  // Assume the first section is the main dish section
  const mainDishSectionName = Object.keys(currentTicket.selections)[0] || '';
  const mainDishOptionName =
    Object.keys(currentTicket.selections[mainDishSectionName] || {})[0] || '';
  const counter =
    currentTicket.selections[mainDishSectionName]?.[mainDishOptionName]
      ?.quantity || 0;

  const handleAddItem = () => {
    if (currentItem && currentItem.sections.length > 0) {
      const firstSection = currentItem.sections[0];
      const firstOption = firstSection.options[0];
      addMainItem(
        firstSection.name,
        firstOption.name,
        firstOption.price || 0,
        1
      );
    }
  };

  const increaseFunction = () => {
    updateMainItemQuantity(
      mainDishSectionName,
      mainDishOptionName,
      counter + 1
    );
  };

  const decreaseFunction = () => {
    if (counter > 0) {
      updateMainItemQuantity(
        mainDishSectionName,
        mainDishOptionName,
        counter - 1
      );
    }
  };

  return (
    <div>
      {!currentTicket ||
      Object.keys(currentTicket.selections).length === 0 ||
      currentTicket.total === 0 ? (
        <Button buttonStyle={{ variant: 'primary' }} onClick={handleAddItem}>
          adicionar
        </Button>
      ) : (
        <div className="flex flex-row items-center gap-2">
          {counter === 1 ? (
            <button
              onClick={decreaseFunction}
              className="flex cursor-pointer border-none bg-transparent p-0">
              <img src={TrashIcon} alt="trash icon" className="size-6" />
            </button>
          ) : (
            <MinusButtonComponent
              disabled={counter === 0}
              decreaseFunction={decreaseFunction}
              size="large"
            />
          )}
          <span className="text-lg font-bold">{counter}</span>
          <PlusButtonComponent
            increaseFunction={increaseFunction}
            size="large"
          />
        </div>
      )}
    </div>
  );
}
