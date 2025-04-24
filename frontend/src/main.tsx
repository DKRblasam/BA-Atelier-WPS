import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './Styles/main.css'
import App from './components/App.tsx'
import './Styles/tailwind.css'
import "./Styles/servicios.css";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
