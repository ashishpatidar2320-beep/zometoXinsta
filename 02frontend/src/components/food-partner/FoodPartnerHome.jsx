import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'
import VideoGrid from './VideoGrid'
import axios from 'axios'
import { useParams } from 'react-router-dom'

 function FoodPartnerHome() {

    const { id } = useParams()
    const [foodpartner , setFoodpartner] = useState(null)
    const [fooditems , setFooditems] = useState([])

     useEffect(()=>{
        async function getdata() {
            const responce = await axios.get(`http://localhost:4000/foodpartner/${id}`, {withCredentials:true})
            setFoodpartner(responce.data.foodpartner)
            setFooditems(responce.data.fooditems)
            console.log(responce.data.foodpartner, responce.data.fooditems);
            
        }
        getdata()

     },[id])
    
     if(!foodpartner || !fooditems  ) return ( <div> Loading... </div>)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-4">
        <div className="mb-4">
          <ProfileHeader fullName={foodpartner.fullName} address={foodpartner.address}  totalMeals={fooditems.length} />
        </div>

        <section className="mt-4 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Videos</h2>
            <p className="text-sm text-gray-500">Recent food videos</p>
          </div>
          
          <VideoGrid fooditems={fooditems} />
        </section>
      </div>
    </div>
  )
}

export default FoodPartnerHome
