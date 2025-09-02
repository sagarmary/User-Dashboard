import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import axios from 'axios'

const UserContext = createContext()
export const useUsers = () => useContext(UserContext)

export function UserProvider({ children }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    let ignore = false
    async function fetchUsers() {
      setLoading(true)
      setError('')
      try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users')
        if (!ignore) setUsers(res.data)
      } catch (e) {
        if (!ignore) setError('Failed to fetch users')
      } finally {
        if (!ignore) setLoading(false)
      }
    }
    fetchUsers()
    return () => { ignore = true }
  }, [])

  const addUser = (payload) => {
    // Client-side only: create a new id after the current max
    const maxId = users.reduce((m, u) => Math.max(m, u.id), 0)
    const newUser = {
      id: maxId + 1,
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      website: payload.website || '',
      company: { name: payload.company || '—' },
      address: {
        street: payload.street || '—',
        suite: payload.suite || '—',
        city: payload.city || '—',
        zipcode: payload.zipcode || '—',
        geo: { lat: payload.lat || '0', lng: payload.lng || '0' }
      }
    }
    setUsers((prev) => [newUser, ...prev])
  }

  const value = useMemo(() => ({ users, setUsers, addUser, loading, error }), [users, loading, error])

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}