import React from 'react';

import Cifra from '@assets/icons/cifra.svg?react';
import RadioActive from '@assets/icons/radio_active.svg?react';
import RadioInactive from '@assets/icons/radio_disabled.svg?react';
import { formatNumberToCurrency } from 'src/lib/utils';

interface RadioProps {
  name: string;
  label: string;
  price: number;
  isChecked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  discountPrice?: number;
}

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  price,
  isChecked,
  onChange,
  value,
  discountPrice,
}) => {
  const isDiscountPrice = discountPrice ? true : false;
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <label
        htmlFor={value}
        className="inline-flex cursor-pointer items-center focus-within:ring-2">
        <input
          type="radio"
          className="sr-only"
          id={value}
          name={name}
          value={value}
          checked={isChecked}
          onChange={onChange}
        />

        {isChecked ? (
          <RadioActive className="size-6" data-testid="radio-active-icon" />
        ) : (
          <RadioInactive className="size-6" data-testid="radio-inactive-icon" />
        )}
        {label && (
          <span
            id={`${name}-label`}
            className={
              `ml-2 flex flex-row items-center text-sm text-gray-500` +
              (isChecked ? ' font-bold' : ' font-normal')
            }>
            {isDiscountPrice ? (
              <Cifra
                className="-ml-2 mr-2 size-[22px]"
                data-testid="cifra-icon"
              />
            ) : null}
            {label}
          </span>
        )}
      </label>

      {price >= 0 && !isDiscountPrice ? (
        <span className="text-14 font-bold text-primary">
          {formatNumberToCurrency(isDiscountPrice ? discountPrice : price)}
        </span>
      ) : (
        <div className="text-12 font-bold">
          <span className="mr-1 text-gray-500">
            de {formatNumberToCurrency(price)} por{' '}
          </span>
          <span className="text-14 text-green-500">
            {formatNumberToCurrency(discountPrice)}
          </span>
        </div>
      )}
    </div>
  );
};

export default Radio;
