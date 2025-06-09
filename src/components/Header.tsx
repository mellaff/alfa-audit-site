import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import logo from '../assets/logo.png'
import './Header.css'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    const [langOpen, setLangOpen] = useState(false)
    const { i18n, t } = useTranslation()
    const dropdownRef = useRef<HTMLDivElement>(null)

    const changeLanguage = (lng: string) => {
        i18n.changeLanguage(lng)
        setLangOpen(false)
    }

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setLangOpen(false)
            }
        }
        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    return (
        <header className="header">
            <div className="header-container">
                <Link to="/">
                    <img src={logo} alt="Alfa Audit" className="header-logo" />
                </Link>

                <nav className={`nav-links ${menuOpen ? 'open' : ''}`}>
                    <Link to="/" onClick={() => setMenuOpen(false)}>{t('home')}</Link>
                    <Link to="/about" onClick={() => setMenuOpen(false)}>{t('about')}</Link>
                    <Link to="/services" onClick={() => setMenuOpen(false)}>{t('services')}</Link>
                    <Link to="/reports" onClick={() => setMenuOpen(false)}>{t('reports')}</Link>
                    <Link to="/contact" onClick={() => setMenuOpen(false)}>{t('contact')}</Link>

                    <div className="lang-dropdown" ref={dropdownRef}>
                        <button className="lang-toggle" onClick={() => setLangOpen(!langOpen)} aria-label="Language selector">
                            🌐
                        </button>
                        {langOpen && (
                            <ul className="lang-options">
                                <li onClick={() => changeLanguage('en')}>🇬🇧 English</li>
                                <li onClick={() => changeLanguage('hy')}>🇦🇲 Հայերեն</li>
                            </ul>
                        )}
                    </div>
                </nav>

                <button
                    className={`hamburger ${menuOpen ? 'open' : ''}`}
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle navigation"
                >
                    <span />
                    <span />
                    <span />
                </button>
            </div>
        </header>
    )
}

export default Header
