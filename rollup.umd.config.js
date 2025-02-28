import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';
import { terser } from 'rollup-plugin-terser';

const config = {
  input: 'src/index.tsx',
  output: {
    name: 'viking-design ',
    file: 'dist/index.umd.js', // 输出 JavaScript 文件
    format: 'umd', // ES 模块格式
    exports: 'named',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'axios': 'Axios',
    },
  },
  plugins: [
    nodeResolve(), // 解析第三方模块
    commonjs({
      include: 'node_modules/**', // 包含 node_modules 中的 CommonJS 模块
    }),
    json(), // 支持 JSON 文件
    typescript({
      tsconfig: 'tsconfig.build.json', // 使用自定义 tsconfig 文件
      clean: true, // 清理缓存
    }),
    sass({
      output: 'dist/index.css'
    }),
    terser({
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    }),
  ],
  external: ['react', 'react-dom', 'axios'],
};

export default config;