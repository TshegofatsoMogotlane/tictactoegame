import React from 'react'
import {BrowserRouter, Route, Routes} from "react-router-dom"
import Home from './pages/home/Home'
import Game from './pages/game/Game'
import Details from './pages/details/Details'

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/game-on' element={<Game/>} />
            <Route path='/details' element={<Details/>} />
        </Routes>
    </BrowserRouter>
  )
}

export default Router
