module.exports = {
  extends: ['prettier', 'plugin:promise/recommended'],
  env: { es6: true },
  plugins: ['prettier'],
  rules: {
    camelias: 0,
    'no-bitwise': 0,
    'linebreak-style': 0,
    'generator-star-spacing': 0,
    'operator-linebreak': 0,
    'object-curly-newline': 0,
    'no-use-before-define': 0,
    'no-nested-ternary': 0,
    'no-spaced-func': 2,
    'no-this-before-super': 0,
    'no-var': 1,
    'compat/compat': 0,
    '@typescript-eslint/no-this-alias': ['off'],
    '@typescript-eslint/no-unused-vars': 0,
    '@typescript-eslint/no-invalid-this': 0,
  },
};
