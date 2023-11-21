import { lazy } from 'react'
import './App.css'

const LazyVueLanding = lazy(() => import("./components/LandingVue"))
const LazyReactLanding = lazy(() => import("./components/LandingReact"))

function App() {
  return (
    <div className="container" >
      <p>This is from container react</p>
      <LazyVueLanding />
      <LazyReactLanding />
    </div>
  )
}

export default App
