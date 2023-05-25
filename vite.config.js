import {defineConfig} from "vite";
import {generateSW} from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        generateSW({
            swDest: 'sw.js',
        }),
    ],
    build: {
        rollupOptions: {
            input: {
                main: './index.html',
                sw: './sw.js'
            },
            output: {
                entryFileNames: '[name].[hash].js'
            }
        }
    },
    server: {
        port: 3050,
    },
})
