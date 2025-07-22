// React core imports
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'

// Main application component
import App from './App.tsx'

// Global styles including Tailwind CSS configuration
import './index.css'

/**
 * Application entry point
 * Renders the React app with routing capabilities and strict mode for development
 */
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* BrowserRouter enables client-side routing for SPA functionality */}
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>,
)
