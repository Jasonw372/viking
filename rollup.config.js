import typescript from 'rollup-plugin-typescript2';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import sass from 'rollup-plugin-sass';

const config = {
  input: 'src/index.tsx',
  output: {
    name: 'VikingDesign',
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
    nodeResolve(),
    commonjs({
      include: 'node_modules/**',
    }),
    json(),
    typescript({
      tsconfig: 'tsconfig.build.json',
      clean: true,
    }),
    sass({
      output: 'dist/index.css'
    }),
  ],
  external: ['react', 'react-dom', 'axios'],
};

export default config;