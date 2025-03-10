import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [ react() ],
    base: "/",
    define: {
        BUILD_TIMESTAMP: JSON.stringify(new Date().toISOString()),
    },
})
