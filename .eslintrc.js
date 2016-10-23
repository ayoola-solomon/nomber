module.exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "no-else-return": 0,
      "no-undef": 0,
      "max-len": 0,
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }]
    }
};
