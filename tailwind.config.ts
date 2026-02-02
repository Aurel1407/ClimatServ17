import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Palette Industrial Clean - ClimatServ17
        primary: {
          DEFAULT: '#1A2B3C', // Bleu Nuit
          50: '#E8EBF0',
          100: '#D1D7E1',
          200: '#A3AFC3',
          300: '#7587A5',
          400: '#475F87',
          500: '#1A2B3C',
          600: '#152230',
          700: '#101924',
          800: '#0B1118',
          900: '#06080C',
        },
        accent: {
          DEFAULT: '#FF7F50', // Orange Corail
          50: '#FFF5F2',
          100: '#FFE6DD',
          200: '#FFCCBB',
          300: '#FFB399',
          400: '#FF9977',
          500: '#FF7F50',
          600: '#FF5520',
          700: '#E63D00',
          800: '#B33000',
          900: '#802200',
        },
        technical: {
          DEFAULT: '#F4F4F4', // Gris Technique
          50: '#FFFFFF',
          100: '#FAFAFA',
          200: '#F4F4F4',
          300: '#E0E0E0',
          400: '#BDBDBD',
          500: '#9E9E9E',
          600: '#757575',
          700: '#616161',
          800: '#424242',
          900: '#212121',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'Inter', 'system-ui', 'sans-serif'],
        heading: ['var(--font-montserrat)', 'Montserrat', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        'industrial': '0 4px 6px -1px rgba(26, 43, 60, 0.1), 0 2px 4px -1px rgba(26, 43, 60, 0.06)',
        'industrial-lg': '0 10px 15px -3px rgba(26, 43, 60, 0.1), 0 4px 6px -2px rgba(26, 43, 60, 0.05)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};

export default config;
