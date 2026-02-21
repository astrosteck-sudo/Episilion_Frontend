import './SiteFooter.css'




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
                        <a href="abouts/about.html">About Us</a>
                        <a href="more_from_us/more_from_us.html">More From Us</a>
                        <a href="">Join Us</a>
                    </nav>
                </div>
            </footer>
        </>
    )
}