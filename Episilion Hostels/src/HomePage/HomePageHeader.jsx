import './HomePageHeader.css';
import HamburgerButton from '../assets/icons/hamburger_button_2.png';
import { Link } from 'react-router-dom'
// import { useEffect } from 'react';

export function HomePageHeader() {

    return (
        <>
            <section className="header-section">
                <Link className="episilion" to="/">
                    <p>Episilion <div>Hostels</div></p>
                </Link>
                <nav className="navigation-links">
                    <Link className="link" to="/">About Us</Link>
                    <Link className="link" to="/">Ask Episilion</Link>
                    <Link className="link" to="/">More From Us</Link>
                    <div className="login-systems">
                        <a to="/">LOGIN</a>
                        <a to="/">SIGN UP</a>
                    </div>
                </nav>

                <button className="hamburger-button" aria-label="Menu">
                    <img src={HamburgerButton} alt="Menu"></img>
                </button>
            </section>
        </>
    )
}