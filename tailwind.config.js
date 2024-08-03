import daisyui from "daisyui";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
      './resources/**/*.svelte',
  ],
  theme: {
    extend: {},
  },
  plugins: [
      daisyui
  ],
}

