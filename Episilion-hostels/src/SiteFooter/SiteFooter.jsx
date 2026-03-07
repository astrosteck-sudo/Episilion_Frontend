import './SiteFooter.css'
import { Link } from 'react-router-dom'



export function SiteFooter() {


    return (
        <>
            <section className="hostels-section">
                <div className="hostels-cards js-hostel-cards"></div>
            </section>
            <footer className="site-footer">
                <div className="footer-content">
                    <p id="all-rights-text">&copy; 2026 Episilion. All rights reserved.</p>
                    <nav className="footer-links">
                        <Link to="/aboutus">About Us</Link>
                        <Link to="/morefromus">More From Us</Link>
                        <Link to="/">Join Us</Link>
                    </nav>
                </div>
            </footer>
        </>
    )
}