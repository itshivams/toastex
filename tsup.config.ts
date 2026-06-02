import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts', 'src/toastex.css'],
  format: ['cjs', 'esm', 'iife'],
  globalName: 'Toastex',
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
