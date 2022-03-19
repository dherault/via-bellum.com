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
      <Routes>
        <Route
          exact
          path="/"
          element={(
            <ApplicationLayout>
              <Suspense fallback={null}>
                <Home />
              </Suspense>
            </ApplicationLayout>
          )}
        />
        <Route
          exact
          path="/army-creator"
          element={(
            <ApplicationLayout>
              <Suspense fallback={null}>
                <Army />
              </Suspense>
            </ApplicationLayout>
          )}
        />
      </Routes>
    </BrowserRouter>
  )
}

export default App
