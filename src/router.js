import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom';
import React, { useState } from 'react';
import Home from './home';
import Signup from './pages/signup';
import Login from './pages/login';
import Dashbord from './pages/dashbord';
export default function Router() {

const[loginData, setLoginData]= useState(JSON.parse(localStorage.getItem("info")) || []);

  return (
    
   <BrowserRouter>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="signup" element={<Signup/>}/>
    <Route path='login' element={loginData.length >= 1?<Navigate to="/dashbord"/>:<Login/>}/>
    <Route path="dashbord" element={loginData.length < 1? <Navigate to="/"/>:<Dashbord/>}/>

   </Routes>
   </BrowserRouter>
  )
}

