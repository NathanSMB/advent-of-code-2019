module.exports = {
    root: true,
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    env: {
        es6: true,
        node: true,
    },
    extends: [
        "eslint:recommended",
        "plugin:@typescript-eslint/eslint-recommended",
        "plugin:@typescript-eslint/recommended",
        "plugin:@typescript-eslint/recommended-requiring-type-checking",
        "prettier/@typescript-eslint",
        "plugin:prettier/recommended",
    ],
    parserOptions: {
        project: "./tsconfig.json",
        ecmaVersion: 2018,
        sourceType: 'module',
        tsconfigRootDir: __dirname,
    },
    rules: {
        "prefer-const": "warn",
        "no-trailing-spaces": "warn",
        "no-irregular-whitespace": "warn",
    },
}
