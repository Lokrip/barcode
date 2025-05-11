import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react()
  ],
  css: {
    preprocessorOptions: {
        sass: {
            additionalData: "@import \"./src/sass/_index.scss\""
        }
    }
  }
})
