module.exports = {
  "extends": "airbnb",
  "parser": "babel-eslint",
  "env": {
      "browser": true
  },
  "rules": {
      "react/prefer-stateless-function": 1,
      "import/prefer-default-export": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "global-require": "off",
      "max-len": ["error", { "code": 120 }],
      "react/prop-types": ["error", { "ignore": ["navigation"] }]
  },
}
