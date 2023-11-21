import { lazy } from 'react'
import './App.css'

const LazyLanding = lazy(() => import("./components/Landing"))

function App() {
  return (
    <div className="container" >
      <p>This is container react app</p>
      <LazyLanding />
    </div>
  )
}

export default App
