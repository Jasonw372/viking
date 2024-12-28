// 导入核心 ESLint 推荐配置
import js from '@eslint/js'
// 导入全局变量定义
import globals from 'globals'
// 导入 React Hooks 规则插件
import reactHooks from 'eslint-plugin-react-hooks'
// 导入 React Refresh 插件（用于快速刷新功能）
import reactRefresh from 'eslint-plugin-react-refresh'
// 导入 TypeScript ESLint 配置
import tseslint from 'typescript-eslint'

export default tseslint.config(
  // 忽略 dist 目录
  { ignores: ['dist'] },
  {
    // 继承推荐配置
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    // 配置适用的文件类型
    files: ['**/*.{ts,tsx,js,jsx}'],
    languageOptions: {
      // 指定 ECMAScript 版本
      ecmaVersion: 2020,
      // 添加浏览器环境的全局变量
      globals: globals.browser,
    },
    // 配置使用的插件
    plugins: {
      // React Hooks 规则插件
      'react-hooks': reactHooks,
      // React Refresh 插件
      'react-refresh': reactRefresh,
    },
    // 具体规则配置
    rules: {
      // 使用 React Hooks 推荐规则
      ...reactHooks.configs.recommended.rules,
      // 配置组件导出规则，允许导出常量
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
    },
  },
)
