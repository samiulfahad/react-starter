import React from "react"
import MainNav from "./MainNav"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <>
      <MainNav />
      {children}
      <Footer />
    </>
  )
}

export default Layout
