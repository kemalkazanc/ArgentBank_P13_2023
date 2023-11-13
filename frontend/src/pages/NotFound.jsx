import { Link } from 'react-router-dom'
import Header from '../components/Header.jsx'
import Footer from '../components/Footer.jsx'

function NotFound() {
  return (
    <>
      <Header />
      <main className="error">
        <h2 className="titleError">404</h2>
        <p className="paragraph">Page not found</p>
        <Link to="/" className="errorLink">
          Return to the home page
        </Link>
      </main>
      <Footer />
    </>
  )
}

export default NotFound;
