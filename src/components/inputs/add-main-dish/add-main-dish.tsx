import TrashIcon from '@assets/icons/trash.svg';
import Button from '@components/button';
import MinusButtonComponent from '@components/inputs/minus-button';
import PlusButtonComponent from '@components/inputs/plus-button';
import { useTicketStore } from '@stores/ticket';

export default function AddMainDish() {
  const { addMainItem, updateMainItemQuantity, currentTicket, currentItem } =
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
    if (!currentItem || currentItem.sections.length === 0) {
      console.warn('No sections available');
      return;
    }

    const firstSection = currentItem.sections[0];
    if (!firstSection || firstSection.options.length === 0) {
      console.warn('No options available in the first section');
      return;
    }

    const firstOption = firstSection.options[0];
    if (!firstOption) {
      console.warn('First option is undefined');
      return;
    }

    addMainItem(firstSection.name, firstOption.name, firstOption.price || 0, 1);
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
    <>
      {!currentTicket || !mainDishOptionName ? (
        <Button variant="tertiary" size="medium" onClick={handleAddItem}>
          adicionar
        </Button>
      ) : (
        <div className="flex flex-row items-center gap-5">
          {counter === 1 ? (
            <button onClick={decreaseFunction} className="flex cursor-pointer">
              <img src={TrashIcon} alt="trash icon" className="size-9" />
            </button>
          ) : (
            <MinusButtonComponent
              disabled={counter === 0}
              decreaseFunction={decreaseFunction}
              size="large"
            />
          )}
          <span className="text-16 font-bold">{counter}</span>
          <PlusButtonComponent
            increaseFunction={increaseFunction}
            size="large"
          />
        </div>
      )}
    </>
  );
}
