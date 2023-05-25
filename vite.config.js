import {defineConfig} from "vite";
import { VitePWA } from 'vite-plugin-pwa';

export default defineConfig({
    plugins: [
        VitePWA({
            registerType: 'autoUpdate',
            outDir: "build",
            devOptions: {
                enabled: true
            },
            includeAssets: ['favicon.ico', 'apple-touch-icon.png', 'masked-icon.svg'],
            manifest: {
                "name": "My PWA App",
                "short_name": "PWA App",
                "start_url": "/",
                "display": "standalone",
                "background_color": "#ffffff",
                "theme_color": "#000000",
                "icons": [
                    {
                        "src": "/bell-192.png",
                        "sizes": "192x192",
                        "type": "image/png"
                    },
                    {
                        "src": "/bell.png",
                        "sizes": "512x512",
                        "type": "image/png"
                    }
                ]
            },
            workbox: {
                globDirectory: 'dist/',
                globPatterns: ['**/*.{html,js,css,png,jpg,svg}'],
                swDest: 'dist/sw.js',
                clientsClaim: true,
                skipWaiting: true,
                runtimeCaching: [
                    {
                        urlPattern: /\.(?:png|jpg|jpeg|svg)$/,
                        handler: 'CacheFirst',
                        options: {
                            cacheName: 'images',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 86400 // 1 день
                            }
                        }
                    },
                    {
                        urlPattern: /\.(?:html|js|css)$/,
                        handler: 'StaleWhileRevalidate',
                        options: {
                            cacheName: 'static-resources',
                            expiration: {
                                maxEntries: 10,
                                maxAgeSeconds: 86400 // 1 день
                            }
                        }
                    }
                ]
            },
        })
    ],
    server: {
        port: 3050,
    },
})
