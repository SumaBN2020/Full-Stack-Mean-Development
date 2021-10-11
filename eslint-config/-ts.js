module.exports = {
  rules: {
    // this needs to be off because things like import and export statements are
    // "unsupported", even though we're transpiling them first.
    'node/no-unsupported-features/es-syntax': 'off',

    // Type overloads cause false positives. typescript errors on duplicates, so
    // this doesn't need to be replaced.
    'no-dupe-class-members': 'off',

    semi: 'off',
    '@typescript-eslint/semi': ['error'],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/ban-types': 'error',
    '@typescript-eslint/naming-convention': 'error',
    indent: 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/member-delimiter-style': 'error',
    '@typescript-eslint/consistent-type-assertions': 'error',
    'no-array-constructor': 'off',
    '@typescript-eslint/no-array-constructor': 'error',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-namespace': 'error',
    'no-redeclare': 'off',
    '@typescript-eslint/no-redeclare': ['error'],
    '@typescript-eslint/triple-slash-reference': 'error',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-for-in-array': 'error',
  },
};
