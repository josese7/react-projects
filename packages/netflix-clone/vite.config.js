import { defineConfig  } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/

console.log(import.meta.env)

export default defineConfig({
    plugins: [react()],
})