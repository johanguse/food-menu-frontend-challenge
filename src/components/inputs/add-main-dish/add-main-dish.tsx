import TrashIcon from '@assets/icons/trash.svg';
import Button from '@components/button';
import MinusButtonComponent from '@components/inputs/minus-button';
import PlusButtonComponent from '@components/inputs/plus-button';
import { useTicketStore } from '@stores/ticket';

export default function AddMainDish() {
  const { updateMainItemQuantity, currentTicket, currentItem } =
    useTicketStore();

  // Assuming "qual o tamanho?" is a key section for main dish size
  // This should handle in a better way
  const mainDishSectionName = 'qual o tamanho?';
  let mainDishOptionName = '';
  let counter = 0;

  if (
    currentItem &&
    currentTicket &&
    currentTicket.selections[mainDishSectionName]
  ) {
    mainDishOptionName = Object.keys(
      currentTicket.selections[mainDishSectionName]
    )[0];
    counter =
      currentTicket.selections[mainDishSectionName][mainDishOptionName]
        ?.quantity || 0;
  }

  const handleAddItem = () => {
    if (mainDishOptionName) {
      updateMainItemQuantity(
        mainDishSectionName,
        mainDishOptionName,
        counter + 1
      );
    }
  };

  const increaseFunction = () => {
    if (mainDishOptionName) {
      updateMainItemQuantity(
        mainDishSectionName,
        mainDishOptionName,
        counter + 1
      );
    }
  };

  const decreaseFunction = () => {
    if (mainDishOptionName && counter > 0) {
      updateMainItemQuantity(
        mainDishSectionName,
        mainDishOptionName,
        counter - 1
      );
    }
  };

  return (
    <div>
      {!currentTicket || !mainDishOptionName ? (
        <Button buttonStyle={{ variant: 'primary' }} onClick={handleAddItem}>
          Adicionar
        </Button>
      ) : (
        <div className="flex flex-row items-center gap-2">
          {counter === 1 ? (
            <button
              onClick={decreaseFunction}
              className="flex cursor-pointer border-none bg-transparent p-0"
            >
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
