import React from 'react'
import { Routes, Route } from "react-router-dom"
// Components
import Header from "../../components/dashboard/Header"
// Pages
import Books from './Books'
import Contact from './Contact'
import Dashboard from './dashboard'
// import NoPage from '../Frontend/NoPage'

export default function Index() {
  return (
    <>
    <Header />
     <Routes>
    {/* <Route path='home' element={<Login />} /> */}
    <Route path='book' element={<Books />} />
    <Route path='contact' element={<Contact />} />
    <Route path='dashboard' element={<Dashboard />} />
    {/* <Route path='*' element={<NoPage />} /> */}
    </Routes>
    </>
  )
}


