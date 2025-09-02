import { useMemo, useState } from 'react'
import { useUsers } from '../context/UserContext'
import UserCard from '../components/UserCard'
import UserForm from '../components/UserForm'

export default function Dashboard() {
  const { users, loading, error, addUser } = useUsers()
  const [q, setQ] = useState('')
  const [open, setOpen] = useState(false)

  const filtered = useMemo(() => {
    const term = q.toLowerCase()
    return users.filter(u => u.name.toLowerCase().includes(term))
  }, [users, q])

  return (
    <section className="flex flex-col gap-6">
      
      {/* Search + Add User */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <input
          type="text"
          placeholder="Search by name..."
          value={q}
          onChange={(e) => setQ(e.target.value)}
          className="flex-1 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white text-gray-800"
        />
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-500 transition"
        >
          Create New User
        </button>
      </div>

      {/* Loading Skeleton */}
      {loading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {Array(8).fill().map((_, i) => (
            <div
              key={i}
              className="bg-gray-200 h-32 rounded-lg animate-pulse"
            />
          ))}
        </div>
      )}

      {/* Error Message */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Users */}
      {!loading && !error && (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filtered.map(user => (
            <UserCard key={user.id} user={user} />
          ))}
        </div>
      )}

      {/* User Form Modal */}
      {open && <UserForm onSubmit={addUser} onClose={() => setOpen(false)} />}
    </section>
  )
}
