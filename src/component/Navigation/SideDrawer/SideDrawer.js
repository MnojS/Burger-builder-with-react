import React from 'react'
import Logo from '../../Logo/Logo'
import './SideDrawer.css'
import NavigationItems from '../NavigationItem/NavigationItems'
import Backdrop from '../../UI/Modal/Backdrop/Backdrop'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'

// const SideDrawer = (props) => {
//     const attachedClasses = ['SideDrawer' , 'Close'];
//     if (props.open) {
//         attachedClasses = ['SideDrawer' , 'Open']
        
//     }
//     //....
//     return (
//         <Auxiliary>
//             <Backdrop clicked={props.closed} show={props.open} />
//             <div className={attachedClasses.join('')}>
//                 <div className={Logo}>
//                     <Logo height={"11%"}/>
//                 </div>
//                 <nav>
//                     <NavigationItems />
//                 </nav>
//             </div>
//         </Auxiliary>
//     )
// }

// export default SideDrawer

const sideDrawer = ( props ) => {
    let attachedClasses = ['SideDrawer', 'Close'];
    if (props.open) {
        attachedClasses = ['SideDrawer', 'Open'];
    }
    return (
        <Auxiliary>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedClasses.join(' ')}>
                <div className={'Logo'}>
                    <Logo height={"11%"}/>
                </div>
                <nav>
                    <NavigationItems />
                </nav>
            </div>
        </Auxiliary>
    );
};

export default sideDrawer;
