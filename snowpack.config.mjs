/** @type {import("snowpack").SnowpackUserConfig } */
export default {
  mount: {
    public: '/',
    src: '/dist',
  },
  alias: {
    '@assets': './src/assets',
    '@common': './src/common',
    '@pages': './src/pages',
    '@providers': './src/providers',
    '@routing': './src/routing',
    '@services': './src/services',
    '@styles': './src/styles',
    '@utils': './src/utils',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-typescript'
  ],
  routes: [{ match: 'routes', src: '.*', dest: '/index.html' }],
  optimize: {
    bundle: true,
    sourcemap: 'inline',
    splitting: true,
    treeshake: true,
    manifest: true,
    minify: true
  },
  packageOptions: {
    /* ... */
  },
  devOptions: {},
  buildOptions: {
    /* ... */
  },
};
