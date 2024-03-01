import CheckboxActive from '@assets/icons/checkbox_active.svg?react';
import CheckboxInactive from '@assets/icons/checkbox_disabled.svg?react';
import { formatNumberToCurrency } from 'src/lib/utils';

interface CustomCheckboxProps {
  value: string;
  label: string;
  price: number;
  isChecked: boolean | undefined;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  value,
  label,
  price,
  isChecked,
  onChange,
}: CustomCheckboxProps) {
  return (
    <div className="flex flex-row items-center justify-between gap-2">
      <label
        className="inline-flex cursor-pointer items-center focus-within:ring-2"
        htmlFor={value}>
        <input
          type="checkbox"
          className="sr-only"
          id={value}
          name={value}
          value={value}
          checked={isChecked}
          onChange={onChange}
        />
        {isChecked ? (
          <CheckboxActive className="size-6" />
        ) : (
          <CheckboxInactive className="size-6" />
        )}
        {label && (
          <span
            className={
              `ml-2 text-sm text-gray-500` +
              (isChecked ? ' font-bold' : ' font-normal')
            }>
            {label}
          </span>
        )}
      </label>

      {price && (
        <span className="text-primary">{formatNumberToCurrency(price)}</span>
      )}
    </div>
  );
}
