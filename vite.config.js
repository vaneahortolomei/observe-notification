import {defineConfig} from "vite";

export default defineConfig({
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
