import CheckboxActive from '@assets/icons/checkbox_active.svg?react';
import CheckboxInactive from '@assets/icons/checkbox_disabled.svg?react';

interface CustomCheckboxProps {
  value: string;
  label?: string;
  checked: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({
  value,
  label,
  checked,
  onChange,
}: CustomCheckboxProps) {
  return (
    <label
      className="inline-flex cursor-pointer items-center focus-within:ring-2"
      htmlFor={value}>
      <input
        type="checkbox"
        className="sr-only"
        id={value}
        name={value}
        value={value}
        checked={checked}
        onChange={onChange}
      />
      {checked ? (
        <CheckboxActive className="size-6" />
      ) : (
        <CheckboxInactive className="size-6" />
      )}
      {label && <span className="ml-2 text-sm text-gray-700">{label}</span>}
    </label>
  );
}
