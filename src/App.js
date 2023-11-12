import React from 'react'
import {BrowserRouter,Routes,Route}  from 'react-router-dom'
import FormValidation from './Component/FormValidation'
import Home from './Component/Home'
import './App.css'
const App = () => {
  return (
    <div>
       <BrowserRouter>
        <Routes>
          <Route path='/' element={<FormValidation />}></Route>
          <Route path='/home' element={<Home/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
