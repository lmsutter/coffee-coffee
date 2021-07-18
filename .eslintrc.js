const { off } = require("gulp");

module.exports = {
  env: {
    browser: true,
    es6: true,
    mocha: true
  },
  plugins: ["mocha"],
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module"
  },
  rules: {
    indent: off,
    quotes: ["error", "single"],
    semi: ["error", "always"]
  }
};
