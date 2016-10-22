module.exports = {
    "extends": "airbnb",
    "installedESLint": true,
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
      "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
      "max-len": [1, 120, 2, {ignoreComments: true}],
      "quote-props": [1, "consistent-as-needed"],
      "radix": 0,
      "no-else-return": 0,
      "no-undef": 0
    }
};
