module.exports = {
  env: {
    es2020: true,
    node: true,
    mocha: true
  },
  extends: ['standard', 'prettier'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 11,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'no-unused-vars': 'off'
  }
}
