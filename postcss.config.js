module.exports = {
  plugins: {
    '@tailwindcss/nesting': {},
    '@tailwindcss/postcss': {}, // ✅ This is now the required entry point
    autoprefixer: {},
  },
};
