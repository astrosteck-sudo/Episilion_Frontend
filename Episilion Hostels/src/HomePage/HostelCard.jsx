



export function HostelCard({ hostel }) {

   
    function showHostelId(parameter){
        window.location.href = `moreDetails?hostelId=${parameter}`;
    }

    return (
        <div className="hostel-card">
            <div className="image-container">
                <img id="hostel-card-image" src={hostel.image} alt="hostel-image"></img>
                <div className="overlay">
                    <span className="overlay-text">{hostel.reviews.averageRating}({hostel.reviews.totalReviews})</span><br></br>
                </div>
                <div className="hostel-type-text">
                    <span className="overlay-text-hostel-type">{hostel.type}</span>
                </div>
            </div>
            <table border="0" width="100%">
                <tr width="20px">
                    <td colSpan="2" className="td-vetical"><p id="hostel-name">{hostel.name}</p></td>
                    <td rowspan="2" className="td-vetical"><p id="hostel-price">${hostel.pricing.priceMin}</p></td>
                </tr>
                <tr width="20px">
                    <td colSpan="2" className="td-vetical"><p id="hostel-distace">{hostel.distance}</p></td>
                </tr>
                <tr>
                    <td colSpan="3"><p id="hostel-perks">{hostel.hostelPerks}</p></td>
                </tr>
            </table>
            <p><button className="view-more-details js-view-more-details" onClick={() => showHostelId(hostel.id)}>View Details</button></p> 
        </div>
    )
}