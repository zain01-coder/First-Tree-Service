import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/layout/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Gallery from './pages/Gallery'
import ServiceDetail from './pages/ServiceDetail'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/services" element={<Services />} />
        {/* One template renders every service — see pages/ServiceDetail.jsx. */}
        <Route path="/services/:slug" element={<ServiceDetail />} />
        {/* Unknown URLs fall back to the home page rather than a dead end. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
