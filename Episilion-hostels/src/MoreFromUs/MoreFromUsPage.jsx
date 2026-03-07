import { useEffect, useState } from "react";
import { PageHeader } from "../PageHeader/PageHeader";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import './MoreFromUsPage.css';
import { Link } from "react-router-dom";
import axios from "axios";
import { ProjectsCards } from "./ProjectsCards";


export function MoreFromUsPage({ navlink, setNavLink }) {

    const [moreFromUsData, setMoreFromUs] = useState([])

    const loadMoreFromUsCards = async () => {
        const repsonse = await axios.get('./hostel_data/More_From_Us.json')
        setMoreFromUs(repsonse.data)
    }

    useEffect(() => {
        loadMoreFromUsCards()
    },[])

    return (

        <>
            <title>More From Us | Episilion Hostels</title>
            <PageHeader navlink={navlink} setNavLink={setNavLink} substituteLink={<Link className="link" to="/">Home</Link>} />


            <section class="more-from-us-section js-more-from-us-section">
                <h3>Get More From Us</h3>

                <div class="projects-cards">
                    {moreFromUsData.map((project) => {

                        return(
                            <ProjectsCards key={project.Name} project={project} />
                        )
                    })}
                </div>
            </section>

            <SiteFooter />
        </>
    )
}