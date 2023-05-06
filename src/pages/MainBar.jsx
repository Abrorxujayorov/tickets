import React, { useState } from 'react'
const avatar = '../assets/MainBarpic/Avatar.png'
import './MainBar.css'
export default function MainBar() {
    const [mainbar, setMainbar] = useState([
        {pic: avatar , detals: 'Contact Email not Linked',name: 'Tom Cruise', date: 'May 26, 2019',Priority: 'High' ,id: 1},
        {pic: avatar , detals: 'Adding Images to Featured Posts',name: 'Matt Damon', date: 'May 26, 2019', Priority: 'low' ,id: 2},
        {pic: avatar , detals: 'When will I be charged this month?',name: 'Robert Downey', date: 'May 26, 2019',Priority: 'High' ,id: 3},
        {pic: avatar , detals: 'Payment not going through',name: 'Christian Bale', date: 'May 25, 2019',Priority: 'Normal' ,id: 4},
        {pic: avatar , detals: 'Unable to add replies',name: 'Henry Cavil', date: 'May 25, 2019',Priority: 'High' ,id: 5},
        {pic: avatar , detals: 'Downtime since last week',name: 'Chris Evans', date: 'May 25, 2019',Priority: 'Normal' ,id: 6},
        {pic: avatar , detals: 'Referral Bonus',name: 'Sam Smith', date: 'May 25, 2019',Priority: 'low' ,id: 7},
        {pic: avatar , detals: 'How do I change my password?',name: 'Steve Rogers', date: 'May 24, 2019',Priority: 'Normal' ,id: 8}
    ])
  return (
    <div className='main-bar-control'>
        {
            mainbar.map(item => <ul key={item.name} className='MainBar'>
            {/* <li>
                <img src={item.pic} alt="pic" />
            </li> */}
            <li className='mainbar-item'>
                {item.detals}
            </li>
            <li className='mainbar-item'>
                {item.name}
            </li>
            <li className='mainbar-item'>
                {item.date}
            </li>
            <li className={`mainbar-ii ${item.Priority === 'High' ? 'High' : item.Priority === 'low' ? 'low' : item.Priority === 'Normal' ? 'Normal' : ''} `}>
                {item.Priority}
            </li>
    </ul>)
        }
    </div>
  )
}
