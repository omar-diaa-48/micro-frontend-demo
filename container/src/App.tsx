import { lazy, Suspense } from 'react'
import {
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import './App.css'

const LazyVueLanding = lazy(() => import("./components/LandingVue"))
const LazyReactLanding = lazy(() => import("./components/LandingReact"))

function App() {
  const navigate = useNavigate();
  return (
    <div className="container" >
      <p>This is from container react</p>
      <button onClick={() => navigate('/vue')}>Show vue remote</button>
      <button onClick={() => navigate('/react')}>Show react remote</button>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path='/vue' Component={LazyVueLanding} />
          <Route path='/react' Component={LazyReactLanding} />
        </Routes>
      </Suspense>
    </div>
  )
}

export default App
