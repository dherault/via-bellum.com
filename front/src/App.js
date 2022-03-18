import { Suspense, lazy } from 'react'
import {
  BrowserRouter,
  Route,
  Routes,
} from 'react-router-dom'

import ApplicationLayout from './components/ApplicationLayout'

const Home = lazy(() => import('./scenes/Home'))

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
      </Routes>
    </BrowserRouter>
  )
}

export default App
