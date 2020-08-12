module.exports = {
  env: {
    es2020: true,
    node: true,
    mocha: true
  },
  extends: ['standard', 'plugin:prettier/recommended'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier'],
  rules: {
    'no-unused-vars': 'off',
    'prettier/prettier': 'error'
  }
}
