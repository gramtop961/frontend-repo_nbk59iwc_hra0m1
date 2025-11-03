import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Menu from './components/Menu'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <Menu />
        <About />
        <Contact />
      </main>
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 flex items-center justify-between text-sm text-gray-600">
          <p>© {new Date().getFullYear()} Glass & Flame. All rights reserved.</p>
          <a href="#home" className="hover:text-gray-900">Back to top ↑</a>
        </div>
      </footer>
    </div>
  )
}

export default App
