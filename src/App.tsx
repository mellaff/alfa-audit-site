import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Reports from './pages/Reports'
import Contact from './pages/Contact'
import Header from './components/Header'
import Footer from './components/Footer'
import ScrollToTop from './components/ScrollToTop';

const App = () => {
    return (
        <div className="page-container">
            <ScrollToTop />
            <Header />
            <main className="page-content">
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/reports" element={<Reports />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
                </main>
            <Footer />
        </div>
    )
}

export default App
