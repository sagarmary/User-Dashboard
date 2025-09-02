import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import UserDetails from './pages/UserDetails'

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50 font-sans text-gray-800">
      
      {/* Header */}
      <header className="bg-blue-600 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <NavLink
            to="/"
            className="text-2xl font-bold hover:text-blue-300 transition-colors duration-300"
          >
            User Dashboard
          </NavLink>
          <nav className="space-x-4">
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? 'text-white font-semibold underline'
                  : 'text-blue-200 hover:text-white transition-colors duration-300'
              }
            >
              Dashboard
            </NavLink>
            
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow container mx-auto px-6 py-8">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
      </main>

      {/* Footer */}
      <footer className="bg-gray-100 text-gray-500 py-4 mt-auto">
        <div className="container mx-auto px-6 text-center text-sm">
          © {new Date().getFullYear()} User Dashboard
        </div>
      </footer>
    </div>
  )
}
