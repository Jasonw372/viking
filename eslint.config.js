import tseslint from 'typescript-eslint';

export default [
  {
    ignores: ['dist/*', '*.config.ts','.storybook/*']
  },
  ...tseslint.configs.recommended,
  {
    files: ['**/*.{ts,tsx}', '**/*.stories.tsx'],
    languageOptions: {
      parser: tseslint.parser,
      parserOptions: {
        project: './tsconfig.app.json'
      }
    },
    rules: {
      // TypeScript 相关规则
      '@typescript-eslint/no-explicit-any': 'warn', // 警告使用 any 类型
      '@typescript-eslint/explicit-function-return-type': 'off', // 不强制要求函数返回类型
      '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }], // 未使用的变量报错，但忽略下划线开头的参数
      '@typescript-eslint/no-empty-interface': 'warn', // 空接口警告
      '@typescript-eslint/consistent-type-imports': 'error', // 强制使用 import type
      
      // 常规 ESLint 规则
      'no-console': ['warn', { allow: ['warn', 'error'] }], // 警告使用 console，但允许 warn 和 error
      'prefer-const': 'error', // 能用 const 的地方强制使用 const
      'no-var': 'error', // 禁止使用 var
      'eqeqeq': ['error', 'always'], // 强制使用 === 和 !==
      
      // React 相关规则
      'react/prop-types': 'off', // 使用 TypeScript 时关闭 prop-types 检查
      'react/react-in-jsx-scope': 'off', // 新版 React 不需要引入 React
      'react/display-name': 'off', // 不强制要求组件具有 display name
      
      // 代码风格
      'max-len': ['warn', { code: 100, ignoreComments: true }], // 单行最大长度
      'no-multiple-empty-lines': ['error', { max: 1 }], // 最多允许一个空行
      'quotes': ['error', 'single'], // 强制使用单引号
      'semi': ['error', 'always'], // 强制使用分号
      'comma-dangle': ['error', 'always-multiline'], // 多行时尾随逗号
    }
  }
];
