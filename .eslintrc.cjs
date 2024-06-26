// module.exports = {
//   root: true,
//   env: { browser: true, es2020: true },
//   extends: [
//     'eslint:recommended',
//     'plugin:@typescript-eslint/recommended',
//     'plugin:react-hooks/recommended',
//   ],
//   ignorePatterns: ['dist', '.eslintrc.cjs'],
//   parser: '@typescript-eslint/parser',
//   plugins: ['react-refresh'],
//   rules: {
//     'react-refresh/only-export-components': [
//       'warn',
//       { allowConstantExport: true },
//     ],
//   },
// }

module.exports = {
  "env": {
    "browser": true,
    "es2021": true,
    "jest": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:@typescript-eslint/recommended",
    "eslint-config-prettier"
  ],
  "settings": {
    "react": {
      "version": "detect"
    }
  },
  "globals": {
    "ENVIRONMENT_VARIABLES": "readonly"
  },
  "parser": "@typescript-eslint/parser",
  "parserOptions": {
    "ecmaFeatures": {
      "jsx": true
    },
    "ecmaVersion": "latest",
    "sourceType": "module"
  },
  "plugins": [
    "react",
    "@typescript-eslint",
    "eslint-plugin-prettier",
    "jsx-a11y"
  ],
  "rules": {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/ban-ts-comment": "off",
    "@typescript-eslint/no-empty-function": "off",
    "@typescript-eslint/no-unused-vars": [
      "error",
      {
        "varsIgnorePattern": "^_$"
      }
    ],
    "@typescript-eslint/no-explicit-any": "error",
    "no-multi-spaces": "error",
    "jsx-quotes": ["error", "prefer-double"],
    "react/jsx-pascal-case": ["error"],
    "react/jsx-closing-tag-location": "error",
    "react/jsx-closing-bracket-location": [1, "tag-aligned"],
    "react/jsx-tag-spacing": [
      "error",
      {
        "beforeSelfClosing": "always"
      }
    ],
    "react/jsx-curly-spacing": [
      "error",
      {
        "when": "never"
      }
    ],
    "react/jsx-boolean-value": ["warn", "never"],
    "react/no-array-index-key": "error",
    "react/jsx-wrap-multilines": ["error"],
    "react/self-closing-comp": [
      "error",
      {
        "component": true,
        "html": true
      }
    ],
    "jsx-a11y/alt-text": [
      "warn",
      {
        "elements": ["img", "object", "area", "input[type=\"image\"]"],
        "img": ["Image"],
        "object": ["Object"],
        "area": ["Area"],
        "input[type=\"image\"]": ["InputImage"]
      }
    ],
    "jsx-a11y/img-redundant-alt": [
      "warn",
      {
        "components": ["Image"]
      }
    ],
    "jsx-a11y/aria-role": [
      "warn",
      {
        "allowedInvalidRoles": ["text"],
        "ignoreNonDOM": true
      }
    ]
  }
}
