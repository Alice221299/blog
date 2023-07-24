import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from '../pages/Home/Home'
import Form from '../pages/Form/Form'
import NewPost from '../pages/NewPost/NewPost'

const Routers = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/'> 
              <Route index element={<Home/>} />
              <Route path='form' element={<Form/>}/>
              <Route path='new/:articleId' element={<NewPost/>}/>
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers