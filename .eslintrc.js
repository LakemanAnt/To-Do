module.exports = {
  root: true,
  env: {
    node: true
  },
  plugins: ['prettier'],
  extends: ['prettier', 'plugin:vue/essential', '@vue/airbnb'],
  parserOptions: {
    parser: 'babel-eslint'
  },
  rules: {
    'arrow-parens': 'off',
    'semi': 'off',
    'linebreak-style': 'off',
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off'
  }
};
