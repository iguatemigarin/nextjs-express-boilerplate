module.exports = {
  "env": {
    "jest": true
  },
  "extends": [
    "airbnb",
    "plugin:jsx-a11y/recommended",
    "plugin:react/recommended",
  ],
  "globals": {
    "dnTheme": true,
    "mountWithTheme": true,
    "msTheme": true,
    "React": true,
    "shallow": true,
    "toJSON": true
  },
  "plugins": [
    "jsx-a11y",
    "react"
  ],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    }
  },
  "rules": {
    "strict": 0,
    "import/no-extraneous-dependencies": [
      "error",
      {
        "devDependencies": [
          "**/*.test.js",
          "**/*.spec.js",
          "**/*.stories.jsx",
          "rollup.config.js",
          "**/setupTests.jsx"
        ]
      }
    ]
  },
  "settings": {
    "react": {
      "version": "16.4.0"
    }
  }
}
