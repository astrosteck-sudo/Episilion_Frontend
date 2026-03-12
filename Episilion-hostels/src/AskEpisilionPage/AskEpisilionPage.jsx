import { PageHeader } from "../PageHeader/PageHeader";
import { Link } from "react-router-dom";
import { SiteFooter } from "../SiteFooter/SiteFooter";
import './AskEpisilion.css'
import { useState } from "react";

export function AskEpisilionPage({ navlink, setNavLink, originalHostelCardData }) {
    const [userSearchInput, setUserSearchInput] = useState('');
    const [chatMessages, setChatMessages] = useState([]);  // ✅ Initialize as array

    const episilionAnswers = ["What can you see", "No hostels available", "Yes no hostel is available", "What more can i say"];

    function searchInput(event) {
        setUserSearchInput(event.target.value);
    }

    function sendMessage() {
        if (!userSearchInput.trim()) return;  // ✅ Prevent empty messages

        const updatedMessages = [
            ...chatMessages,
            { message: userSearchInput, sender: 'user' }
        ];

        // ✅ Add Epsilon's response right after the user message
        const response = episilionAnswers[Math.floor(Math.random() * episilionAnswers.length)];
        // let response = '';
        // const filteredHostel = originalHostelCardData.find(
        //     (hostel) => hostel.featured
        // )
        // response = filteredHostel.name

        const finalMessages = [
            ...updatedMessages,
            { message: response, sender: 'episilion' }
        ];

        setChatMessages(finalMessages);
        setUserSearchInput('');  // ✅ Clear input after sending
    }

    // ✅ Allow sending with Enter key
    function handleKeyDown(event) {
        if (event.key === 'Enter') sendMessage();
    }

    return (
        <>
            <PageHeader navlink={navlink} setNavLink={setNavLink} />
            <div className="messages">
                <div className="episilion-message">How can I be of help?</div>

                {/* ✅ Map over chatMessages array to render each bubble */}
                {chatMessages.map((chat, index) => (
                    <div key={index} className={chat.sender === 'user' ? 'user-message' : 'episilion-message'}>
                        {chat.message}
                    </div>
                ))}
            </div>
            <div className="ask-episilion-search">
                <input
                    type="text"
                    className="ask-episilion-input-box"
                    onChange={searchInput}
                    onKeyDown={handleKeyDown}
                    value={userSearchInput}
                />
                <button className="ask-episilion-search-button" onClick={sendMessage}>Search</button>
            </div>
            <SiteFooter />
        </>
    );
}