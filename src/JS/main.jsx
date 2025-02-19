import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import '../CSS/index.css'
import App from '../elements/App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <div className="elementos">
      <App />
    </div>
  </StrictMode>,
)
