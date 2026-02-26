import React from 'react'

const ProfileHeader = ({
  fullName = 'The Tasty Spoon',
  address = 'not mentioned',
  totalMeals = 1240,
  customers = 830,
}) => {
  return (
    <div className="bg-linear-to-r from-rose-400 via-pink-500 to-indigo-500 rounded-2xl p-4 shadow-md text-white">
      <div className="flex items-center gap-4">
        <img
          src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=200&q=60"
          alt="profile"
          className="w-20 h-20 rounded-full border-4 border-white object-cover"
        />

        <div className="flex-1">
          <div className="flex items-center gap-2 mb-2 flex-wrap">
            <span className="bg-white/20 text-white text-sm px-3 py-1 rounded-full font-semibold">{fullName}</span>
            <span className="bg-white/10 text-white text-sm px-3 py-1 rounded-full">{address}</span>
          </div>

          <div className="flex gap-6 text-sm mt-1">
            <div>
              <div className="text-xs text-white/80">Total Meals</div>
              <div className="text-lg font-bold">{totalMeals}</div>
            </div>
            <div>
              <div className="text-xs text-white/80">Customers</div>
              <div className="text-lg font-bold">{customers}</div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-white/20 mt-4" />
    </div>
  )
}

export default ProfileHeader
