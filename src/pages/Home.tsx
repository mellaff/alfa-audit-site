import {useTranslation} from 'react-i18next'
import overlayImage from '../assets/hero-overlay.png'
import './Home.css'
import {useNavigate} from 'react-router-dom';
import {Swiper, SwiperSlide} from 'swiper/react'
import {Autoplay, Navigation} from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/autoplay'
import 'swiper/css/navigation'
import Lottie from "lottie-react";
import heroAnimation from "../assets/hero-animation.json";

import logo1 from '../assets/ԵրՋէկ.png'
import logo2 from '../assets/niko.svg'
import logo3 from '../assets/ag group.jpeg'
import logo4 from '../assets/բիդեք.png'
import logo5 from '../assets/cdbr.png'
import logo6 from '../assets/arndane.webp'
import logo7 from '../assets/shinvector.png'
import logo8 from '../assets/domus.svg'
import logo9 from '../assets/ուրարտու.png'
import logo10 from '../assets/comfort.svg'
import logo11 from '../assets/exterior.png'
import logo12 from '../assets/valangr.png'
import logo13 from '../assets/ադամիում.svg'
import logo14 from '../assets/erebuni.png'
import logo15 from '../assets/grom.png'
import logo16 from '../assets/աաբ.png'
import logo17 from '../assets/tashir.svg'
import logo18 from '../assets/atenq.png'
import logo19 from '../assets/elnor.png'
import logo20 from '../assets/galleria.png'
import logo21 from '../assets/himndr.jpeg'
import logo22 from '../assets/հանրպ.jpeg'
import logo23 from '../assets/art.png'
import logo24 from '../assets/xrt.webp'
import logo25 from '../assets/shell.png'
import logo26 from '../assets/alex.png'
import logo27 from '../assets/danielyan.png'
import logo28 from '../assets/daroynq.png'
import logo29 from '../assets/cbs.jpeg'
import logo30 from '../assets/rbty.png'
import logo31 from '../assets/time.svg'
import logo32 from '../assets/eua.png'
import logo33 from '../assets/casadel.jpeg'
import logo34 from '../assets/eldorado.png'
import logo35 from '../assets/hayasy.png'
import logo36 from '../assets/sas.jpeg'
import logo37 from '../assets/globbing.png'



