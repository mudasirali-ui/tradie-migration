import { useLocation } from 'react-router-dom'
import { Navbar } from './Navbar'
import { Footer } from './Footer'

export function Layout({ children }) {
  const location = useLocation()

  return (
    <div className="tc-app">
      <Navbar />
      <main className="tc-main">
        <div key={location.pathname} className="page-transition-wrapper">
          {children}
        </div>
      </main>
      <Footer />
    </div>
  )
}


