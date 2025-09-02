import { useState } from 'react'

export default function UserForm({ onSubmit, onClose }) {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', street: '', suite: '', city: '', zipcode: '', lat: '', lng: '', website: ''
  })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })
  const handleSubmit = (e) => {
    e.preventDefault()

    const requiredFields = ['name','email','phone','company','street','suite','city','zipcode','website']
    for (let f of requiredFields) {
      if (!form[f]?.trim()) {
        alert(`${f.charAt(0).toUpperCase()+f.slice(1)} is required`)
        return
      }
    }

    onSubmit(form)
    onClose?.()
  }

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-lg shadow-xl w-full max-w-2xl p-6 relative overflow-y-auto max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Create New User</h2>
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 font-bold text-xl"
        >
          &times;
        </button>

        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {['name','email','phone','company','website','street','suite','city','zipcode','lat','lng'].map((field) => (
            <label key={field} className="flex flex-col">
              <span className="mb-1 font-medium text-gray-700">
                {field}{!['lat','lng'].includes(field) && '*'}
              </span>
              <input
                name={field}
                type={field==='email'?'email':'text'}
                value={form[field]}
                onChange={handleChange}
                placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition bg-white text-gray-800"
              />
            </label>
          ))}

          <div className="md:col-span-2 flex justify-end gap-3 mt-4">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-100 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
