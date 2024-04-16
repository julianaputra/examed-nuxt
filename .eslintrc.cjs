module.exports = {
    root: true,
    env: {
        browser: true,
        node: true
    },
    parser: 'vue-eslint-parser',
    parserOptions: {
        parser: '@typescript-eslint/parser',
        requireConfigFile: false
    },
    extends: [
        '@nuxtjs/eslint-config-typescript',
        'plugin:prettier/recommended'
    ],
    plugins: [],
    rules: {
        'vue/multi-word-component-names': 'off',
        indent: ['error', 4]
    }
}
