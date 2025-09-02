import { Link } from 'react-router-dom'

export default function UserCard({ user }) {
  return (
    <Link
      to={`/user/${user.id}`}
      className="bg-white shadow-md hover:shadow-xl rounded-lg p-4 transition transform hover:-translate-y-1"
    >
      <h3 className="text-lg font-bold text-gray-800 mb-1">{user.name}</h3>
      <p className="text-gray-600 mb-1">{user.email}</p>
      <p className="text-gray-600 mb-1">{user.phone}</p>
      <p className="text-gray-500 text-sm">{user.company?.name || '—'}</p>
    </Link>
  )
}