const partners = [
    {name: "Երևան Ջէկ", logo: logo1, link: "https://ytpc.am/"},
    {name: "Niko կահույք", logo: logo2, link: "https://niko.am"},
    {name: "ԷյՋի Գրուպ ՍՊԸ", logo: logo3, link: "https://example.com/3"},
    {name: "Բիդեք ՍՊԸ", logo: logo4, link: "https://www.bedeck.am"},
    {name: "Կաֆե Դյու Բրազիլ ՍՊԸ", logo:logo5, link: "http://www.cafedubrazil.am"},
    {name: "Արնդանե ՍՊԸ", logo:logo6, link: "https://arndane.com"},
    {name: "Շինվեկտոր ՍՊԸ", logo:logo7, link: "https://site.shinvector.am"},
    {name: "Դոմուս ՓԲԸ", logo:logo8, link: "https://domus.am"},
    {name: "Ուրարտու ֆուտբոլային ակումբ", logo:logo9, link: "https://www.fcurartu.am"},
    {name: "Էկոպրոֆ", logo:logo10, link: "https://www.comfort.am"},
    {name: "Էքստերիեր Գրուպ ՍՊԸ", logo:logo11, link: "https://exterior.am"},
    {name: "Վալան Գրուպ ՍՊԸ", logo:logo12, link: "https://www.valangroup.am"},
    {name: "Ադամիում ՍՊԸ", logo:logo13, link: "https://www.adamium.com"},
    {name: "Էրեբունի բժշկական ակադեմիա", logo:logo14, link: "https://erebuniacademy.am"},
    {name: "Գռօմ ՍՊԸ", logo:logo15, link: "https://grom.am"},
    {name: "Փրայմ Ինշուըրնս ՍՊԸ", logo:logo16, link: "https://www.prime-insurance.com"},
    {name: "Տաշիր Պիցցա", logo:logo17, link: "https://tashirpizza.am"},
    {name: "Աթենք ՍՊԸ", logo:logo18, link: "https://www.atenk.am"},
    {name: "Միլլկաթ ՍՊԸ", logo:logo19, link: "https://elnor.am"},
    {name: "Գրիտտի ՍՊԸ", logo:logo20, link: "http://www.lagalleria.am"},
    {name: "Հայոց ցեղասպանության թանգարան-ինստիտուտ հիմնադրամ", logo:logo21, link: "https://genocide-museum.am/"},
    {name: "Վերարտադրողական", logo:logo22, link: "https://www.spyur.am/am/companies/republican-institute-of-reproductive-health-perinatology-obstetrics-and-gynaecology/1231/"},
    {name: "Արթ-Գրուպ ՍՊԸ", logo:logo23, link: "https://art-group.am"},
    {name: "Իքս Արտ", logo:logo24, link: "https://www.x-art.am"},
    {name: "Ռոյալ Օյլ ՍՊԸ", logo:logo25, link: "https://www.shell.am/"},
    {name: "Ալեքս Տեքստիլ ՍՊԸ", logo:logo26, link: "https://alextextile.am/hy/"},
    {name: "Դանիելյան ՍՊԸ", logo:logo27, link: "https://danielyanllc.am"},
    {name: "Դարոյնք ՍՊԸ", logo:logo28, link: "https://daroink.am"},
    {name: "Քեյր Բիլդինգ Սերվիզիս ՍՊԸ", logo:logo29, link: "https://cbs-construction.am/"},
    {name: "Փիրալյան ՍՊԸ", logo:logo30, link: "https://www.robertopiraloff.com"},
    {name: "ԹԱՅՄԼԵՍ ՍՊԸ", logo:logo31, link: "https://time.am/"},
    {name: "Եվրոպական համալսարան հիմնադրամ", logo:logo32, link: "https://eua.am"},
    {name: "Կասադել Սթոր ՍՊԸ", logo:logo33, link: "https://casadel.am"},
    {name: "Էլ մարկետ ՍՊԸ", logo:logo34, link: "https://eldorado.am"},
    {name: "Հայասի Գրուպ ՍՊԸ", logo:logo35, link: "https://hayasy.am"},
    {name: "Սաս-Գրուպ ՍՊԸ", logo:logo36, link: "https://www.sas.am"},
    {name: "Գլոբալ Շիփփինգ ՍՊԸ", logo:logo37, link: "https://am.globbing.com/"}


];


const Home = () => {
    const {t} = useTranslation()
    const navigate = useNavigate();

    const handleReadMore = () => {
        navigate('/about');
    };

    return (
        <div className="whole-wrapper">
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
                    {/*<img src={heroImage} alt="Team" className="hero-img"/>*/}
                    <Lottie animationData={heroAnimation} loop={true} className="lottie"/>
                </div>
            </section>
            <div className="section-divider">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="divider-svg">
                    <path fill="#3a260b" d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z" />
                </svg>
            </div>
            <section className="partner-carousel-section">
                <h2 className="partner-title">{t('our_partners')}</h2>

                <div className="carousel-wrapper">
                    <div className="swiper-button-prev custom-swiper-prev"></div>
                    <Swiper
                        modules={[Autoplay, Navigation]}
                        navigation={{
                            nextEl: '.custom-swiper-next',
                            prevEl: '.custom-swiper-prev',
                        }}
                        spaceBetween={1}
                        loop={true}
                        autoplay={{delay: 2500}}
                        breakpoints={{
                            0: { slidesPerView: 1, centeredSlides: true, spaceBetween: 16 },   // phones
                            768: { slidesPerView: 4, spaceBetween: 24 },                       // tablets
                            1024: { slidesPerView: 5, spaceBetween: 32 },
                        }}
                    >
                        {partners.map((partner, index) => (
                            <SwiperSlide
                                key={index}
                                className={`partner-slide ${index === 2 ? 'large-logo' : ''}`}
                            >
                                <a href={partner.link} target="_blank" rel="noopener noreferrer">
                                    <img src={partner.logo} alt={partner.name}/>
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                    <div className="swiper-button-next custom-swiper-next"></div>
                </div>
            </section>
            <div className="section-divider bottom-divider">
                <svg viewBox="0 0 1440 100" preserveAspectRatio="none" className="divider-svg">
                    <path fill="#3a260b" d="M0,100 C360,0 1080,0 1440,100 L1440,0 L0,0 Z" />
                </svg>
            </div>

            <img src={overlayImage} alt="" className="hero-overlay"/>
        </div>
    )
}

export default Home
