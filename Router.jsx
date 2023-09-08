import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Home from './src/pages/Home'


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
   

    </Routes>
</BrowserRouter>
  )
}

export default Router