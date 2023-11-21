import React from "react"
import { Routes, Route } from 'react-router-dom'
import Layout from "./common/Layout"
import { Home, AboutUs, Contact } from "./pages"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/contact" element={<Contact/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
