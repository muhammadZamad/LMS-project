import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
// Pages
import Frontend from "../pages/Frontend"
import Auth from "../pages/Auth"
import Dashboard from "../pages/Dashboard"
export default function CustomRoutes() {
  return (
    <BrowserRouter>
    
    <Routes>
      <Route path='/*' element={<Frontend />} />
      <Route path='/auth/*' element={<Auth />} />
      <Route path='/dashboard/*' element={<Dashboard />} />
    
    </Routes>
   
    </BrowserRouter>
  )
}
