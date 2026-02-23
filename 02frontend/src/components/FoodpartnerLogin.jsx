import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const FoodpartnerLogin = () => {
    const navigate = useNavigate()
    const [email , setEmail] = useState("")
        const [password , setPassword] = useState("")
        async function handleSubmit(e) {
            e.preventDefault()
            const responce = await axios.post("http://localhost:4000/auth/foodpartner/login",{
                email,
                password,
            },{
                withCredentials:true,
            })
            console.log(responce.data);  
            navigate("/createfood")
        }
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-semibold text-gray-900">Food Partner — Sign in</h1>
          <p className="text-sm text-gray-500 mt-1">Sign in to continue to your account</p>
        </div>

        <form 
        onSubmit={handleSubmit}
        className="space-y-5">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
              Email
            </label>
            <input
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
              id="email"
              name="email"
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
                value={password}
                onChange={(e)=>{setPassword(e.target.value)}}
              id="password"
              name="password"
              type="password"
              placeholder="Enter your password"
              className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent"
            />
          </div>

          <div>
            <button type="submit" className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">
              Sign in
            </button>
          </div>

          <p
            onClick={() => {
              navigate('/foodpartner/resister')
            }}
            className="text-center text-sm text-gray-600 mt-3"
          >
            Don’t have an account? <a href="#" className="text-indigo-600 hover:underline">Sign up</a>
          </p>

          <p
            onClick={() => navigate('/user/login')}
            className="text-center text-sm text-gray-600 mt-2"
          >
            Are you a user? <a href="#" className="text-indigo-600 hover:underline">Sign in</a>
          </p>
        </form>
      </div>
    </div>
  )
}

export default FoodpartnerLogin