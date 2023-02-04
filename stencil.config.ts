import { Config } from '@stencil/core';

export const config: Config = {
  namespace: 'stencil-web-component',
  outputTargets: [
    {
      type: 'dist',
      esmLoaderPath: '../loader',
      copy: [
        {  src: '**/*.{jpg,png}', dest: './assets' }
      ],
    },
    {
      type: 'dist-custom-elements',
    },
    {
      type: 'docs-readme',
    },
    {
      type: 'www',
      serviceWorker: null, // disable service workers
    },
  ],
};
