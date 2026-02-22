import './App.css'
import { Routes, Route } from 'react-router'
import { HomePage } from './HomePage/HomePage';
import { MoreDetailsPage } from './MoreDetailsPage/MoreDetailsPage';
import { useState, useEffect } from 'react';
import axios from 'axios';

function App() {


  const [hostelsCardData, sethostelsCardData] = useState([])

  const loadHostelsCard = async () => {
    const response = await axios.get('/hostel_data/hostel_data.json')
    sethostelsCardData(response.data);

  }
  useEffect(() => {
    loadHostelsCard();
  }, []);


  return (
    <>
      <Routes>
        {/* <Route index element={<PageHeader/>}></Route> */}
        <Route index element={<HomePage hostelsCardData={hostelsCardData} />}/>
        <Route path="moreDetails" element={<MoreDetailsPage hostelsCardData={hostelsCardData} />} />
      </Routes>
    </>
  )
}

export default App
