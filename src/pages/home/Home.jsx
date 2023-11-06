import React from "react"
import Slider from "./Slider"
const Home = () => {
  return (
    <>
      <div className="hidden md:block">
        <Slider />
      </div>
      <div className="flex justify-center items-center md:hidden min-w-full h-screen -mt-40">
        <p className="text-3xl font-bold text-center">"Home" page is under construction</p>
      </div>
    </>
  )
}

export default Home
