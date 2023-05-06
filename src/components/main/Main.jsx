import React from 'react'
import './main.css'
import MainHero from '../mainhero/MainHero'
import Users from '../Users/Users'
import MainBar from '../../pages/MainBar'
export default function Main() {
  return (
    <main className='main'>
      <MainHero/>
      <Users/>
      <MainBar/>
    </main>
  )
}
