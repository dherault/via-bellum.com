import { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import ApplicationLayout from './components/ApplicationLayout'

const Home = lazy(() => import('./scenes/Home'))
const Army = lazy(() => import('./scenes/Army'))

function App() {
  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Routes>
          <Route
            exact
            path="/"
            element={(
                <Suspense fallback={null}>
                  <Home />
                </Suspense>
            )}
            />
          <Route
            exact
            path="/army-creator"
            element={(
                <Suspense fallback={null}>
                  <Army />
                </Suspense>
            )}
            />
        </Routes>
      </ApplicationLayout>
    </BrowserRouter>
  )
}

export default App
