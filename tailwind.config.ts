import type { Config } from 'tailwindcss'
import defaultTheme from 'tailwindcss/defaultTheme'

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        sans: ['DM Sans', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        blue: {
          50: '#edfaff',
          100: '#d6f2ff',
          200: '#b5eaff',
          300: '#83dfff',
          400: '#48cbff',
          500: '#1eacff',
          600: '#068eff',
          700: '#007aff',
          800: '#085dc5',
          900: '#0d519b',
          950: '#0e315d'
        }
      }
    }
  }
}
