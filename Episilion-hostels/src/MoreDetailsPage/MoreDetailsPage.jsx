import './MoreDetailsPage.css';
import { PageHeader } from '../PageHeader/PageHeader';
import { Link } from 'react-router-dom'
import { SiteFooter } from '../SiteFooter/SiteFooter';
import Phone from '../assets/icons/phone.svg';
import Whatsapp from '../assets/icons/whatsapp-128.svg';
import Email from '../assets/icons/email-14.svg';
import Manager from '../assets/icons/manager-avatar.svg';
import Clock from '../assets/icons/clock.svg';
import closeMapImage from '../assets/icons/close.png';
import { useState } from 'react';


export function MoreDetailsPage({ hostelsCardData, navlink, setNavLink, originalHostelCardData }) {
    const [close, setClose] = useState(true);//THIS CONTROLS THE THE IFRAME, OPENING AND CLOSING IT
    const [activate, setActivate] = useState(false);//THIS CONTROLS THE DARK BACKGROUND WHEN THE LOCATIONS BUTTONS ARE CLICKED



    const params = new URLSearchParams(window.location.search);
    const hostelId = params.get("hostelId")

    const [googleMapSrc, setGoogleMapSrc] = useState('')
    function showHostelLocationOnMap() {
        setClose(false);
        setActivate(true)
        const hostel = originalHostelCardData.find(h => h.id === hostelId);
        if (hostel && hostel.location) {
            const { latitude, longitude } = hostel.location;
            const mapUrl = `https://www.google.com/maps?q=${latitude},${longitude}&hl=en&z=15&output=embed`;
            setGoogleMapSrc(mapUrl);
        } else {
            console.error("Hostel not found or missing location data.");
        }
    }

    function getDirectionsOnMap() {
        //setClose(false);
        const hostel = originalHostelCardData.find(h => h.id === hostelId);

        if (!hostel) {
            alert("Hostel not found.");
            return;
        }

        if (!navigator.geolocation) {
            alert("Geolocation is not supported by your browser.");
            return;
        }

        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude: userLat, longitude: userLng } = position.coords;
                const mapURL = `https://www.google.com/maps/dir/${userLat},${userLng}/${hostel.location.latitude},${hostel.location.longitude}/`;
                window.open(mapURL, "_blank");
            },
            (error) => {
                const messages = {
                    1: "Location access denied. Please allow location permissions.",
                    2: "Location unavailable. Try again later.",
                    3: "Location request timed out.",
                };
                alert(messages[error.code] || "Unable to retrieve your location.");
                console.error(error);
            },
            { timeout: 10000, maximumAge: 60000 } // ✅ Add options for better UX
        );
    }


    function closeMap() {
        console.log('Close has bee clciked')
        if (!close) {
            setActivate(false)
            setClose(true)
        } else {
            setClose(false)
        }
    }

    return (
        <>
            <title>View Details | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} substituteLink={<Link className="link" to="/">Home</Link>} />


            <section className="more-details js-more-details">
                <div className="more-details-container">

                    {hostelsCardData.map((hostel) => {
                        if (hostel.id === hostelId) {
                            return (
                                <>
                                    <div className="hostel-image-card">
                                        <img src={hostel.image} alt={`${hostel.name} image`}></img>
                                        <div className="overlay">
                                            <span className="overlay-text">{hostel.name}</span>
                                        </div>
                                    </div>

                                    <div className="hostel-information-contaniner">
                                        <div className="location-details">
                                            <h2 className="font-header">Location</h2>
                                            <p className="font-paragraph js-location-paragraph">
                                                {hostel.location.directions}
                                                <p className="font-paragraph js-distance-from-campus">{`Its about ${hostel.location.distanceToCampusMinutes} minute${hostel.location.distanceToCampusMinutes > 1 ? 's' : ''} walk from campus`}</p>
                                            </p>

                                            <div className="view-location-container">
                                                <button className="view-location js-view-location" onClick={showHostelLocationOnMap}>View Location</button>
                                                <button className="view-location js-get-directions" onClick={getDirectionsOnMap} >Get Directions</button>
                                            </div>
                                            <div className={`overlay-background ${activate ? 'activate' : ''}`}>
                                                <div className='map-modal'>
                                                    <div className={`iframe-container ${close ? 'close' : ''}`}>
                                                        <div className='close-button'><img src={closeMapImage} alt="" className='close-image' onClick={closeMap} /></div>
                                                        <iframe
                                                            src={googleMapSrc}
                                                            className='iframe'
                                                            frameborder="1"
                                                            loading='lazy'
                                                            title='Hostel Location'></iframe>
                                                    </div>
                                                </div>
                                            </div>


                                        </div>
                                    </div>

                                    <div className="price-and-payment">
                                        <h2 className="font-header">Payment Details</h2>
                                        <p className="font-paragraph js-minimum-price">{`Minimum Price : ${hostel.pricing.priceMin}/${hostel.pricing.billingPeriod}`}</p>
                                        <p className="font-paragraph js-maximum-price">{`Maximum: ${hostel.pricing.priceMax}/${hostel.pricing.billingPeriod}`}</p>
                                        <p className="font-paragraph js-installment-allowed">{`${hostel.pricing.installmentAllowed ? 'Installment Is Allowed' : 'Installment Is Not Allowed'}`}</p>
                                        <p className="font-paragraph additional-fees-header">Additional Fees</p>
                                        <ul className="additional-fees js-additional-fees">
                                            <li class="special-font">Utilities ({hostel.pricing.additionalFees.utilities})</li>
                                            <li class="special-font">Maintenance ({hostel.pricing.additionalFees.maintenance})</li>
                                            <li class="special-font">Caution Deposit ({hostel.pricing.additionalFees.cautionDeposit})</li>
                                        </ul>
                                        <p className="font-paragraph js-refund-policy">{hostel.pricing.refundPolicy}</p>
                                    </div>

                                    <div className="room-information">
                                        <h2 className="font-header">Room Information</h2>
                                        <ul className="types-of-rooms js-rooms-types">
                                            {hostel.rooms.types.map((room) => {
                                                return (
                                                    <li className='special-font'>{room.type}<p>Price {room.price}</p></li>
                                                )
                                            })}
                                        </ul>
                                    </div>

                                    <div className="facilities-and-amenities">
                                        <h2 id="facilities-and-amenities-header" className="font-header">Facilities And Amenities</h2>
                                        <ul className="facilities-and-amenities-perks grid js-facilities-and-amenities-perks">
                                            {
                                                hostel.amenities.map((amenity) => {
                                                    return (
                                                        <>
                                                            <li class="special-font">{amenity}</li>
                                                        </>
                                                    )
                                                })
                                            }
                                            {
                                                hostel.rooms.furnishing.map((funish) => {
                                                    return (
                                                        <li class="special-font">{funish}</li>
                                                    )

                                                })
                                            }
                                        </ul>
                                    </div><br></br>

                                    <div className="rules-and-contact-container">
                                        <div className="rules-and-policies">
                                            <h2 className="font-header">Rules And Regulations</h2>
                                            <ul className="grid rules-and-policies-style js-rules-and-regulations">
                                                {hostel.rules.map((rule) => {
                                                    return (
                                                        <li class="special-font">{rule}</li>
                                                    )
                                                })}
                                            </ul>
                                        </div>
                                        <div className="info-container">
                                            <div className="management-contact">
                                                <h2 className="font-header">Contacts</h2>
                                                <Link className="contact-item js-phone-number-link" href={hostel.contact.phone}>
                                                    <img src={Phone} alt="Phone"></img>
                                                    <p className="font-paragraph js-phone-number">
                                                        {hostel.contact.phone}
                                                    </p>
                                                </Link>
                                                <a className="contact-item js-whatsApp-number-link" href={`https://wa.me/${hostel.contact.whatsapp}`}>
                                                    <img src={Whatsapp} alt="WhatsApp"></img>
                                                    <p className="font-paragraph js-whatsapp-number">
                                                        {hostel.contact.whatsapp}
                                                    </p>
                                                </a>
                                                <a className="contact-item js-email-address-link" href={`https://${hostel.contact.email}`}>
                                                    <img src={Email} alt="Email"></img>
                                                    <p className="font-paragraph js-email-address">
                                                        {hostel.contact.email}
                                                    </p>
                                                </a>
                                                <div className="contact-item">
                                                    <img src={Manager} alt="manager-name"></img>
                                                    <p className="font-paragraph js-manager-name">
                                                        {hostel.contact.managerName}
                                                    </p>
                                                </div>
                                                <div className="contact-item">
                                                    <img src={Clock} alt="clock"></img>
                                                    <p className="font-paragraph js-office-hours">
                                                        {hostel.contact.officeHours}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="media-information-cards js-media-information-cards">
                                        {hostel.media.images.map((image) => {

                                            return (
                                                <div class="hostel-room-type-image">
                                                    <a href={image.url}>
                                                        <img class="hostel-room" src={image.url} alt={image.type}></img>
                                                    </a>
                                                    <div class="hostel-room-type-overlay">
                                                        <span class="hostel-room-type-overlay-text">{image.type}</span>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                        <video class="hostel-room" muted loop controls src={hostel.media.video} poster={hostel.image}></video>
                                    </div>
                                </>
                            )
                        }
                    })}
                </div>
            </section>
            <SiteFooter />
        </>
    )
}