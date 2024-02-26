import React from 'react';

import RadioActive from '@assets/icons/radio_active.svg?react';
import RadioInactive from '@assets/icons/radio_disabled.svg?react';

interface RadioProps {
  name: string;
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}

const Radio: React.FC<RadioProps> = ({
  name,
  label,
  checked,
  onChange,
  value,
}) => {
  return (
    <label
      htmlFor={value}
      className="inline-flex cursor-pointer items-center focus-within:ring-2">
      <input
        type="radio"
        className="sr-only"
        id={value}
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
      />

      {checked ? (
        <RadioActive className="size-6" />
      ) : (
        <RadioInactive className="size-6" />
      )}
      {label && (
        <span id={`${name}-label`} className="ml-2 text-sm text-gray-700">
          {label}
        </span>
      )}
    </label>
  );
};

export default Radio;
