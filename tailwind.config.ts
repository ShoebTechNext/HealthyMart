import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // HealthyMart brand colors
        healthy: {
          green: '#2E7D32',
          'green-light': '#4CAF50',
          'green-dark': '#1B5E20',
          charcoal: '#1F2937',
          'charcoal-light': '#374151',
          'charcoal-lighter': '#4B5563',
        },
      },
      fontFamily: {
        heading: ['var(--font-sora)', 'var(--font-poppins)', 'system-ui', 'sans-serif'],
        body: ['var(--font-inter)', 'var(--font-manrope)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'card': '16px',
        'card-lg': '24px',
      },
      boxShadow: {
        'card': '0 4px 24px rgba(0, 0, 0, 0.08)',
        'card-hover': '0 12px 40px rgba(0, 0, 0, 0.12)',
        'card-lg': '0 8px 32px rgba(0, 0, 0, 0.1)',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.3s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideDown: {
          '0%': { opacity: '0', transform: 'translateY(-10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;