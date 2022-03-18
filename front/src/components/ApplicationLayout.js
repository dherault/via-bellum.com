import Header from './Header'

function ApplicationLayout({ children }) {
  return (
    <div className="y1 minh100vh">
      <Header />
      <div className="flex-grow y1 w100">
        {children}
      </div>
    </div>
  )
}

export default ApplicationLayout
