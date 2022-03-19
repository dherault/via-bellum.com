import './ApplicationLayout.css'

import { useLocation } from 'react-router-dom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from './Header'
import Footer from './Footer'

function ApplicationLayout({ children }) {
  const location = useLocation()

  return (
    <div className="y1 minh100vh">
      <Header />
      <div className="w100 flex-grow y1">
        <TransitionGroup className="w100 flex-grow y1">
          <CSSTransition
            key={location.pathname}
            classNames="applicationLayout-fade"
            className="w100 flex-grow y1"
            timeout={333}
          >
            <div className="w100 flex-grow y1 position-relative">
              {children}
            </div>
          </CSSTransition>
        </TransitionGroup>
      </div>
      <Footer />
    </div>
  )
}

export default ApplicationLayout
