import styles from './footer.module.css'
import { Link } from 'react-router-dom'

export default function Footer() {
    return (
        <footer className={styles.footerContainer}>
            <img src="/imgs/logo.png" alt="" />
            <div>
                <h2>Important Links</h2>
                <div className={styles.linksContainer}>
                    <Link className={styles.link} to={'Front-End-Site-Gastronomico/'}>Homepage</Link>
                    <Link className={styles.link} to={'Front-End-Site-Gastronomico/plates'}>Plates</Link>
                    <Link className={styles.link} to={'Front-End-Site-Gastronomico/profile'}>Profile</Link>
                </div>
            </div>

        </footer>
    )
}