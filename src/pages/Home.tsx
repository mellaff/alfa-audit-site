import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.jpg'
import overlayImage from '../assets/hero-overlay.png'
import './Home.css'

const Home = () => {
    const { t } = useTranslation()

    return (
        <section
            className="hero"
            style={{ backgroundImage: `url(${heroImage})` }}
        >
            <img src={overlayImage} alt="" className="hero-overlay-image" />
            <div className="hero-content">
                <p className="subtitle">{t('subtitle')}</p>
                <h1 className="title">{t('support_message')}</h1>
                <button className="cta">{t('read_more')}</button>
            </div>
        </section>
    )
}

export default Home
