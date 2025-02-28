import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";

const config = {
  input: 'src/index.tsx',
  output: {
    file: 'dist/index.es.js', // 输出 JavaScript 文件
    format: 'es', // ES 模块格式
    sourcemap: true, // 生成 Source Map
  },
  plugins: [
    nodeResolve(), // 解析第三方模块
    commonjs({
      include: 'node_modules/**', // 包含 node_modules 中的 CommonJS 模块
    }),
    json(), // 支持 JSON 文件
    excludeDependenciesFromBundle(),
    typescript({
      tsconfig: 'tsconfig.build.json', // 使用自定义 tsconfig 文件
      clean: true, // 清理缓存
    }),
    sass({
      output: 'dist/index.css'
    }),

  ],

};

export default config;