import { Routes, Route } from 'react-router'
import { HomePage } from './HomePage/HomePage';
import { MoreDetailsPage } from './MoreDetailsPage/MoreDetailsPage';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { SignUpPage } from './logins/SignUpPage';
import { LoginPage } from './logins/loginPage.jsx';
import { AboutUsPage } from './AboutUs/AboutUsPage.jsx';
import { MoreFromUsPage } from './MoreFromUs/MoreFromUsPage.jsx';
import './App.css'


function App() {
  const [hostelsCardData, sethostelsCardData] = useState([]);
  const [originalHostelCardData, setOriginalHostelCardData] = useState([])
  const [navlink, setNavLink] = useState(false);

  const loadHostelsCard = async () => {
    const response = await axios.get('https://episilion-backend-2.onrender.com/api/data')
    //const response = await axios.get('http://localhost:5000/api/data')
    console.log(response.data)
    setOriginalHostelCardData(response.data.data)//THIS DATA WILL NEVER CHANGE IN THE PROGRAM
    sethostelsCardData(response.data.data);//THIS DATA WILL CHANGE BASED ON THE FILTER OPTIONS
  }
  useEffect(() => {
    loadHostelsCard();
  }, []);



  return (
    <>
      <Routes>
        {/* <Route index element={<PageHeader/>}></Route> */}
        <Route index element={<HomePage hostelsCardData={hostelsCardData} sethostelsCardData={sethostelsCardData} 
        navlink={navlink} setNavLink={setNavLink} originalHostelCardData={originalHostelCardData} setOriginalHostelCardData={setOriginalHostelCardData}   />}/>

        <Route path="moreDetails" element={<MoreDetailsPage hostelsCardData={hostelsCardData} navlink={navlink} setNavLink={setNavLink} originalHostelCardData={originalHostelCardData} />} />
        <Route path="aboutus" element={<AboutUsPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path="signup" element={<SignUpPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path="login" element={<LoginPage navlink={navlink} setNavLink={setNavLink} />} />
        <Route path='morefromus' element={<MoreFromUsPage navlink={navlink} setNavLink={setNavLink} />}/>
      </Routes>
    </>
  )
}

export default App
