import { defineConfig } from 'tsup'

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        'animations/index': 'src/components/animations/index.ts',
        'interactive/index': 'src/components/interactive/index.ts',
        'components/index': 'src/components/index.ts',
        'hooks/index': 'src/hooks/index.ts',
        'presets/index': 'src/presets/index.ts',
        'utils/index': 'src/utils/index.ts',
    },
    format: ['esm', 'cjs'],
    dts: true,
    splitting: true,
    sourcemap: true,
    clean: true,
    treeshake: true,
    minify: true,
    external: ['react', 'react-dom', 'framer-motion'],
    esbuildOptions(options) {
        options.banner = {
            js: '"use client";',
        }
    },
})
