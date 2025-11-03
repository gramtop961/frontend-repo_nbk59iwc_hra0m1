import Spline from '@splinetool/react-spline'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="home" className="relative h-[95vh] w-full overflow-hidden">
      {/* Spline 3D background */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/ESO6PnMadasO0hU3/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* subtle gradient overlays that do not block interaction */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-white"></div>
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-white"></div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex h-full max-w-7xl items-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="max-w-xl rounded-2xl border border-white/30 bg-white/20 p-6 backdrop-blur-xl shadow-xl"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white drop-shadow-md">
            Modern Dining, Crafted with Fire
          </h1>
          <p className="mt-4 text-white/90">
            A vibrant, technology-forward restaurant experience—where glassy aesthetics meet flame-kissed flavors.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="#menu"
              className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2 font-semibold text-gray-900 shadow hover:bg-white/90"
            >
              View Menu
            </a>
            <a
              href="#visit"
              className="inline-flex items-center justify-center rounded-full bg-gray-900/80 px-5 py-2 font-semibold text-white shadow hover:bg-gray-900"
            >
              Book a Table
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
