import React, { useEffect, useState } from 'react'
import ProfileHeader from './ProfileHeader'
import VideoGrid from './VideoGrid'
import axios from 'axios'
import { useParams } from 'react-router-dom'

 function FoodPartnerHome() {

    const { id } = useParams()
    const [foodpartner , setFoodpartner] = useState(null)

     useEffect(()=>{
        async function getdata() {
            const responce = await axios.get(`http://localhost:4000/foodpartner/${id}`, {withCredentials:true})
            setFoodpartner(responce.data.foodpartner)
            console.log(responce.data.foodpartner);
            
        }
        getdata()

     },[id])
    
     if(!foodpartner) return ( <div> Loading... </div>)

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-4">
        <div className="mb-4">
          <ProfileHeader fullName={foodpartner.fullName}  />
        </div>

        <section className="mt-4 bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="p-4 border-b">
            <h2 className="text-lg font-semibold">Videos</h2>
            <p className="text-sm text-gray-500">Recent food videos</p>
          </div>

          <VideoGrid />
        </section>
      </div>
    </div>
  )
}

export default FoodPartnerHome
