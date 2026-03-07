import './PageHeader.css';
import HamburgerButton from '../assets/icons/hamburger_button_2.png';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export function PageHeader({ substituteLink, navlink, setNavLink, originalHostelCardData, sethostelsCardData, setHostelFound }) {
    // const [navlink, setNavLink] = useState(false)

    function renderHamburgerMenu(){
        if(!navlink){
            setNavLink(true)
        }else{
            setNavLink(false)
        }
    }

    //THIS WILL CHECK IF THE TARGET IS NOT THE HAMBURGER 
    // BUTTON, NAVLINKS MENU, AND IF THE NAVLINKS IS OPEN, 
    // IF THE CONDIOTIONS A TRUE , THE IF THE DOCUMENT IS 
    // CLICKED THE NAVLINK MEMU IS REMOVED
    document.addEventListener('click', (event) => {
        if(navlink && !event.target.closest('.navigation-links') && !event.target.closest('.hamburger-button'))
        setNavLink(false)
    })
    function resetValues(){
        sethostelsCardData(originalHostelCardData)   
        setHostelFound(true)
    }

    return (
        <>
            <section className="header-section">
                <Link className="episilion" to="/" onClick={resetValues}>
                    <div className='episilion-container'>       
                        <p > <img src="/episilion_logo.svg" alt="" className='episilion-logo' />Episilion <div>Hostels</div></p>
                    </div>
                    
                </Link>
                <nav className={`navigation-links ${navlink ? 'active' : ''}`}>
                    {substituteLink}
                    <NavLink className="link about-us-link" to="/aboutus">About Us</NavLink>
                    <Link className="link" to="/">Ask Episilion</Link>
                    <NavLink className="link more-from-us" to="/morefromus">More From Us</NavLink>
                    {/* <div className="login-systems">
                        <Link to="/login">LOGIN</Link>
                        <Link to="/signup">SIGN UP</Link>
                    </div> */}
                </nav>

                <button className="hamburger-button" aria-label="Menu" onClick={renderHamburgerMenu}>
                    <img src={HamburgerButton} alt="Menu"></img>
                </button>
            </section>
        </>
    )
}