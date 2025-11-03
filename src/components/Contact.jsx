import { MapPin, Phone, Mail } from 'lucide-react'

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault()
    const form = new FormData(e.currentTarget)
    const name = form.get('name')
    alert(`Thanks, ${name}! We’ll confirm your reservation shortly.`)
    e.currentTarget.reset()
  }

  return (
    <section id="visit" className="relative bg-white py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Visit Us</h2>
            <p className="mt-3 text-gray-600">
              123 Ember Lane, Glass District, NY
            </p>
            <div className="mt-6 space-y-3 text-gray-700">
              <p className="flex items-center gap-2"><MapPin size={18} /> Open daily, 5pm – 11pm</p>
              <a className="flex items-center gap-2 hover:underline" href="tel:+1234567890"><Phone size={18} /> +1 (234) 567-890</a>
              <a className="flex items-center gap-2 hover:underline" href="mailto:reservations@glassandflame.com"><Mail size={18} /> reservations@glassandflame.com</a>
            </div>
            <div className="mt-8 h-56 w-full overflow-hidden rounded-2xl border">
              <img
                src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop"
                alt="Map placeholder"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div>
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm">
              <h3 className="text-xl font-semibold text-gray-900">Reserve a Table</h3>
              <p className="mt-1 text-gray-600">We’ll confirm by phone or email.</p>
              <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Name</label>
                  <input
                    name="name"
                    required
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-0 focus:border-gray-900"
                    placeholder="Jane Doe"
                  />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
                    <input
                      type="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-0 focus:border-gray-900"
                      placeholder="jane@email.com"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Phone</label>
                    <input
                      name="phone"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-0 focus:border-gray-900"
                      placeholder="(555) 555-5555"
                    />
                  </div>
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Date</label>
                    <input
                      type="date"
                      name="date"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-0 focus:border-gray-900"
                    />
                  </div>
                  <div>
                    <label className="mb-1 block text-sm font-medium text-gray-700">Time</label>
                    <input
                      type="time"
                      name="time"
                      required
                      className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-0 focus:border-gray-900"
                    />
                  </div>
                </div>
                <div>
                  <label className="mb-1 block text-sm font-medium text-gray-700">Guests</label>
                  <select
                    name="guests"
                    className="w-full rounded-lg border border-gray-300 bg-white px-3 py-2 outline-none ring-0 focus:border-gray-900"
                  >
                    {[...Array(8)].map((_, i) => (
                      <option key={i + 1} value={i + 1}>{i + 1}</option>
                    ))}
                  </select>
                </div>
                <button
                  type="submit"
                  className="mt-2 inline-flex w-full items-center justify-center rounded-lg bg-gray-900 px-4 py-2 font-semibold text-white hover:bg-gray-800"
                >
                  Request Reservation
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
