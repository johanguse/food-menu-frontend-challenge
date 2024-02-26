import { forwardRef, useMemo } from 'react';

import { solidButton } from './buttonstyles';
import LoaderSpinner from '@assets/icons/loader_spinner.svg?react';
import { type VariantProps } from 'tailwind-variants';

type BaseButtonAttributes = React.ComponentPropsWithoutRef<'button'>;

type Ref = HTMLButtonElement;

interface ButtonProps extends BaseButtonAttributes {
  isLoading?: boolean;
  disabled?: boolean;
  leftIcon?: React.ReactElement;
  rightIcon?: React.ReactElement;
  buttonStyle?: VariantProps<typeof solidButton>;
  className?: string;
  buttonVariant?: 'primary' | 'secondary';
}

const Button = forwardRef<Ref, ButtonProps>((props, ref) => {
  const {
    type,
    children,
    buttonStyle,
    buttonVariant,
    disabled,
    isLoading,
    leftIcon,
    rightIcon,
    className,
    ...rest
  } = props;

  const { newIcon: icon, iconPlacement } = useMemo(() => {
    let newIcon = rightIcon || leftIcon;

    if (isLoading) {
      newIcon = (
        <LoaderSpinner data-testid="loader" className="size-8 animate-spin" />
      );
    }

    return {
      newIcon,
      iconPlacement: rightIcon ? ('right' as const) : ('left' as const),
    };
  }, [isLoading, leftIcon, rightIcon]);

  const renderButtonVariant = () => {
    if (buttonVariant === 'primary') {
      return solidButton({ ...buttonStyle, className });
    }
    return solidButton({ ...buttonStyle, className });
  };

  return (
    <button
      className={renderButtonVariant()}
      {...rest}
      type={type ? 'submit' : 'button'}
      ref={ref}
      disabled={disabled || isLoading}>
      {icon && iconPlacement === 'left' ? (
        <span
          className={`inline-flex shrink-0 self-center ${children && !isLoading && '-ml-1 mr-2'}`}>
          {icon}
        </span>
      ) : null}

      {!isLoading && children}

      {icon && iconPlacement === 'right' ? (
        <span
          className={`inline-flex shrink-0 self-center ${children && !isLoading && '-mr-1 ml-2'}`}>
          {icon}
        </span>
      ) : null}
    </button>
  );
});

Button.defaultProps = {
  buttonStyle: {},
  buttonVariant: 'primary',
  isLoading: false,
  disabled: false,
  leftIcon: undefined,
  rightIcon: undefined,
};

export default Button;
