module.exports = {
  env: {
    node: true
  },
  extends: 'airbnb',
  rules: {
    indent: 0, // ["error", 4],
    'no-continue': 0,
    'no-plusplus': [2, { "allowForLoopAfterthoughts": true }], // for文はOKにする
  }
}
