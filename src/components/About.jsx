import { motion } from 'framer-motion'

export default function About() {
  return (
    <section id="about" className="relative bg-gradient-to-b from-white to-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Our Story</h2>
            <p className="mt-4 text-gray-600">
              Inspired by modern craft and elemental cooking, Glass & Flame brings a lively dining room and a
              chef-driven menu to the heart of the city. Expect glowing embers, shimmering cocktails, and a warm
              welcome every night.
            </p>
            <p className="mt-3 text-gray-600">
              We source locally, cook over live fire, and plate with a clean, glass-forward aesthetic—delivering a
              truly immersive experience.
            </p>
          </motion.div>

          <div className="relative">
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              src="https://images.unsplash.com/photo-1541542684-4a4cda0b5a29?q=80&w=1200&auto=format&fit=crop"
              alt="Dining room"
              className="h-80 w-full rounded-2xl object-cover shadow-lg"
            />
            <motion.img
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              src="https://images.unsplash.com/photo-1514516430033-b1c67733507d?q=80&w=1200&auto=format&fit=crop"
              alt="Cocktail"
              className="absolute -bottom-8 -right-6 h-40 w-64 rounded-2xl object-cover shadow-xl ring-4 ring-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
