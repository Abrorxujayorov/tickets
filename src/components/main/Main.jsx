import React from 'react'
import './main.css'
import MainHero from '../mainhero/MainHero'
import Users from '../Users/Users'
export default function Main() {
  return (
    <main className='main'>
      <MainHero/>
      <Users/>
    </main>
  )
}
