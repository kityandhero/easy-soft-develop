module.exports = {
  pluginSearchDirs: false,
  printWidth: 200,
  singleQuote: true,
  trailingComma: 'all',
  proseWrap: 'never',
  semi: true,
  overrides: [
    {
      files: '.prettierrc',
      options: {
        parser: 'json',
      },
    },
  ],
  plugins: [
    'prettier-plugin-packagejson',
  ],
};
