import React from 'react'
import { useState } from 'react'
import Sidybar from '../sidybar/Sidybar'
import { Overview,Tickets,Ideas,Contacts,Agents,Articles,Settings,Subscription } from '../../assets/Icons';
export default function Buttonst({icon}) {
    console.log(icon);
    const [buttonst, setButtonst] = useState([
        {name : 'Overview', icon: <Overview/>, peth: 'overview' ,id: 1},
        {name : 'Tickets', icon: <Tickets/>, peth: 'tickets' ,id: 2 },
        {name : 'Ideas', icon: <Ideas/>, peth: 'ideas', id: 3},
        {name : 'Contacts', icon: <Contacts/>, peth: 'contacts', id: 4},
        {name : 'Agents', icon: <Agents/>, peth: 'agents' , id: 5},
        {name : 'Articles', icon: <Articles/>, peth: 'articles', id: 6},
        {name : 'Settings', icon: <Settings/>, peth: 'settings' , id: 7},
        {name : 'Subscription', icon: <Subscription/>, peth: 'subscription', id: 8}
    ])
    return(
        <>
            <Sidybar button = {buttonst}/>
        </>
    ) 

}
