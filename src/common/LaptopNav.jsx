import React from "react"
import { Link, NavLink } from 'react-router-dom'

const LaptopNav = () => {
  return (
    <section>
      <div className="hidden md:block px-20 pr-40">
        <div className="flex justify-between items-center">
          <Link to={"/"}>
            <div className="">
              <p className="text-2xl font-bold">Website title</p>
              <p>Sub title</p>
            </div>
          </Link>
          <div className="flex justify-center items-center gap-x-10 font-bold text-center">
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"/about-us"}>About Us</NavLink>
            <NavLink to={"/contact"}>Contact</NavLink>
          </div>
        </div>
      </div>
    </section>
  )
}

export default LaptopNav
