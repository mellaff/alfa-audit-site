import { useEffect, useState } from "react";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { db } from "../services/firebase-config";
import './Reports.css'
import overlayImage from '../assets/hero-overlay.png'
import { useTranslation } from 'react-i18next';

interface Report {
    name: string;
    date: string;
    fileUrl: string;
}

const Reports = () => {
    const [reports, setReports] = useState<Report[]>([]);
    const [loading, setLoading] = useState(true);
    const { t } = useTranslation();

    useEffect(() => {
        const fetchReports = async () => {
            try {
                const q = query(
                    collection(db, "reports"),
                    orderBy("date", "desc")
                );
                const querySnapshot = await getDocs(q);
                const data = querySnapshot.docs.map((doc) => doc.data() as Report);
                setReports(data);
            } catch (err) {
                console.error("Error loading reports:", err);
            } finally {
                setLoading(false);
            }
        };

        fetchReports();
    }, []);

    return (
        <main className="reports-page">
            <img src={overlayImage} alt="" className="overlay-image" />
            <div className="reports-container">
                <h1 className="reports-title">{t('reports_title')}</h1>
                {loading ? (
                    <div className="loader">{t('loading_reports')}</div>
                ) : (
                <table className="reports-table">
                    <thead>
                    <tr>
                        <th>{t('name')}</th>
                        <th>{t('date')}</th>
                    </tr>
                    </thead>
                    <tbody>
                    {reports.map((report, i) => (
                        <tr key={i}>
                            <td>
                                <a
                                    href={report.fileUrl}
                                    rel="noopener noreferrer"
                                    download
                                >
                                    {report.name}
                                </a>
                            </td>
                            <td>{report.date}</td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                )}
            </div>
        </main>
    );
};

export default Reports;
