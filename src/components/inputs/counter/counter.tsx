import React from 'react';

import TrashIcon from '@assets/icons/trash.svg';
import MinusButtonComponent from '@components/inputs/minus-button';
import PlusButtonComponent from '@components/inputs/plus-button';

interface CounterComponentProps {
  counter: number;
  showTrashIcon?: boolean;
  size?: 'small' | 'large';
  increaseFunction: () => void;
  decreaseFunction: () => void;
}

const CounterComponent: React.FC<CounterComponentProps> = ({
  counter = 0,
  decreaseFunction,
  increaseFunction,
  showTrashIcon = false,
  size = 'small',
}) => {
  const textSizeClass = size === 'small' ? 'text-md' : 'text-lg';
  const iconSizeClass = size === 'small' ? 'w-6 h-6' : 'w-8 h-8';

  return (
    <div className="flex items-center gap-3">
      {showTrashIcon && counter === 1 ? (
        <button
          onClick={decreaseFunction}
          className="m-0 flex cursor-pointer border-none bg-transparent p-0">
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
  );
};

export default CounterComponent;
