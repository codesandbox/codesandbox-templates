module.exports = {
  extends: ["airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  env: {
    browser: true,
    node: true,
    jest: true,
    es6: true
  },
  rules: {
    "arrow-parens": 0,
    camelcase: "error",
    "class-methods-use-this": 0,
    "linebreak-style": 0,
    "no-console": ["error", { allow: ["error"] }],
    "no-param-reassign": 2,
    "no-nested-ternary": "warn",
    "no-plusplus": 0,
    "no-underscore-dangle": "off",
    "prefer-template": "off",
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "react/require-default-props": "off",
    "react/sort-comp": 0,
    "import/extensions": [
      "error",
      "always",
      {
        ts: "never",
        tsx: "never",
        js: "never"
      }
    ],
    "import/prefer-default-export": 0,
    "import/no-extraneous-dependencies": 0,
    "import/no-named-default": 0,
    "import/no-webpack-loader-syntax": 0
  }
};
