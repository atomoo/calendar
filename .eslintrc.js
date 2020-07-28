module.exports = {
    extends: [
        '@ecomfe/eslint-config',
        '@ecomfe/eslint-config/react',
        '@ecomfe/eslint-config/typescript',
    ],
    rules: {
        '@typescript-eslint/no-unused-vars': [
            'error',
            {
                vars: 'all',
                args: 'after-used',
                ignoreRestSiblings: true,
                varsIgnorePattern: 'React',
            },
        ],
        '@typescript-eslint/naming-convention': [
            'error',
            {
                selector: 'variable',
                format: ['camelCase', 'PascalCase', 'UPPER_CASE'],
            },
        ],
    },
    settings: {
        'react': {
            version: 'detect',
        },
    },
};