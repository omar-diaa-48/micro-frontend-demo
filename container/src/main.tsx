import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('_container-dev-root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
