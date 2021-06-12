import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem'

const NavigationItems = () => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem link ={"/"} >Burger Builder</NavigationItem>
            <NavigationItem link ={"/orders"} ><strong>Orders</strong></NavigationItem>
        </ul>
    )
}

export default NavigationItems
