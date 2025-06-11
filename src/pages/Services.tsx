import { useTranslation } from "react-i18next";
import './Services.css';
import overlayImage from '../assets/hero-overlay.png';

const Services = () => {
    const { t } = useTranslation();

    return (
        <main className="services-page">
            <img src={overlayImage} alt="" className="overlay-image" />

            <section className="services-section">
                <h1>{t("services.title")}</h1>
                <p className="services-description">{t("services.description")}</p>
            </section>

            <section className="services-section">
                <h2>{t("services.audit.title")}</h2>
                <p>{t("services.audit.description1")}</p>
                <p>{t("services.audit.description2")}</p>
                <p>{t("services.audit.description3")}</p>
                <ul>
                    <li><strong>{t("services.audit.point1.title")}:</strong> {t("services.audit.point1.text")}</li>
                    <li><strong>{t("services.audit.point2.title")}:</strong> {t("services.audit.point2.text")}</li>
                    <li><strong>{t("services.audit.point3.title")}:</strong> {t("services.audit.point3.text")}</li>
                    <li><strong>{t("services.audit.point4.title")}:</strong> {t("services.audit.point4.text")}</li>
                    <li><strong>{t("services.audit.point5.title")}:</strong> {t("services.audit.point5.text")}</li>
                </ul>
                <p>{t("services.audit.conclusion")}</p>
            </section>

            <section className="services-section">
                <h2>{t("services.consulting.title")}</h2>
                <p>{t("services.consulting.description1")}</p>
                <p>{t("services.consulting.description2")}</p>
                <p>{t("services.consulting.description3")}</p>
                <p>{t("services.consulting.description4")}</p>
            </section>

            <section className="services-section">
                <h2>{t("services.accounting.title")}</h2>
                <p>{t("services.accounting.description1")}</p>
                <p>{t("services.accounting.description2")}</p>
                <ul>
                    <li>{t("services.accounting.list.0")}</li>
                    <li>{t("services.accounting.list.1")}</li>
                    <li>{t("services.accounting.list.2")}</li>
                    <li>{t("services.accounting.list.3")}</li>
                    <li>{t("services.accounting.list.4")}</li>
                </ul>
            </section>
        </main>
    );
};

export default Services;
