import './App.css'
import { HomePageHeader } from './HomePage/HomePageHeader';
import { Routes, Route } from 'react-router' 

function App() {
  return (
    <>
    <Routes>
        <Route index element={<HomePageHeader/>}></Route>
    </Routes>

    
    </>
  )
}

export default App
