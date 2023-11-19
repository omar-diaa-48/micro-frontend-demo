import { lazy } from 'react'
import './App.css'

const LazyLanding = lazy(() => import("./components/Landing"))

function App() {
  return (
    <div>
      <p>Container App</p>
      <LazyLanding />
    </div>
  )
}

export default App
