import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { HashRouter, BrowserRouter } from 'react-router-dom';
//import './assets/styles/reset.css';
import './assets/styles/fonts.css';
import './assets/styles/variables.css';
//import './assets/styles/helpers.css';
//import './assets/styles/defaults.css';
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // <StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
  // </StrictMode>,
)
