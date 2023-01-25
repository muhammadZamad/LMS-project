import React from 'react'
import { Routes, Route } from "react-router-dom"
// pages
import Login from "./Login"
import Register from "./Register"
import ForgetPassword from "./ForgetPassword"
import ResetPassword from "./ResetPassword"
import NoPage from '../Frontend/NoPage'
export default function Index() {
  return (
    <Routes>
    <Route path='login' element={<Login />} />
    <Route path='register' element={<Register />} />
    <Route path='forget-password' element={<ForgetPassword />} />
    <Route path='reset-password' element={<ResetPassword />} />
    <Route path='*' element={<NoPage />} />
    </Routes>
  )
}
