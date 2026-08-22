/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        blush: {
          50: '#fff5f8',
          100: '#ffe9f1',
          200: '#ffd3e3',
          300: '#ffb3cd',
          400: '#ff8db3',
          500: '#f592b6',
          600: '#e36a98',
          700: '#c24d7c',
        },
        lavender: {
          100: '#f3ecff',
          200: '#e4d6ff',
          300: '#cdb4ff',
          400: '#b394f5',
        },
        babyblue: {
          100: '#eaf4ff',
          200: '#d4e9ff',
          300: '#b4d8ff',
        },
        cream: {
          50: '#fffdf8',
          100: '#fdf6e9',
          200: '#f9ecd2',
        },
      },
      fontFamily: {
        script: ['"Dancing Script"', 'cursive'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['Poppins', 'system-ui', 'sans-serif'],
      },
      keyframes: {
        floatUp: {
          '0%': { transform: 'translateY(0) scale(1)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.9' },
          '100%': { transform: 'translateY(-110vh) scale(1.3)', opacity: '0' },
        },
        twinkle: {
          '0%,100%': { opacity: '0.2', transform: 'scale(0.8)' },
          '50%': { opacity: '1', transform: 'scale(1.15)' },
        },
        drift: {
          '0%,100%': { transform: 'translate(0,0)' },
          '50%': { transform: 'translate(12px,-16px)' },
        },
        bobble: {
          '0%,100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '0% 50%' },
          '100%': { backgroundPosition: '200% 50%' },
        },
        pulseGlow: {
          '0%,100%': { boxShadow: '0 0 24px 4px rgba(245,146,182,0.45)' },
          '50%': { boxShadow: '0 0 40px 10px rgba(245,146,182,0.7)' },
        },
        gradientShift: {
          '0%,100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.85)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(28px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        lidOpen: {
          '0%': { transform: 'translateY(0) rotate(0deg)' },
          '100%': { transform: 'translateY(-70px) rotate(-22deg)' },
        },
        boxJump: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-18px)' },
          '100%': { transform: 'translateY(0)' },
        },
        wiggle: {
          '0%,100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' },
        },
        heartRise: {
          '0%': { transform: 'translateY(0) scale(0.6) rotate(0deg)', opacity: '0' },
          '15%': { opacity: '1' },
          '100%': { transform: 'translateY(-120vh) scale(1.2) rotate(20deg)', opacity: '0' },
        },
      },
      animation: {
        floatUp: 'floatUp linear infinite',
        twinkle: 'twinkle 3s ease-in-out infinite',
        drift: 'drift 9s ease-in-out infinite',
        bobble: 'bobble 4s ease-in-out infinite',
        shimmer: 'shimmer 3s linear infinite',
        pulseGlow: 'pulseGlow 2.4s ease-in-out infinite',
        gradientShift: 'gradientShift 12s ease infinite',
        scaleIn: 'scaleIn 0.6s cubic-bezier(0.22,1,0.36,1) both',
        fadeInUp: 'fadeInUp 0.8s cubic-bezier(0.22,1,0.36,1) both',
        boxJump: 'boxJump 1.6s ease-in-out infinite',
        wiggle: 'wiggle 0.5s ease-in-out infinite',
        heartRise: 'heartRise linear forwards',
      },
    },
  },
  plugins: [],
};
