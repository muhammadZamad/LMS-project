import React from 'react'
import { Routes, Route } from "react-router-dom"
// Components
import Header from "../../components/frontend/Header"
import Footer from "../../components/frontend/Footer"
// Pages
import Hero from "./Hero";
import About from "./AboutUs";
import Blog from "./Blog";
import Contact from "./ContactUs"
import NoPage from "./NoPage"
export default function Index() {
  return (
  <>
  <Header />
  <main>
    <Routes>
      <Route path='/' element={ <Hero /> } />
      <Route path='about' element={<About />} />
      <Route path='blogs' element={<Blog />} />
      <Route path='contact' element={<Contact />} />


        <Route path='*' element={<NoPage />} />
    </Routes>
  </main>
  <Footer />
  </>
    )
}
