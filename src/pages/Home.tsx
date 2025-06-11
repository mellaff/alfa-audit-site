import { useTranslation } from 'react-i18next'
import heroImage from '../assets/hero.jpg'
import overlayImage from '../assets/hero-overlay.png'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const { t } = useTranslation()
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/about');
    };

    return (
        <section className="hero-split">
            <div className="hero-left">
                <div className="hero-content">
                    <p className="subtitle">{t('subtitle')}</p>
                    <h1 className="title">{t('support_message')}</h1>
                    <button className="cta" onClick={handleReadMore}>
                        {t('read_more')}
                    </button>
                </div>
            </div>
            <div className="hero-right">
                <img src={heroImage} alt="Team" className="hero-img"/>
                <img src={overlayImage} alt="" className="hero-overlay" />
            </div>
        </section>
    )
}

export default Home
