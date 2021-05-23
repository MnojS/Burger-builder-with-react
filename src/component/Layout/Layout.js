import React, { Component } from 'react';
import Toolar from '../Navigation/Toolbar/Toolbar'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import classes from './Layout.module.css'
import SideDrawer from '../Navigation/SideDrawer/SideDrawer'

class Layout extends Component  {
    constructor(props) {
        super(props)
    
        this.state = {
             showSideDrawer : true
        }
    }
    

    sideDrawerClosedHandler = () => {
        this.setState({showSideDrawer : false})
    } 
    sideDrawerShowHandler = () => {
       this.setState((prevState) => {
           return { showSideDrawer : !prevState.showSideDrawer }
       })
    }

    render(){
        return(
            <Auxiliary >
                <Toolar drawerToggleClicked={this.sideDrawerShowHandler}/>
                <SideDrawer open={this.state.showSideDrawer} closed = {this.sideDrawerClosedHandler} />
                <main className = {classes.Content}>
                    {this.props.children}
                </main>
            </Auxiliary>
        )
    }};
export default Layout; 