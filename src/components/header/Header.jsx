import React from 'react'
import './header.css'
export default function Header() {
  return (
    <div className='header'>
      <h4 className='header-title'>Tickets</h4>
      <p className='icons'><i class="fa-solid fa-magnifying-glass header-icon"></i></p>
      <p><i class="fa-solid fa-circle-user header-icon"></i></p>
      <div className='info'>
        <p className='name'>  Jones Ferdinand  </p>
        <img src="../../../public/header.png" alt="pic" className='header-pic' />
      </div>
    </div>
  )
}
