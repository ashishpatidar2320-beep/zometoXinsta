import React from 'react'
import { BrowserRouter ,Routes, Route} from "react-router-dom";
import App from '../App';
import UserLogin from '../components/UserLogin';
import UserResister from '../components/UserResister';
import FoodpartnerLogin from '../components/FoodpartnerLogin';
import FoodpartnerResister from '../components/FoodpartnerResister';
import Home from '../general/Home';
import CreateFood from '../foodpartner/CreateFood';
import FoodPartnerHome from '../components/food-partner/FoodPartnerHome';

const Approutes = () => {
  return (
     <BrowserRouter>
          <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/createfood" element={<CreateFood/>}/>
      <Route path="/user/resister" element={<UserResister/>} />
      <Route path="/user/login" element={<UserLogin/>} />
      <Route path="/foodpartner/resister" element={<FoodpartnerResister/>} />
      <Route path="/foodpartner/login" element={<FoodpartnerLogin/>} />
      <Route path="/foodpartner/:id" element={<FoodPartnerHome/>} />
    </Routes>
  </BrowserRouter>

  )
}

export default Approutes
