import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

const mount = (el: HTMLDivElement) => {
  ReactDOM.createRoot(el).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  )
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector<HTMLDivElement>('#_landing-react-dev-root')

  if (devRoot) {
    mount(devRoot)
  }
}

export { mount };