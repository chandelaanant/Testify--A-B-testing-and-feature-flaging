import { Routes, Route, Navigate } from 'react-router-dom'
import Landing from './Pages/Landing'
import Auth from './Pages/Auth'
import RoleSelection from './Pages/RoleSelection'
import Dashboard from './Pages/Dashboard'
import ProtectedRoute from './components/ProtectedRoute'
import PublicRoute from './components/PublicRoute'
import { AuthProvider } from './context/AuthContext'

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public only — redirect to dashboard if already logged in */}
        <Route path="/" element={
          <PublicRoute>
            <Landing />
          </PublicRoute>
        } />
        <Route path="/auth" element={
          <PublicRoute>
            <Auth />
          </PublicRoute>
        } />

        {/* Semi-public — you can decide later if this needs protection */}
        <Route path="/role-selection" element={<RoleSelection />} />

        {/* Protected — redirect to /auth if not logged in */}
        <Route path="/dashboard" element={
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        } />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </AuthProvider>
  )
}