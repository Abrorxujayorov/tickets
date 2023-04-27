import React from 'react'
import './sidybar.css'
export default function Sidybar({button}) {
  return (
    <div className='sidybar'>
      <h3 className='sadybar-title'>  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="16" cy="16" r="16" fill="#3751FF"/>
<path d="M11 10C11 9.44772 11.4477 9 12 9H15.9905C18.2127 9 19.9333 9.60955 21.1524 10.8287C22.3841 12.0478 23 13.765 23 15.9803C23 18.2088 22.3841 19.9391 21.1524 21.1713C19.9333 22.3904 18.2127 23 15.9905 23H12C11.4477 23 11 22.5523 11 22V10Z" fill="url(#paint0_linear_597_258)"/>
<defs>
<linearGradient id="paint0_linear_597_258" x1="11" y1="9" x2="23" y2="23" gradientUnits="userSpaceOnUse">
<stop stop-color="white" stop-opacity="0.7"/>
<stop offset="1" stop-color="white"/>
</linearGradient>
</defs>
</svg>
Dashboard Kit
</h3>
      {
        button.map(item => <span key={item.id} className='sadybar-btn__control'><button className='sadybar-btn'><i class="fa-solid fa-user icon"></i> {item.name}</button></span> )
      }
    </div>
  )
}
