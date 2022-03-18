import Header from './Header'

function ApplicationLayout({ children }) {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default ApplicationLayout
