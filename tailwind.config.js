/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './resources/**/*.svelte',
  ],
  theme: {
    extend: {
        colors: {
            primary: {
                DEFAULT: 'hsl(2 71% 60% / var(--tw-bg-opacity))'
            }
        }
    },
  },
  plugins: [
      require('daisyui'),
      require('@tailwindcss/forms'),
  ],
}

