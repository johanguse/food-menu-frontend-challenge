import { tv } from 'tailwind-variants';

export const solidButton = tv({
  base: 'text-center relative whitespace-nowrap align-middle inline-flex items-center justify-center select-none rounded-lg py-2 px-6',
  variants: {
    variant: {
      primary:
        'bg-teal-700 text-white font-semibold shadow-teal active:shadow-none focus:shadow-teal',
      secondary:
        'bg-purple-100 text-primary font-bold shadow-purple active:shadow-none focus:shadow-purple',
    },
  },
});
