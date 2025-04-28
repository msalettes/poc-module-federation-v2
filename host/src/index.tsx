import { init, registerRemotes } from '@module-federation/enhanced/runtime';
import React from 'react';
import ReactDOM from 'react-dom';

// init({
//   name: 'host',
//   remotes: [
//     {
//       name: 'remote1',
//       entry: 'http://localhost:3001/mf-manifest.json',
//     },
//   ],
//   shared: {
//     react: {
//         version: '18.3.1',
//         lib: () => React,
//         shareConfig: {
//             requiredVersion: '^18.3.1',
//             singleton: true,
//         },
//     },
//     'react-dom': {
//         version: '18.3.1',
//         lib: () => ReactDOM,
//         shareConfig: {
//             requiredVersion: '^18.3.1',
//             singleton: true,
//         },
//     },
//   },
// });


// init({
//   name: 'host',
//   remotes: [
//     {
//       name: 'remote1',
//       entry: 'http://localhost:3001/mf-manifest.json',
//     },
//   ],
// });

registerRemotes([
  {
    name: 'remote1',
    entry: 'http://localhost:3001/mf-manifest.json',
    alias: 'remote1',
  },
], { force: true });

import('./bootstrap');
