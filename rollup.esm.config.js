import commonConfig from './rollup.config.js';
import excludeDependenciesFromBundle from "rollup-plugin-exclude-dependencies-from-bundle";

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
  ],
};

export default config;