import React from 'react'
import { useState } from 'react'
import Sidybar from '../sidybar/Sidybar'
import { Overview,Tickets,Ideas,Contacts,Agents,Articles,Settings,Subscription } from '../../assets/Icons';
export default function Buttonst({icon}) {
    console.log(icon);
    const [buttonst, setButtonst] = useState([
        {name : 'Overview', icon: <Overview/> ,id: 1},
        {name : 'Tickets', icon: <Tickets/> ,id: 2 },
        {name : 'Ideas', icon: <Ideas/>, id: 3},
        {name : 'Contacts', icon: <Contacts/>, id: 4},
        {name : 'Agents', icon: <Agents/> , id: 5},
        {name : 'Articles', icon: <Articles/>, id: 6},
        {name : 'Settings', icon: <Settings/> , id: 7},
        {name : 'Subscription', icon: <Subscription/>, id: 8}
    ])
    return(
        <>
            <Sidybar button = {buttonst}/>
        </>
    ) 

}
