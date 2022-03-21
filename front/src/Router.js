import { Suspense, lazy } from 'react'

import { Route, Routes, useLocation } from 'react-router-dom'

const Home = lazy(() => import('./scenes/Home'))
const ArmySelection = lazy(() => import('./scenes/ArmySelection'))
const ArmyComposer = lazy(() => import('./scenes/ArmyComposer'))
const Store = lazy(() => import('./scenes/Store'))

function Router() {
  const location = useLocation()

  return (
    <Routes location={location}>
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
            <ArmySelection />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/army-creator/:faction"
        element={(
          <Suspense fallback={null}>
            <ArmyComposer />
          </Suspense>
        )}
      />
      <Route
        exact
        path="/store"
        element={(
          <Suspense fallback={null}>
            <Store />
          </Suspense>
        )}
      />
    </Routes>
  )
}

export default Router