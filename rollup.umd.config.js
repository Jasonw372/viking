import commonConfig from './rollup.config.js';
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';

const config = {
  ...commonConfig,
  output: {
    name: 'VikingDesign',
    file: 'dist/index.umd.js',
    format: 'umd',
    exports: 'named',
    globals: {
      'react': 'React',
      'react-dom': 'ReactDOM',
      'axios': 'Axios',
    },
  },
  plugins: [
    replace({
      'process.env.NODE_ENV': JSON.stringify('production'),
      preventAssignment: true, // 防止变量被重新赋值
    },),
    ...commonConfig.plugins,
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