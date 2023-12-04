import React from 'react'
import { BrowserRouter  as Router,Route,Routes} from 'react-router-dom';
import Footer from '../component/Footer/Footer';
import Header from '../component/Header/Header';
import Home from '../pages/Home/Home';
import Dishes from '../pages/Dishes/Dishes';
import Booking from '../pages/Booking/Booking';
import About from '../pages/About/About';


function LayoutRoutes() {
  return (
    <Router>
        <Header />
        <Routes>
 <Route path='/' element={<Home/>} />
 <Route path='/dishes' element={<Dishes/>} />
 <Route path='/services' element={<Booking/>} />
 <Route path='/about' element={<About/>} />
 
    </Routes>
    <Footer />
    </Router>
  )
}

export default LayoutRoutes