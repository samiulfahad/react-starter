import React from "react"
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Layout from "./common/Layout"
import { Home, AboutUs, Contact, Donate, Committee } from "./pages"

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/committee" element={<Committee/>} />
        </Routes>
      </Layout>
    </>
  )
}

export default App
