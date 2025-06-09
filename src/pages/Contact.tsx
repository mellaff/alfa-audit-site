import { useTranslation } from 'react-i18next'
import overlayImage from '../assets/hero-overlay.png'
import './Contact.css'
import emailjs from 'emailjs-com'
import {useState} from "react";

const Contact = () => {
    const { t } = useTranslation()
    const [mapLoaded, setMapLoaded] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = e.currentTarget

        const templateParams = {
            name: form.name.value,
            surname: form.surname.value,
            email: form.email.value,
            message: form.message.value
        }

        try {
            await emailjs.send(
                'service_npxj7b2',
                'template_63pyegh',
                templateParams,
                'bxsud3HuYzYg35OUS'
            )

            form.reset()
            alert(t('message_sent'))
        } catch (error) {
            console.error('EmailJS error:', error)
            alert(t('message_error'))
        }
    }


    return (
        <main className="contact-page">
            <img src={overlayImage} alt="" className="contact-overlay-image" />

            <div className="contact-content">
                <h1>{t('contact_us')}</h1>

                <div className="contact-columns">
                    <div className="contact-info">
                        <p>{t('location_line_1')}, {t('location_line_2')}, {t('location_line_3')}</p>
                        <p>{t('working_hours')}</p>
                        <p>{t('phone_1')}</p>
                        <p>{t('phone_2')}</p>
                        <p>Email: info@alfaaudit.am</p>

                        <div className="form-intro">
                            <p>{t('form_intro', 'Please fill out the form below and we’ll get back to you as soon as possible.')}</p>
                        </div>

                        <form className="contact-form" onSubmit={handleSubmit}>
                            <input name="name" type="text" placeholder={t('name')} required />
                            <input name="surname" type="text" placeholder={t('surname')} required />
                            <input name="email" type="email" placeholder={t('email')} required />
                            <textarea name="message" rows={5} placeholder={t('message')} required></textarea>
                            <button type="submit">{t('send')}</button>
                        </form>
                    </div>

                    <div className="contact-right">
                        {!mapLoaded && <div className="loader">Loading map...</div>}
                        <iframe
                            onLoad={() => setMapLoaded(true)}
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.242579126679!2d44.4816458!3d40.1936559!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4041aafc6e786c4f%3A0x7b74df87caa3d21d!2zNS82IEhhbGFieWFuIFN0LCBZZXJldmFuLCDQkNGA0LXQutGB0YLRgNC-0LTRgdC60LDRjyDQotCy0LDQt9C-0YHRgtCw0L3QvdGL!5e0!3m2!1sen!2sam!4v1682938471321!5m2!1sen!2sam"
                            loading="lazy"
                            allowFullScreen
                            referrerPolicy="no-referrer-when-downgrade"
                            title="Company location"
                        ></iframe>
                    </div>
                </div>
            </div>
        </main>
    )
}

export default Contact
