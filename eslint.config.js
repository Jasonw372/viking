import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default [
  {
    ignores: ['dist/*', '*.config.ts', '.storybook/*'],
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}', '**/*.stories.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.app.json',
      },
    },
    plugins: {
      '@typescript-eslint': tseslint.plugin,
      prettier: prettier,
    },
    rules: {
      // TypeScript 相关规则
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/no-empty-interface': 'warn',
      '@typescript-eslint/consistent-type-imports': 'off', // 关闭强制使用type导入
      // 或者使用下面的配置允许普通导入
      // '@typescript-eslint/consistent-type-imports': ['error', {
      //   prefer: 'no-type-imports'
      // }],

      // 常规 ESLint 规则
      // 'no-console': ['warn', { allow: ['warn', 'error'] }],
      'prefer-const': 'error',
      'no-var': 'error',
      eqeqeq: ['error', 'always'],

      // React 相关规则
      'react/prop-types': 'off',
      'react/react-in-jsx-scope': 'off',
      'react/display-name': 'off',

      // 代码风格
      'max-len': ['warn', { code: 100, ignoreComments: true }],
      'no-multiple-empty-lines': ['error', { max: 1 }],
      quotes: ['error', 'single'],
      semi: ['error', 'always'],
      'comma-dangle': ['error', 'always-multiline'],

      // Prettier 相关规则
      'prettier/prettier': [
        'error',
        {
          singleQuote: true,
          trailingComma: 'all',
          semi: true,
          printWidth: 100,
          tabWidth: 2,
          useTabs: false,
          bracketSpacing: true,
          arrowParens: 'avoid',
          endOfLine: 'auto',
        },
      ],
    },
  },
];
