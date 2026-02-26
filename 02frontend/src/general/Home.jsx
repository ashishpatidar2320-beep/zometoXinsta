import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import axios from 'axios'



const Home = () => {
  const navigate = useNavigate()
  const containerRef = useRef(null)

  const [fooditems , setFooditems] = useState([])

  useEffect(  ()=>{
     async function foods() {
      try{
        const responce =  await axios.get("http://localhost:4000/add/food/" , {withCredentials:true})
        setFooditems(responce.data.fooditems)

      }catch(err){
        console.log(err);
        
      }
     }
     foods()
    },[])
  

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const videos = container.querySelectorAll('video')

    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const video = entry.target
          if (entry.intersectionRatio >= 0.6) {
            video.play().catch(() => {})
          } else {
            video.pause()
          }
        })
      },
      { root: container, threshold: [0.6] }
    )

    videos.forEach((v) => {
      obs.observe(v)
    })

    return () => obs.disconnect()
  }, [fooditems])

  return (
    <div
      ref={containerRef}
      className="h-screen w-full overflow-y-scroll snap-y snap-mandatory touch-pan-y"
      style={{ scrollBehavior: 'smooth' }}
    >
      {fooditems.map((item, idx) => (
        <section key={idx} className="relative snap-start h-screen w-full bg-black">
          <video
            src={item.video}
            className="w-full h-full object-cover"
            muted
            loop
            playsInline
            preload="metadata"
            // don't set autoPlay on all videos; IntersectionObserver handles play/pause
          />

          <div className="absolute inset-x-0 bottom-0 p-4 pointer-events-none">
            <div className="max-w-xl bg-linear-to-t from-black/70 via-black/30 to-transparent p-4 rounded-t-lg pointer-events-auto">
              <p
                className="text-white text-base leading-5 mb-3"
                style={{
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {item.discription}
              </p>

              <div className="flex">
                <a
                  href="/ashish"
                  className="inline-block bg-white text-black text-sm font-medium px-4 py-2 rounded-lg shadow-md"
                  onClick={(e) => {
                    e.preventDefault()
                    navigate(`/foodpartner/${item.foodpartner}`)
                  }
                    
                  }
                >
                  Visit Store
                </a>
              </div>
            </div>
          </div>
        </section>
      ))}
    </div>
  )
}

export default Home
