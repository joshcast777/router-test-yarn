import './App.css'
import { Navigate, Route, Routes } from 'react-router-dom'
import User from './User'
import Dashboard from './Dashboard'

function App(): React.ReactNode {
  return (
    <Routes>
      <Route path='/dashboard' element={<Dashboard />} />

      <Route path='/user' element={<User />} />

      <Route path='/' element={<Navigate to="/dashboard" />} />
    </Routes>
  )
}

export default App
