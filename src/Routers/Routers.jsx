import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Form from '../pages/Form/Form'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'> 
              <Route index element={<Home/>} />
              <Route path='form' element={<Form/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers