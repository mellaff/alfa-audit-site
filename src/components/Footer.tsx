import './Footer.css'
import logo from '../assets/logo.png'
import { useTranslation } from 'react-i18next'
import { Link } from 'react-router-dom';

const Footer = () => {
    const { t } = useTranslation()

    return (
        <footer className="footer">
            <div className="footer-overlay"></div>

            <div className="footer-content">
                <div className="footer-section logo-section">
                    <img src={logo} alt="Logo" className="footer-logo" />
                </div>

                <div className="footer-section">
                    <h3>{t('useful_links')}</h3>
                    <ul>
                        <li><Link to="/about">{t('who_we_are')}</Link></li>
                        <li><Link to="/services">{t('services_p')}</Link></li>
                        <li><Link to="/reports">{t('reports')}</Link></li>
                        <li><Link to="/contact">{t('contact_us')}</Link></li>
                    </ul>
                </div>

                <div className="footer-section">
                    <h3>{t('our_address')}</h3>
                    <p>{t('location_line_1')}<br />{t('location_line_2')}<br />{t('location_line_3')}</p>
                    <p>{t('working_hours')}</p>
                    <div className="phone-numbers">
                        <p>{t('phone_1')}</p>
                        <p>{t('phone_2')}</p>
                    </div>
                </div>
                <br />
            </div>

            <div className="footer-bottom">
                © 2025 ALFA AUDIT | {t('all_rights_reserved')}
            </div>
        </footer>
    )
}

export default Footer
