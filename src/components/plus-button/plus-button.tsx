import React from 'react';

import plusActive from '@assets/icons/plus_active.svg';
import plusDisabled from '@assets/icons/plus_disabled.svg';

interface PlusButtonComponentProps {
  disabled?: boolean;
  increaseFunction: () => void;
  size?: 'small' | 'large';
}

const PlusButtonComponent: React.FC<PlusButtonComponentProps> = ({
  disabled = false,
  increaseFunction,
  size = 'small',
}) => {
  const iconSrc = disabled ? plusDisabled : plusActive;
  const altText = 'plus icon';

  const sizeClasses = size === 'small' ? 'w-8 h-8' : 'w-12 h-12';

  return (
    <button
      onClick={increaseFunction}
      disabled={disabled}
      data-testid="plus-button"
      className={`flex cursor-pointer items-center justify-center border-none bg-transparent p-0 ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${sizeClasses}`}>
      <img src={iconSrc} alt={altText} className="object-contain" />
    </button>
  );
};

export default PlusButtonComponent;
