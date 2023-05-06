import React from 'react'
import { Route, Routes } from 'react-router-dom'
import './main.css'
import MainHero from '../mainhero/MainHero'
import Users from '../Users/Users'
import MainBar from '../../pages/MainBar'
export default function Main() {
  return (
    <main className='main'>
      <MainHero/>
      <Users/>
      <Routes>
        <Route path='/tickets' element={<MainBar/>}/>
        
      </Routes>

    </main>
  )
}
