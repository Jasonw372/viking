import commonConfig from './rollup.config.js';
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";
import copy from 'rollup-plugin-copy';

const config = {
  ...commonConfig,
  output: {
    file: 'dist/index.es.js',
    format: 'es',
    sourcemap: true,
  },
  plugins: [
    ...commonConfig.plugins,
    excludeDependenciesFromBundle(),
    copy({
      targets: [
        {
          src: 'src/components/**/_styles.scss',
          dest: 'dist',
        },
        {
          src: 'src/styles/*',
          dest: 'dist',
        }
      ],
      flatten: false,
    }),
  ],
};

export default config;
