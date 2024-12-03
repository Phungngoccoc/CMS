import { BrowserRouter as Router } from 'react-router-dom'
import Header from './componient/Header_Footer/Header'
import Footer from './componient/Header_Footer/Footer'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoute from './route/AppRoute'
function App() {
  return (
    <Router>
      <Header />
      <AppRoute />
      <Footer />
    </Router>
  )
}

export default App
