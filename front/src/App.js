import { BrowserRouter } from 'react-router-dom'

import ApplicationLayout from './components/ApplicationLayout'

import Router from './Router'

function App() {
  return (
    <BrowserRouter>
      <ApplicationLayout>
        <Router />
      </ApplicationLayout>
    </BrowserRouter>
  )
}

export default App
