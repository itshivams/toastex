import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/toastly.css'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'Toastly',
  dts: {
    compilerOptions: {
      ignoreDeprecations: "6.0"
    }
  },
  splitting: false,
  sourcemap: true,
  clean: true,
  minify: true
});
