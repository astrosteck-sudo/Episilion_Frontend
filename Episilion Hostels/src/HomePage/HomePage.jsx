import { PageHeader } from "../PageHeader/PageHeader.jsx"
import { HostelCard } from "./HostelCard.jsx";
import './HomePage.css'
import { SiteFooter } from "../SiteFooter/SiteFooter.jsx";
import filterImage from '../assets/icons/sort.png'
import searchButton from '../assets/icons/search.png'

export function HomePage({ hostelsCardData }) {


    return (
        <>
            <PageHeader />
            <section>
                <button className="filter-image js-filter-image">
                    <img src={filterImage}></img>
                </button>

                <div className="filter js-filter">
                    <div className="close-button js-close-button">
                        <img className="close-image" src="icons/close.png"></img>
                    </div>
                    <div className="filter-by-items js-filter">
                        <h3 className="filter-header">By Gender</h3>
                        <div className="gender-buttons grid">
                            <button className="gender-button male-gender-button" data-gender-name="Boys">
                                <img className="male-filter-icon" src="icons/man.png"></img>Boys</button>
                            <button className="gender-button female-gender-button" data-gender-name="Girls">
                                <img className="female-filter-icon" src="icons/woman-avatar.png"></img>Girls</button>
                            <button className="gender-button mixed-gender-button" data-gender-name="Mixed">
                                <img className="mixed-filter-icon" src="icons/shuffle.png"></img>
                                <p id="mixed-text">Mixed</p>
                            </button>
                        </div>

                        <div className="price-filter">
                            <h3 className="filter-header">By Price</h3>
                            <div className="price-input-container">
                                <input type="number" name="user-min-price" id="user-min-price" min="0" max="20000"
                                    className="price-input js-min-price-input" placeholder="Minimum Price"></input>
                                <input type="number" name="user-max-price" id="user-max-price" min="0" max="20000"
                                    className="price-input js-max-price-input" placeholder="Maximum Price"></input>
                            </div>
                        </div>
                    </div>
                    <div className="filter-search-box-container">
                        <div className="filter-search-box js-search-box">
                            <p className="filter-search-box-text js-search-box-text">Search</p><img className="filter-search-icon"
                                src="icons/search.png"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section class="search-box-container">
                <div class="search-box">
                    <input type="text" name="search-box" id="search-box-text" placeholder="Search Hostel By Name"list="Hostels"></input>
                        <img class="search-icon" src={searchButton}></img>
                    <div id="suggestions" class="suggestions-dropdown"></div>
                </div>
            </section>


                    <section className="hostels-section">
                        <div className="hostels-cards js-hostel-cards">
                            {hostelsCardData.map((hostel) => {
                                return (
                                    <HostelCard key={hostel.id} hostel={hostel} />
                                )
                            })}
                        </div>
                    </section>




                    <SiteFooter />
                </>

                )
}