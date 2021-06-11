import React, { Component } from 'react'
import Button from '../../../component/UI/Modal/Button/Button'
import './ContactData.css'

class ContactData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             email : '' ,
             address : {
                 street : '',
                 postalCode : ''
             }
        }
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
    }

    render() {
        return (
            <div className="ContactData">
               <h4>Enter your contact data</h4> 
               <form>
                   <input className="Input" type="text" name="name" placeholder="Your Name" />
                   <input className="Input" type="email" name="email" placeholder="Your Mail" />
                   <input className="Input" type="text" name="street" placeholder="Street" />
                   <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                   <Button btnType="Success" clicked={this.orderHandler} >Order</Button>
               </form>
            </div>
        )
    }
}

export default ContactData
