import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader.jsx"
import axios from 'axios';
import { HostelCard } from "./HostelCard.jsx";
import './HomePage.css'
import { SiteFooter } from "../SiteFooter/SiteFooter.jsx";


export function HomePage() {

    const [hostelsCardData, sethostelsCardData] = useState([])

    const loadHostelsCard = async () => {
        const response = await axios.get('/hostel_data/hostel_data.json')
        sethostelsCardData(response.data);

    }
    useEffect(() => {
        loadHostelsCard();
    }, []);



    //const hostelCards = document.querySelector('.js-hostel-cards');
    // console.log(hostelCards)
    // console.log(hostelsCardData)
    // hostelsCardData.forEach((hostel) => {
    //     console.log(hostel.name)
    // })

    // function Hostels() {
    //     hostelsCardData.forEach((hostel) => {
    //         return (
    //             <>
    //                 <div className="hostel-card">
    //                     <div className="image-container">
    //                         <img id="hostel-card-image" src="${hostel.image}" alt="hostel-image"></img>
    //                         <div className="overlay">
    //                             <span className="overlay-text">${hostel.reviews.averageRating}(${hostel.reviews.totalReviews})</span><br></br>
    //                         </div>
    //                         <div className="hostel-type-text">
    //                             <span className="overlay-text-hostel-type">${hostel.type}</span>
    //                         </div>
    //                     </div>
    //                     <table border="0" width="100%">
    //                         <tr width="20px">
    //                             <td colspan="2" style="vertical-align: top;"><p id="hostel-name">${hostel.name}</p></td>
    //                             <td rowspan="2" style="vertical-align: top;"><p id="hostel-price">$${hostel.pricing.priceMin}</p></td>
    //                         </tr>
    //                         <tr width="20px">
    //                             <td colspan="2" style="vertical-align: top;"><p id="hostel-distace">${hostel.distance}</p></td>
    //                         </tr>
    //                         <tr>
    //                             <td colspan="3"><p id="hostel-perks">${hostel.hostelPerks}</p></td>
    //                         </tr>
    //                     </table>
    //                     <td colspan="3"><button className="view-more-details js-view-more-details" data-hostel-id="${hostel.id}">View Details</button></td>
    //                 </div>
    //             </>
    //         )

    //     });
    // }
    // hostelCards.innerHTML = hostelHtml;


    return (
        <>
            <PageHeader />
            <section className="hostels-section">
                <div className="hostels-cards js-hostel-cards">
                    {hostelsCardData.map((hostel) => {
                        return(
                            <HostelCard key={hostel.id} hostel={hostel}/>
                        )
                    })}
                </div>
            </section>

            <SiteFooter/>
        </>

    )
}