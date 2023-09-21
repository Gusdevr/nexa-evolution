import { BrowserRouter, Route, Routes } from "react-router-dom"
import React from 'react'
import Home from './src/pages/Home'
import QuemSomos from "./src/pages/QuemSomos"
import Cases from "./src/pages/Cases"
import ServiceUs from "./src/pages/ServiceUs"
import Contact from "./src/pages/Contact"


const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='quemsomos' element={<QuemSomos />} />
        <Route path='cases' element={<Cases />} />
        <Route path='servicos' element={<ServiceUs />} />
        <Route path='contato' element={<Contact />} />
   

    </Routes>
</BrowserRouter>
  )
}

export default Router