import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'urql'

import ApplicationLayout from './components/ApplicationLayout'

import Router from './Router'

import client from './client'

function App() {
  return (
    <BrowserRouter>
      <Provider value={client}>
        <ApplicationLayout>
          <Router />
        </ApplicationLayout>
      </Provider>
    </BrowserRouter>
  )
}

export default App
