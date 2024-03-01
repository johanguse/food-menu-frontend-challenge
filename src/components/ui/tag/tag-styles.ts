import { cva } from 'class-variance-authority';

export const tagStyles = cva(
  [
    'text-center',
    'relative',
    'whitespace-nowrap',
    'align-middle',
    'inline-flex',
    'items-center',
    'justify-center',
    'select-none',
    'rounded',
    'px-2',
    'py-[6px]',
  ],
  {
    variants: {
      variant: {
        primary: ['bg-gray-700', 'text-white', 'text-xs', 'font-semibold'],
      },
      // Add other variants as needed
    },
    defaultVariants: {
      variant: 'primary',
    },
  }
);
