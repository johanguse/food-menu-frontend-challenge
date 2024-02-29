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
  isdiscountPrice?: boolean;
}

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  price,
  isChecked,
  onChange,
  value,
  isdiscountPrice,
}) => {
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
          <RadioActive className="size-6" />
        ) : (
          <RadioInactive className="size-6" />
        )}
        {label && (
          <span
            id={`${name}-label`}
            className={
              `ml-2 flex flex-row items-center text-sm text-gray-700` +
              (isChecked ? ' font-bold' : ' font-normal')
            }>
            {isdiscountPrice ? <Cifra className="-ml-2 mr-2 size-5" /> : null}
            {label}
          </span>
        )}
      </label>

      {price && price >= 0 && (
        <span className="text-14 text-primary">
          {formatNumberToCurrency(price)}
        </span>
      )}
    </div>
  );
};

export default Radio;
