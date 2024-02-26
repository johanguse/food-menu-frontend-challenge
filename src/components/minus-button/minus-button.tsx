import React from 'react';

import minusActive from '@assets/icons/minus_active.svg';
import minusDisabled from '@assets/icons/minus_disabled.svg';

interface MinusButtonComponentProps {
  disabled?: boolean;
  decreaseFunction: () => void;
  size?: 'small' | 'large';
}

const MinusButtonComponent: React.FC<MinusButtonComponentProps> = ({
  disabled = false,
  decreaseFunction,
  size = 'small',
}) => {
  const iconSrc = disabled ? minusDisabled : minusActive;
  const altText = 'minus icon';

  const sizeClasses = size === 'small' ? 'w-8 h-8' : 'w-12 h-12';

  return (
    <button
      onClick={decreaseFunction}
      disabled={disabled}
      data-testid="minus-button"
      className={`flex cursor-pointer items-center justify-center border-none bg-transparent p-0 ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${sizeClasses}`}>
      <img src={iconSrc} alt={altText} className="object-contain" />
    </button>
  );
};

export default MinusButtonComponent;
