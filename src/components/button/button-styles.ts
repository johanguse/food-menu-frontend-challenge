import { cva } from 'class-variance-authority';

export const solidButtonStyles = cva(
  [
    'text-center',
    'relative',
    'whitespace-nowrap',
    'align-middle',
    'inline-flex',
    'items-center',
    'justify-center',
    'select-none',
    'rounded-lg',
  ],
  {
    variants: {
      variant: {
        primary: [
          'bg-teal-400',
          'text-white',
          'font-semibold',
          'shadow-teal',
          'active:shadow-none',
          'focus:shadow-teal',
          'py-[6px]',
          'px-6',
        ],
        secondary: [
          'bg-purple-100',
          'text-primary',
          'font-bold',
          'shadow-purple',
          'active:shadow-none',
          'focus:shadow-purple',
          'py-[6px]',
          'px-6',
        ],
        tertiary: [
          'bg-gray-500',
          'text-white',
          'font-semibold',
          'shadow-white',
          'active:shadow-none',
          'focus:shadow-white',
          'px-6',
          'py-[10px]',
        ],
      },
      fontSize: {
        small: ['text-12'],
        medium: ['text-14'],
        large: ['text-16'],
      },
    },
    defaultVariants: {
      variant: 'primary',
      fontSize: 'large',
    },
  }
);
