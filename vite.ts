
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
        console.log('writing')
        await fs.mkdir ( 'dist/resources/icon', { recursive: true } );
        await fs.cp ( 'resources/icon', 'dist/resources/icon', { recursive: true } );
        await fs.cp ( 'manifest.json', 'dist/manifest.json' );
      }
    }
  ]
});

/* EXPORT */

export default config;
