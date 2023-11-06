import React, { useState } from "react"
import { Link, NavLink } from "react-router-dom"

const Nav = () => {
  const [isOpen, seIsOpen] = useState(false)
  const MobileMenuH = () => {
    seIsOpen((old) => !isOpen)
  }

  const menuOpen = "block hamburger open"
  const menuClosed = "block hamburger"

  return (
    <>
    {/* Mobile Nav */}
      <section>
        <nav className="flex justify-between md:hidden mt-8 px-8">
          <Link to={"/"}>
            <p className="text-lg font-bold">City Public School, Durgapur</p>
            <p>Jemua, Durgapur, WB, India</p>
          </Link>
          <div>
            <img src="/images/logo.svg" alt="" />
          </div>
          <button className={isOpen ? menuOpen : menuClosed} onClick={MobileMenuH}>
            <span className="hamburger-top"></span>
            <span className="hamburger-middle"></span>
            <span className="hamburger-bottom"></span>
          </button>
        </nav>
        {isOpen ? (
          <div className="bg-indigo-600 rounded-xl opacity-99 mx-auto mt-24 my-20 inset-0 z-10 absolute">
            <div className="flex gap-y-4 flex-col justify-center items-center pt-10 text-lg font-bold text-white ">
              <NavLink to={"/"}>
                <p onClick={MobileMenuH}>Home</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/about-us"}>
                <p onClick={MobileMenuH}>About Us</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/contact"}>
                <p onClick={MobileMenuH}>Contact</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/donate"}>
                <p onClick={MobileMenuH}>Donate</p>
              </NavLink>
              <hr className="border-2 w-2/3 mx-4"></hr>
              <NavLink to={"/committee"}>
                <p onClick={MobileMenuH}>Committee</p>
              </NavLink>
            </div>
            <div className="text-sm  text-gray-200 w-full flex flex-col justify-center items-center absolute bottom-10">
              <p>ysir@gmail.com</p>
              <p>+91-XXXXX-XXXXX</p>
              <p>City Public School, Durgapur</p>
            </div>
          </div>
        ) : null}
      </section>

      {/* Laptop Nav */}
      <section>
        <div className="hidden md:block pt-6 px-20 pr-40">
          <div className="flex justify-between items-center">
            <Link to={"/"}>
              <div className="">
                <p className="text-2xl font-bold">City Public School</p>
                <p>Jemua, Durgapur-713209, WB, India</p>
              </div>
            </Link>
            <div className="flex justify-center items-center gap-x-10 font-bold text-center">
              <NavLink to={"/"}>Home</NavLink>
              <NavLink to={"/about-us"}>About Us</NavLink>
              <NavLink to={"/contact"}>Contact</NavLink>
              <NavLink to={"/donate"}>Donate</NavLink>
              <NavLink to={"/committee"}>Committee</NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Nav
