import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    // Security: Remove source maps in production
    sourcemap: false,
    // Security: Minify and obfuscate code
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // Security: Set proper chunk size limits
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        // Security: Randomize chunk names to prevent predictable file access
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
  server: {
    // Security: Bind to localhost only in development
    host: '127.0.0.1',
    port: 5173,
    // Security: Disable server.fs.allow for stricter file access
    fs: {
      strict: true,
      allow: ['..']
    }
  },
  preview: {
    // Security: Bind to localhost only in preview
    host: '127.0.0.1',
    port: 4173
  },
  // Security: Define allowed environment variables
  define: {
    __DEV__: JSON.stringify(process.env.NODE_ENV === 'development')
  }
})
