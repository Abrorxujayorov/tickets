import React from 'react'
import { useState } from 'react'
import Sidybar from '../sidybar/Sidybar'
import Icons from '../../assets/Icons'
export default function Buttonst({icon}) {
    const [buttonst, setButtonst] = useState([
        {name : 'Overview',id: 1},
        {name : 'Tickets', id: 2 },
        {name : 'Ideas', id: 3},
        {name : 'Contacts', id: 4},
        {name : 'Agents', id: 5},
        {name : 'Articles', id: 6},
        {name : 'Settings', id: 7},
        {name : 'Subscription', id: 8}
    ])
    return(
        <>
            <Sidybar button = {buttonst}/>
        </>
    ) 

}
