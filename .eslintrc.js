module.exports = {
    root: true,
    env: {
        'node': true
    },
    parser: '@typescript-eslint/parser',
    plugins: [
        '@typescript-eslint',
        'react'
    ],
    extends: [
        'eslint:recommended',
        'plugin:react/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended',
    ],
    ignorePatterns: ["webpack.config.js", "node_modules"],
    rules: {
        "@typescript-eslint/no-explicit-any": 2,
        "no-async-promise-executor": "off",
        "@typescript-eslint/no-inferrable-types": 0,
        "@typescript-eslint/explicit-module-boundary-types": 2,
        "@typescript-eslint/no-empty-interface": 0,
        "react/jsx-uses-vars": 2
    },
    settings: {
        react: {
            version: "detect"
        }
    },
    parserOptions: {
        ecmaFeatures: {
            jsx: true
        }
    }
}
