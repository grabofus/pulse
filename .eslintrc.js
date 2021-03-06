const defaultSeverity = 'warn';

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {},
    extends: [
        'react-app',
        'eslint:recommended',
        'plugin:prettier/recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react/recommended',
        'plugin:import/typescript'
    ],
    plugins: ['prettier', '@typescript-eslint', 'import', 'react', 'react-hooks'],
    env: {
        es6: true,
        browser: true,
        node: true,
    },

    rules: {
        // https://eslint.org/docs/rules/comma-dangle
        'comma-dangle': defaultSeverity,
        // https://eslint.org/docs/rules/jsx-quotes
        'jsx-quotes': defaultSeverity,
        // https://eslint.org/docs/rules/key-spacing
        'key-spacing': defaultSeverity,
        // https://eslint.org/docs/rules/no-bitwise
        'no-bitwise': defaultSeverity,
        // https://eslint.org/docs/rules/no-dupe-class-members
        'no-dupe-class-members': 'off',
        // https://eslint.org/docs/rules/no-undef
        'no-undef': 'off',
        // https://eslint.org/docs/rules/no-var
        'no-var': defaultSeverity,
        // https://eslint.org/docs/rules/quote-props
        'quote-props': [defaultSeverity, 'consistent-as-needed'],
        // https://eslint.org/docs/rules/quotes
        'quotes': [defaultSeverity, 'single'],
        // https://eslint.org/docs/rules/semi-spacing
        'semi-spacing': defaultSeverity,
        // https://eslint.org/docs/rules/sort-imports
        'sort-imports': [defaultSeverity, {
            'ignoreDeclarationSort': true
        }],


        // https://github.com/benmosher/eslint-plugin-import/blob/master/docs/rules/order.md
        "import/order": [defaultSeverity, {
            "alphabetize": {
                "order": "asc",
                "caseInsensitive": true
            },
            "groups": [ "builtin", "external", "internal", "parent", ["index", "sibling"], "unknown" ],
            "newlines-between": "always"
        }],


        // https://github.com/prettier/eslint-plugin-prettier#options
        'prettier/prettier': [defaultSeverity, {
            'arrowParens': 'always',
            'printWidth': 140,
            'proseWrap': 'always',
            'quoteProps': 'consistent',
            'singleQuote': true,
            'tabWidth': 4,
            'useTabs': false
        }],


        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-types.md
        '@typescript-eslint/ban-types': [defaultSeverity, {
            'types': {
                'Object': {
                    'message': 'Avoid using the `Object` type. Did you mean `object`?',
                    'fixWith': 'object'
                },
                'Boolean': {
                    'message': 'Avoid using the `Boolean` type. Did you mean `boolean`?',
                    'fixWith': 'boolean'
                },
                'Number': {
                    'message': 'Avoid using the `Number` type. Did you mean `number`?',
                    'fixWith': 'number'
                },
                'String': {
                    'message': 'Avoid using the `String` type. Did you mean `string`?',
                    'fixWith': 'string'
                },
                'Symbol': {
                    'message': 'Avoid using the `Symbol` type. Did you mean `symbol`?',
                    'fixWith': 'symbol'
                }
            }
        }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/ban-ts-ignore.md
        '@typescript-eslint/ban-ts-ignore': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-member-accessibility.md
        '@typescript-eslint/explicit-member-accessibility': [defaultSeverity, {
            'accessibility': 'explicit',
            'overrides': {
                'constructors': 'no-public'
            }
        }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/explicit-function-return-type.md
        '@typescript-eslint/explicit-function-return-type': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/indent.md
        '@typescript-eslint/indent': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/interface-name-prefix.md
        '@typescript-eslint/interface-name-prefix': [defaultSeverity, 'never'],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
        '@typescript-eslint/member-ordering': [defaultSeverity, {
            'default': [
                // Fields
                'public-field', // = ['public-static-field', 'public-instance-field'])
                'protected-field', // = ['protected-static-field', 'protected-instance-field'])
                'private-field', // = ['private-static-field', 'private-instance-field'])
                // Constructors
                'constructor', // = ['public-constructor', 'protected-constructor', 'private-constructor'])
                // Methods
                'public-method', // = ['public-static-method', 'public-instance-method'])
                'protected-method', // = ['protected-static-method', 'protected-instance-method'])
                'private-method', // = ['private-static-method', 'private-instance-method'])
            ]
        }],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-empty-interface.md
        '@typescript-eslint/no-empty-interface': [
            'error',
            {
                'allowSingleExtends': true
            }
        ],
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-explicit-any.md
        '@typescript-eslint/no-explicit-any': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-inferrable-types.md
        '@typescript-eslint/no-inferrable-types': 'off',
        // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/no-unused-vars.md
        '@typescript-eslint/no-unused-vars': 'off'
    },

    overrides: [{
        files: ["*.tsx"],
        rules: {
            // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules/member-ordering.md
            '@typescript-eslint/member-ordering': 'off',
            // https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/sort-comp.md
            'react/sort-comp': [defaultSeverity, {
                'order': [
                    'instance-variables',
                    'lifecycle',
                    'everything-else',
                    'static-methods',
                    'instance-methods',
                    'render'
                ]
            }],
        }
    }]
};
