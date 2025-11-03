import { motion, useScroll, useTransform } from 'framer-motion'
import { Star } from 'lucide-react'
import { useRef } from 'react'

const items = [
  {
    title: 'Coal-Seared Ribeye',
    desc: 'Dry-aged prime beef, herb butter, charred shallots',
    price: 38,
    img: 'https://images.unsplash.com/photo-1551024601-bec78aea704b?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Ember-Roasted Salmon',
    desc: 'Citrus glaze, fennel salad, smoked sea salt',
    price: 29,
    img: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'Truffle Pasta',
    desc: 'Handmade tagliatelle, black truffle, pecorino',
    price: 24,
    img: 'https://images.unsplash.com/photo-1523986371872-9d3ba2e2f642?q=80&w=1200&auto=format&fit=crop',
  },
]

function MenuCard({ item, i }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay: i * 0.07 }}
      className="group overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <img
          src={item.img}
          alt={item.title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-3 left-3 inline-flex items-center gap-1 rounded-full bg-white/90 px-2 py-1 text-xs font-medium text-gray-800">
          <Star size={14} className="text-amber-500" /> Signature
        </div>
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
          <span className="shrink-0 rounded-full bg-gray-900 px-3 py-1 text-sm font-semibold text-white">
            ${item.price}
          </span>
        </div>
        <p className="mt-2 text-gray-600">{item.desc}</p>
      </div>
    </motion.div>
  )
}

export default function Menu() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.9', 'end 0.1'] })
  const y = useTransform(scrollYProgress, [0, 1], [40, -40])

  return (
    <section id="menu" className="relative bg-white py-20">
      <div className="pointer-events-none absolute inset-x-0 -top-10 h-10 bg-gradient-to-b from-white"></div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center text-center">
          <motion.h2
            ref={ref}
            style={{ y }}
            className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900"
          >
            Featured Menu
          </motion.h2>
          <p className="mt-3 max-w-2xl text-gray-600">
            Seasonal ingredients, open-flame cooking, and glassy presentation that lets flavor shine.
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item, idx) => (
            <MenuCard key={item.title} item={item} i={idx} />
          ))}
        </div>
      </div>
    </section>
  )
}
