const eslint = require("@eslint/js");
const tseslint = require("@typescript-eslint/eslint-plugin");
const tseslintParser = require("@typescript-eslint/parser");
const prettierConfig = require("eslint-config-prettier");

module.exports = [
  eslint.configs.recommended,
  {
    files: ["**/*.ts"],
    languageOptions: {
      parser: tseslintParser,
      parserOptions: {
        project: "./tsconfig.json",
        sourceType: "module",
        ecmaVersion: 2022,
      },
      globals: {
        console: "readonly",
        process: "readonly",
        __dirname: "readonly",
        require: "readonly",
        module: "readonly",
      },
    },
    plugins: {
      "@typescript-eslint": tseslint,
    },
    rules: {
      ...tseslint.configs.recommended.rules,
      "@typescript-eslint/interface-name-prefix": "off",
      "@typescript-eslint/explicit-function-return-type": "off",
      "@typescript-eslint/no-explicit-any": "off",
      "@typescript-eslint/no-require-imports": "off",
      "no-undef": "off",
    },
  },
  prettierConfig,
];
