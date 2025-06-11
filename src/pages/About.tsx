import { useTranslation } from "react-i18next";
import './About.css';
import overlayImage from '../assets/hero-overlay.png'

const About = () => {
    const { t } = useTranslation();

    return (
        <main className="about-page">
            <img src={overlayImage} alt="" className="overlay-image" />
            <section className="about-section">
                <h1>{t("about.title")}</h1>
                <p>{t("about.description1")}</p>
                <p>{t("about.description2")}</p>
                <p>{t("about.description3")}</p>
                <p>{t("about.description4")}</p>
            </section>

            <section className="about-section">
                <h2>{t("about.whyTitle")}</h2>
                <ul>
                    <li><strong>{t("about.professionalismTitle")}:</strong> {t("about.professionalismText")}</li>
                    <li><strong>{t("about.individualTitle")}:</strong> {t("about.individualText")}</li>
                    <li><strong>{t("about.independenceTitle")}:</strong> {t("about.independenceText")}</li>
                    <li><strong>{t("about.transparencyTitle")}:</strong> {t("about.transparencyText")}</li>
                </ul>
            </section>

            <section className="about-section">
                <h2>{t("about.missionTitle")}</h2>
                <p>{t("about.missionText")}</p>
            </section>

            <section className="about-section">
                <h2>{t("about.easyTitle")}</h2>
                <p>{t("about.easyText")}</p>
            </section>
        </main>
    );
};

export default About;
