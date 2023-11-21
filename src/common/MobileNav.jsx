import React, {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'

export const MobileNav = () => {
    const [isOpen, seIsOpen] = useState(false)
  const MobileMenuH = () => {
    seIsOpen((old) => !isOpen)
  }

  const menuOpen = "block hamburger open"
  const menuClosed = "block hamburger"
  return (
     <section className='block md:hidden'>
     <div className="flex justify-between items-center mt-8 px-8">
       <Link to={"/"}>
         <p className="text-lg font-bold">Website Title</p>
         <p>Sub title</p>
       </Link>
       <button className={isOpen ? menuOpen : menuClosed} onClick={MobileMenuH}>
         <span className="hamburger-top"></span>
         <span className="hamburger-middle"></span>
         <span className="hamburger-bottom"></span>
       </button>
     </div>
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
         </div>
         <div className="text-sm  text-gray-200 w-full flex flex-col justify-center items-center absolute bottom-10">
           <p>xxx@gmail.com</p>
           <p>+88-XXXXX-XXXXX</p>
           <p>Company address</p>
         </div>
       </div>
     ) : null}
   </section>

  )
}
