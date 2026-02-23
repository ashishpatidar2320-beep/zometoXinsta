import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const FoodpartnerResister = () => {
    const navigate = useNavigate()
    const [fullName , setFullName] = useState("")
    const [email, setEmail] = useState("")
    const [password , setPassword] = useState("")
    const [phone , setPhone] = useState("")
    const [address , setAddress] = useState("")
    const [contactName , setContactName] = useState("")

    async function handleSubmit(e) {
        e.preventDefault()
        const responce = await axios.post("http://localhost:4000/auth/foodpartner/resister" , {
            fullName,
            email,
            password,
            phone,
            address,
            contactName
        },{
            withCredentials:true,
        })

        console.log(responce.data)
        navigate("/createfood")

    }
	return (
		<div className="min-h-screen bg-gray-50 flex items-center justify-center py-6 px-4">
			<div className="w-full max-w-md bg-white rounded-2xl shadow-md p-6 sm:p-8">
				<div className="text-center mb-6">
					<h1 className="text-2xl font-semibold text-gray-900">Food Partner — Register</h1>
					<p className="text-sm text-gray-500 mt-1">Fill the form to create your food partner account</p>
					<p className="text-sm text-gray-500 mt-2">Registering for users instead? <button type="button" onClick={()=>navigate('/user/resister')} className="text-indigo-600 hover:underline">Register as user</button></p>
				</div>

				<form
                onSubmit={handleSubmit}
                className="space-y-5">
					<div>
						<label htmlFor="fullname" className="block text-sm font-medium text-gray-700 mb-2">Full name</label>
						<input 
                        value={fullName}
                        onChange={(e)=> setFullName(e.target.value)}
                        id="fullname" name="fullname" type="text" placeholder="John Doe" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
					</div>

					<div>
						<label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
						<input
                        value={email}
                        onChange={(e)=> setEmail(e.target.value)}
                        id="email" name="email" type="email" placeholder="you@example.com" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
					</div>

					<div>
						<label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">Password</label>
						<input
                        value={password}
                        onChange={(e)=> setPassword(e.target.value)}
                        id="password" name="password" type="password" placeholder="Create a password" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
					</div>

					<div>
						<label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
						<input 
                        value={phone}
                        onChange={(e)=> setPhone(e.target.value)}
                        id="phone" name="phone" type="tel" placeholder="+1 555 555 5555" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
					</div>

					<div>
						<label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">Address</label>
						<input
                        value={address}
                        onChange={(e)=> setAddress(e.target.value)}
                         id="address" name="address" type="text" placeholder="123 Main St, City" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
					</div>

					<div>
						<label htmlFor="contactName" className="block text-sm font-medium text-gray-700 mb-2">Contact name</label>
						<input
                        value={contactName}
                        onChange={(e)=> setContactName(e.target.value)}
                         id="contactName" name="contactName" type="text" placeholder="Emergency contact" className="w-full px-4 py-3 border border-gray-200 rounded-lg bg-gray-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:border-transparent" />
					</div>

					<div>
						<button type="submit" className="w-full py-3 px-4 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-400">Create account</button>
					</div>

					<p 
                     onClick={()=>{
                        navigate("/foodpartner/login")
                    }}
                    className="text-center text-sm text-gray-600 mt-3">Already have an account? <a href="#" className="text-indigo-600 hover:underline">Sign in</a></p>
				</form>
			</div>
		</div>
	)
}

export default FoodpartnerResister
