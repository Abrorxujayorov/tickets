import React from 'react'
import './mainHero.css'
export default function MainHero() {
  return (
    <div className='mainHero'>
      <h3 className='mainHero-title'>All tickets</h3>
      <span className='mainHero-icon'>
        <p><i class="fa-solid fa-arrow-up-short-wide"></i>Sort</p>
      <p><i class="fa-solid fa-filter"></i>Filter</p>
      </span>
    </div>
  )
}
