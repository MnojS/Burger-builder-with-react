import React from 'react'
import './NavigationItems.css'
import NavigationItem from './NavigationItem'

const NavigationItems = () => {
    return (
        <ul className={'NavigationItems'}>
            <NavigationItem link ={"/"} active >Burger Builder</NavigationItem>
            <NavigationItem link ={"/"} ><strong>CheckOut</strong></NavigationItem>
        </ul>
    )
}

export default NavigationItems
