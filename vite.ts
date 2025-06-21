
/* IMPORT */

import fs from 'node:fs/promises';
import {defineConfig} from 'vite';
import manifest from './manifest.json';

/* MAIN */

const config = defineConfig ({
  build: {
    rollupOptions: {
      input: {
        newtab: manifest.chrome_url_overrides.newtab,
      },
      output: {
        entryFileNames: 'assets/[name].js'
      }
    }
  },
  plugins: [
    {
      name: 'copy:assets',
      async writeBundle () {
        await fs.cp ( 'resources/icon/icon-256.png', 'dist/resources/icon/icon-256.png', { recursive: true } );
        await fs.cp ( 'manifest.json', 'dist/manifest.json' );
      }
    }
  ]
});

/* EXPORT */

export default config;
