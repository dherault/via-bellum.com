import './ApplicationLayout.css'

// import { useLocation } from 'react-router-dom'
// import { CSSTransition, TransitionGroup } from 'react-transition-group'

import Header from './Header'
import Footer from './Footer'

function ApplicationLayout({ children }) {
  // const location = useLocation()

  return (
    <div className="y1 minh100vh">
      <Header />
      <div className="w100 flex-grow y1">
        {children}
      </div>
      <Footer />
    </div>
  )
}

      // <TransitionGroup
      //   component="div"
      //   className="w100 flex-grow y1 position-relative"
      // >
      //   <CSSTransition
      //     key={location.pathname}
      //     classNames="applicationLayout-fade"
      //     timeout={333}
      //   >

      //   </CSSTransition>
      // </TransitionGroup>
export default ApplicationLayout
