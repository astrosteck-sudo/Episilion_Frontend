import { PageHeader } from "../PageHeader/PageHeader.jsx"
import { HostelCard } from "./HostelCard.jsx";
import './HomePage.css'
import { SiteFooter } from "../SiteFooter/SiteFooter.jsx";
import filterImage from '../assets/icons/sort.png';
import closeFilterImage from '../assets/icons/close.png';
import boyImage from '../assets/icons/man.png'
import girlImage from '../assets/icons/woman-avatar.png'
import mixedImage from '../assets/icons/shuffle.png'
import searchButton from '../assets/icons/search.png';
import { useRef, useState } from "react";


export function HomePage({ hostelsCardData, navlink, setNavLink, sethostelsCardData, originalHostelCardData }) {
    const [gender, setGender] = useState('');
    const [genderText, setGenderText] = useState('Search');
    const [minPrice, setMinPrice] = useState();
    const [maxPrice, setMaxPrice] = useState();
    const [searchHostelName, setSearchHostelName] = useState('')

    const filterMenu = useRef(null) //THIS WILL SELECT THE filter menu 

    function openFilterMenu() {
        if (filterMenu.current) {
            filterMenu.current.style.opacity = 1;
            filterMenu.current.style.pointerEvents = 'auto';
        }
    }
    function closeFilterMenu() {
        if (filterMenu.current) {
            filterMenu.current.style.opacity = 0;
            filterMenu.current.style.pointerEvents = 'none';
        }
    }
    //WITH THIS IF ANY PART OF THE DOCUMENT IS CLICKED WHICH IS NOT THE filter OR filter-image IT WILL CLOSE THE FILTER MENU
    document.addEventListener('click', (event) => {
        if (!event.target.closest('.filter') && !event.target.closest('.filter-image')) {
            filterMenu.current.style.opacity = 0;
            filterMenu.current.style.pointerEvents = 'none';
        }
    })


    function filterHostelsByGender(parameter) {
        setGenderText(parameter)//THIS WILL CHANGE THE TEXT IN THE search button
        setGender(parameter);//THIS WILL PUT THE CLCIKED GENDER INTO THE gender VARIABLE 
    }




    function userSearchedHostelName(event) {
        //.trim() removes leading/trailing spaces. 
        // .replace(/\s+/g, " ",) collapses multiple spaces into one. 
        // .toLowerCase() normalizes casing.
        const value = event.target.value
            .trim()
            .replace(/\s+/g, " ")
            .toLowerCase();

        setSearchHostelName(value);
    }

    function userMinPrice(event) {
        setMinPrice(event.target.value)
    }
    function userMaxPrice(event) {
        setMaxPrice(event.target.value)
    }



    function searchHostelByName() {
        console.log(searchHostelName)
        const filteredHostels = originalHostelCardData.filter(
            (hostel) => hostel.name.trim().replace(/\s+/g, " ").toLowerCase() === searchHostelName
        )
        sethostelsCardData(filteredHostels);
    }
    function searchHostels() {
        if (!gender && !minPrice && !maxPrice) {
            filterMenu.current.style.opacity = 0;
            filterMenu.current.style.pointerEvents = 'none';
            return;
        }

        //THIS FILTERS FROM THE originalHostelCardData AND PUTS THE VALUES INTO THE 
        //filteredHostels, THEN THE sethostelsCardData RESETS THE  hostelsCardData TO THE FILTERED
        //VALUES.
        // THE MAIN IDEA HERE IS , originalHostelCardData AND hostelsCardData HAS THE SAME VALUES AT THE START
        //OF THE PROGRAM, BUT hostelsCardData WILL ALWAYS CHANGE DEPENDING ON THE FILTER USED.
        //BUT THE FILTER WILL ALWAYS FILTER FROM THE UNCHANGING originalHostelCardData
        if (gender && minPrice && maxPrice) {
            const filteredHostels = originalHostelCardData.filter(
                (hostel) => hostel.type === gender && hostel.pricing.priceMin >= minPrice && hostel.pricing.priceMin <= maxPrice
            )
            sethostelsCardData(filteredHostels);
            filterMenu.current.style.opacity = 0;
            filterMenu.current.style.pointerEvents = 'none';
        } else if (gender || minPrice || maxPrice) {
            const filteredHostels = originalHostelCardData.filter(
                (hostel) => hostel.type === gender || hostel.pricing.priceMin >= minPrice && hostel.pricing.priceMin <= maxPrice
            )
            sethostelsCardData(filteredHostels);
            filterMenu.current.style.opacity = 0;
            filterMenu.current.style.pointerEvents = 'none';
        }

        //THIS RESET THE VALUES ON THE USER SCREEN
        setMinPrice('');
        setMaxPrice('');
        setGender();
        setGenderText('Search');



        //THIS IS A MORE EIFFICIENT CODE TO REPLACE THE ONE ABOVE BUT I DONT UNDERSTAND IT YET SO ITS COMMENTED
        // const filteredData = originalHostelCardData.filter(hostel => 
        //     selectedGender ? hostel.type === selectedGender : true)
        // sethostelsCardData(filteredHostels);
        // filterMenu.current.style.opacity = 0;
        // filterMenu.current.style.pointerEvents = 'none';
    }





    return (
        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} sethostelsCardData={sethostelsCardData} originalHostelCardData={originalHostelCardData} />
            <section>
                <button className="filter-image js-filter-image" onClick={openFilterMenu}>
                    <img src={filterImage}></img>
                </button>

                <div className="filter js-filter" ref={filterMenu}>
                    <div className="close-button js-close-button" onClick={closeFilterMenu}>
                        <img className="close-image" src={closeFilterImage}></img>
                    </div>
                    <div className="filter-by-items js-filter">
                        <h3 className="filter-header">By Gender</h3>
                        <div className="gender-buttons">
                            <button className="gender-button male-gender-button" onClick={() => filterHostelsByGender('Boys')}>
                                <img className="male-filter-icon" src={boyImage}></img>Boys
                            </button>
                            <button className="gender-button female-gender-button" data-gender-name="Girls" onClick={() => filterHostelsByGender('Girls')}>
                                <img className="female-filter-icon" src={girlImage}></img>Girls
                            </button>
                            <button className="gender-button mixed-gender-button" data-gender-name="Mixed" onClick={() => filterHostelsByGender('Mixed')}>
                                <img className="mixed-filter-icon" src={mixedImage}></img>
                                <p id="mixed-text">Mixed</p>
                            </button>
                        </div>

                        <div className="price-filter">
                            <h3 className="filter-header">By Price</h3>
                            <div className="price-input-container">
                                <input
                                    type="number"
                                    name="user-min-price"
                                    id="user-min-price"
                                    min="0" max="20000"
                                    className="price-input js-min-price-input"
                                    placeholder="Minimum Price"
                                    onChange={userMinPrice}
                                    value={minPrice}>
                                </input>
                                <input
                                    type="number"
                                    name="user-max-price"
                                    id="user-max-price"
                                    min="0" max="20000"
                                    className="price-input js-max-price-input"
                                    placeholder="Maximum Price"
                                    onChange={userMaxPrice}
                                    value={maxPrice}>
                                </input>
                            </div>
                        </div>
                    </div>
                    <div className="filter-search-box-container" onClick={searchHostels}>
                        <div className="filter-search-box js-search-box">
                            <p className="filter-search-box-text js-search-box-text">{genderText}</p><img className="filter-search-icon"
                                src={searchButton}></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="search-box-container">
                <div className="search-box">
                    <input
                        type="text"
                        name="search-box"
                        id="search-box-text"
                        placeholder="Search Hostel By Name"
                        list="Hostels"
                        onChange={userSearchedHostelName}
                    >
                    </input>
                    <img className="search-icon" src={searchButton} onClick={searchHostelByName}></img>
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