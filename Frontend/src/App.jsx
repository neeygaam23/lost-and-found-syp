import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'
import AboutUsPage from './pages/AboutUs.jsx'
import Frontpage from './pages/Frontpage.jsx'
import DashBoard from './pages/DashBoard.jsx'

function RequireVerified({ children }) {
  const isVerified = localStorage.getItem('lf_verified') === 'true'

  if (!isVerified) {
    return <Navigate to="/register" replace />
  }

  return children
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frontpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/dashboard" element={<RequireVerified><DashBoard /></RequireVerified>} />
      </Routes>
    </Router>
  )
}

export default App
