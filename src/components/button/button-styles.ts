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
    'py-2',
    'px-6',
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
        ],
        secondary: [
          'bg-purple-100',
          'text-primary',
          'font-bold',
          'shadow-purple',
          'active:shadow-none',
          'focus:shadow-purple',
        ],
        tertiary: [
          'bg-gray-500',
          'text-white',
          'font-semibold',
          'shadow-white',
          'active:shadow-none',
          'focus:shadow-white',
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
      fontSize: 'medium',
    },
  }
);
