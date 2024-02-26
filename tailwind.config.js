export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    container: {
      center: true,
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      },
    },
    extend: {
      fontFamily: {
        nunito: ['Nunito Sans', 'sans-serif'],
        display: ['Nunito Sans', 'sans-serif'],
      },
      fontSize: {
        xs: ['0.75rem', { lineHeight: '1rem' }],
        2: '0.125rem',
        4: '0.25rem',
        8: '0.5rem',
        10: '0.625rem',
        12: '0.75rem',
        14: '0.875rem',
        16: '1rem',
        18: '1.125rem',
        20: '1.25rem',
        24: '1.5rem',
      },
      fontWeight: {
        normal: '400',
        semibold: '600',
        bold: '700',
        extrabold: '800',
      },
      colors: {
        primary: '#7B1FA2',
        gray: {
          100: '#EEF0F5',
          200: '#CDD1D9',
          400: '#A8ADB7',
          500: '#6D6F73',
          700: '#393A3C',
          900: '#202326',
        },
        green: {
          500: '#02A117',
        },
        purple: {
          50: '#EECFFC',
          200: '#F8ECFE',
          500: '#7B1FA2',
          700: '#580F78',
        },
        teal: {
          400: '#00A296',
        },
      },
    },
  },
  plugins: [],
};
