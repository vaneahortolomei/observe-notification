import {defineConfig} from "vite";
import {VitePWA} from 'vite-plugin-pwa'

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            outDir: "build",
            workbox: {
                globPatterns: ['**/*.{js,css,html,ico,png,svg}'],
            },
            devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
            manifest: {
                name: 'ObNot',
                short_name: 'ObNot',
                description: 'NotificationObserver',
                theme_color: '#ffffff',
                icons: [
                    {
                        src: 'bell.png',
                        sizes: '512x512',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                    {
                        src: 'bell-192.png',
                        sizes: '192x192',
                        type: 'image/png',
                        purpose: 'maskable'
                    },
                ]
            }
        })
    ],
    server: {
        port: 3070,
    },
})
