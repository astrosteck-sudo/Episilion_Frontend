import { PageHeader } from "../PageHeader/PageHeader.jsx"
import { HostelCard } from "./HostelCard.jsx";
import './HomePage.css'
import { SiteFooter } from "../SiteFooter/SiteFooter.jsx";


export function HomePage({ hostelsCardData }) {

    
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