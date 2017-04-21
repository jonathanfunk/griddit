module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "env": {
        "browser": true
    },
    "plugins": [
        "react"
    ],
    "rules": {
      "no-useless-return": 0,
      "import/no-named-default": 0,
      "react/jsx-filename-extension": 0,
      "react/prefer-stateless-function": 1,
      "jsx-a11y/anchor-has-content": 1,
      "max-len": 1
    }
};