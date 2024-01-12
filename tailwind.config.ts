import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        xs: '340px',
      },
      fontFamily: {
        sans: ['var(--font-source-sans-3)'],
        tangerine: ['var(--font-tangerine)'],
      },
      backgroundColor: {
        white: '#f8f9fa',
      },
      colors: {
        gray: {
          '0': '#f8f9fa',
          '1': '#f1f3f5',
          '2': '#e9ecef',
          '3': '#dee2e6',
          '4': '#ced4da',
          '5': '#adb5bd',
          '6': '#868e96',
          '7': '#495057',
          '8': '#343a40',
          '9': '#212529',
        },
      },
      textColor: {
        black: '#212529',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
};

export default config;
