import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors:{ 
        'h-gray-500':'#767994',
        'h-blue-500':'#8CAAEE',
        'h-blue-900':'#303446',
      },
      width:{
        120:'30rem',
        125:'31.25rem'
      },
      height:{
        125:'31.25rem'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow:{
        white: '0 1px 3px 0px rgba(255, 255, 255, 0.9), 0 1px 2px 0px rgba(255, 255, 255, 0.09)',
        weak: '0 1px 3px 0 rgba(0, 0, 0, 0.1)',
      },
      animation: {
        fade: 'fade 1s ease-in-out',
      },
      keyframes: {
        fade: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
          
        },
       },
      
    },
  },
  plugins: [],
}
export default config
