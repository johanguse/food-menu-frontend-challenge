import minusActive from '@assets/icons/minus_active.svg';
import minusDisabled from '@assets/icons/minus_disabled.svg';

interface MinusButtonComponentProps {
  disabled?: boolean;
  decreaseFunction: () => void;
  size?: 'small' | 'large';
}

export default function MinusButtonComponent({
  disabled = false,
  decreaseFunction,
  size = 'small',
}: MinusButtonComponentProps) {
  const iconSrc = disabled ? minusDisabled : minusActive;
  const altText = 'minus icon';

  const sizeClasses = size === 'small' ? 'size-6' : 'size-9';

  return (
    <button
      onClick={decreaseFunction}
      disabled={disabled}
      data-testid="minus-button"
      className={`flex cursor-pointer items-center justify-center border-none bg-transparent p-0 ${disabled ? 'cursor-not-allowed opacity-50' : ''} ${sizeClasses}`}>
      <img src={iconSrc} alt={altText} className="object-contain" />
    </button>
  );
}
