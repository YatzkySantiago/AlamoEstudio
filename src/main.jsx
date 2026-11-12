import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const container = document.getElementById('root')
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// In production the HTML is prerendered (scripts/prerender.js), so React hydrates it.
if (container.firstElementChild) hydrateRoot(container, app)
else createRoot(container).render(app)
