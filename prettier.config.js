//  @ts-check

/** @type {import('prettier').Config} */
const config = {
  semi: false,
  singleQuote: false,
  trailingComma: "all", 
  printWidth: 80,       // keep lines short
  tabWidth: 2,
  plugins: ['prettier-plugin-tailwindcss'],
};

export default config;
