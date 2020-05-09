import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';

export const config: Config = {
  namespace: 'device-bars',
  taskQueue: 'async',
  testing: {
    testPathIgnorePatterns: ['/node_modules/', '/demo/'],
  },
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'docs-readme',
      footer: '*Built with love!*',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
  plugins: [sass()],
};
