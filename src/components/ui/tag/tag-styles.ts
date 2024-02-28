import { tv } from 'tailwind-variants';

export const tagStyles = tv({
  base: 'text-center relative whitespace-nowrap align-middle inline-flex items-center justify-center select-none rounded px-2 py-1',
  variants: {
    variant: {
      primary: 'bg-gray-700 text-white text-xs font-semibold',
    },
  },
  defaultVariants: {
    variant: 'primary',
  },
});
