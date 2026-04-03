import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import RoleSelection from './Pages/RoleSelection'
import Dashboard from './Pages/Dashboard'

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Landing />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/role-selection" element={<RoleSelection />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}