import { forwardRef, useMemo } from 'react';

import { solidButtonStyles } from './button-styles';
import LoaderSpinner from '@assets/icons/loader_spinner.svg?react';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;

type Ref = HTMLButtonElement;

interface ButtonProps extends BaseButtonAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  className?: string;
  variant?: 'primary' | 'secondary' | 'tertiary';
  size?: 'small' | 'medium' | 'large';
}

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type,
    children,
    variant = 'primary',
    size = 'medium',
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props;

  const computedClassName = useMemo(() => {
    const variantClasses = solidButtonStyles({ variant, fontSize: size });
    return `${variantClasses} ${className || ''}`.trim();
  }, [variant, size, className]);

  const { newIcon: icon, iconPlacement } = useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = (
        <LoaderSpinner data-testid="loader" className="size-8 animate-spin" />
      );
    }

    return {
      newIcon,
      iconPlacement: rightIcon ? 'right' : 'left',
    };
  }, [isLoading, leftIcon, rightIcon]);

  return (
    <button
      className={computedClassName}
      {...rest}
      type={type || 'button'}
      ref={ref}
      disabled={disabled || isLoading}>
      {icon && iconPlacement === 'left' && (
        <span
          className={`inline-flex shrink-0 self-center ${children && !isLoading && '-ml-1 mr-2'}`}>
          {icon}
        </span>
      )}

      {!isLoading && children}

      {icon && iconPlacement === 'right' && (
        <span
          className={`inline-flex shrink-0 self-center ${children && !isLoading && '-mr-1 ml-2'}`}>
          {icon}
        </span>
      )}
    </button>
  );
});

Button.defaultProps = {
  variant: 'primary',
  size: 'medium',
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
};

export default Button;
