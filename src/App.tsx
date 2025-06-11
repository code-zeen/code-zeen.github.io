import Contact from './components/specific/contact/Contact.tsx'
import Footer from '@/components/specific/Footer.tsx'
import { Outlet } from '@tanstack/react-router'

function App() {
  return (
    <div className="flex flex-col max-w-[800px] h-screen mx-auto">
      <Contact />
      <Outlet />
      <Footer />
    </div>
  )
}

export default App
