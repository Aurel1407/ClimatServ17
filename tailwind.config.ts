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
        // Palette ClimatServ17 - Moderne & Professionnel
        primary: {
          DEFAULT: '#0B4F8C', // Bleu Corporate
          50: '#E8F3FB',
          100: '#D1E7F7',
          200: '#A3CFEF',
          300: '#75B7E7',
          400: '#479FDF',
          500: '#0B4F8C',
          600: '#094070',
          700: '#073054',
          800: '#052038',
          900: '#03101C',
        },
        accent: {
          DEFAULT: '#E84C0A', // Orange Énergique
          50: '#FEF3ED',
          100: '#FDE7DB',
          200: '#FBCFB7',
          300: '#F9B793',
          400: '#F79F6F',
          500: '#E84C0A',
          600: '#BA3D08',
          700: '#8B2E06',
          800: '#5D1F04',
          900: '#2E0F02',
        },
        neutral: {
          DEFAULT: '#F8F9FA', // Gris Neutre
          50: '#FFFFFF',
          100: '#F8F9FA',
          200: '#E9ECEF',
          300: '#DEE2E6',
          400: '#CED4DA',
          500: '#ADB5BD',
          600: '#6C757D',
          700: '#495057',
          800: '#343A40',
          900: '#212529',
        },
        success: {
          DEFAULT: '#28A745',
          light: '#D4EDDA',
          dark: '#155724',
        },
        warning: {
          DEFAULT: '#FFC107',
          light: '#FFF3CD',
          dark: '#856404',
        },
        error: {
          DEFAULT: '#DC3545',
          light: '#F8D7DA',
          dark: '#721C24',
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
