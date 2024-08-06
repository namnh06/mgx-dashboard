/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './resources/**/*.svelte',
  ],
  plugins: [
      require('daisyui'),
      require('@tailwindcss/forms'),
  ],
}

