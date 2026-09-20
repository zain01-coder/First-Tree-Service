import { Route, Routes } from 'react-router-dom'
import ScrollManager from './components/layout/ScrollManager'
import Home from './pages/Home'
import About from './pages/About'

export default function App() {
  return (
    <>
      <ScrollManager />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        {/* Unknown URLs fall back to the home page rather than a dead end. */}
        <Route path="*" element={<Home />} />
      </Routes>
    </>
  )
}
