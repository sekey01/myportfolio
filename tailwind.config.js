/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      fontFamily: {
        'bartle': ['BBHBartle', 'sans-serif'],
        'geom': ['Geom', 'sans-serif'],
        'bpv': ['BPV', 'sans-serif'],
        'sans': ['Geom', 'sans-serif'], // Makes Geom the default sans font
      }
    }
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}