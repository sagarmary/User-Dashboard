import { useParams, Link } from 'react-router-dom'
import { useUsers } from '../context/UserContext'

export default function UserDetails() {
  const { id } = useParams()
  const { users } = useUsers()
  const user = users.find(u => String(u.id) === String(id))

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-4 mt-10">
        <p className="text-red-500">User not found.</p>
        <Link
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          to="/"
        >
          ← Back
        </Link>
      </div>
    )
  }

  const addr = user.address || {}
  const geo = addr.geo || {}

  return (
    <section className="flex flex-col gap-6">
      <Link
        className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition w-max"
        to="/"
      >
        ← Back
      </Link>

      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-2xl font-bold mb-4 text-gray-800">{user.name}</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-700">Contact</h4>
            <p className="text-gray-600 mb-1"><strong>Email:</strong> {user.email || '—'}</p>
            <p className="text-gray-600 mb-1"><strong>Phone:</strong> {user.phone || '—'}</p>
            <p className="text-gray-600 mb-1"><strong>Website:</strong> {user.website || '—'}</p>
            <p className="text-gray-600"><strong>Company:</strong> {user.company?.name || '—'}</p>
          </div>

          {/* Address Info */}
          <div>
            <h4 className="font-semibold mb-2 text-gray-700">Address</h4>
            <p className="text-gray-600 mb-1">{addr.street} {addr.suite}</p>
            <p className="text-gray-600 mb-1">{addr.city} {addr.zipcode}</p>
            <p className="text-gray-500">Geo: {geo.lat}, {geo.lng}</p>
          </div>

        </div>
      </div>
    </section>
  )
}
