module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        UncutSansRegular: ['UncutSansRegular'],
        FredokaOneRegular: ['FredokaOneRegular'],
      },
      backgroundImage: {
        'carson-background': 'url("/src/img/cs-film.jpg")',
      },
    },
  },
  plugins: [],
}
