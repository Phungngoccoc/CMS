import { BrowserRouter as Router } from 'react-router-dom'
import Header from './componient/Header/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import AppRoute from './route/AppRoute'
function App() {
  return (
    <Router>
      <Header />
      <AppRoute />
    </Router>
  )
}

export default App
