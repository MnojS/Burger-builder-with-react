import React, { Component } from 'react'
import Button from '../../../component/UI/Modal/Button/Button'
import './ContactData.css'
import axios from '../../../axios-orders'
import Spinner from '../../../component/UI/Modal/Spinner/Spinner'

class ContactData extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name : '',
             email : '' ,
             address : {
                 street : '',
                 postalCode : ''
             },
             loading:false
        }
    }
    
    orderHandler = (event) => {
        event.preventDefault();
        console.log(this.props.ingredients);
        this.setState({loading : true})
        const order = {
            ingredients : this.state.ingredients,
            price : this.props.price,
            customer : {
                name:'Mnoj S',
                address : {
                    street : 'Nirgudi R-1',
                    zipCode : '413047',
                    country : 'India'
                },
                email : 'test@test.com'
            },
            deliveryMethod : 'fastest'
        }
        axios.post('/orders.json' , order)
            .then(response => {
                // console.log(response)
                this.setState({loading : false })
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading : false })
                // console.log(error)
            })
    }

    render() {
        let form = (
            <form>
                   <input className="Input" type="text" name="name" placeholder="Your Name" />
                   <input className="Input" type="email" name="email" placeholder="Your Mail" />
                   <input className="Input" type="text" name="street" placeholder="Street" />
                   <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                   <Button btnType="Success" clicked={this.orderHandler} >Order</Button>
               </form>
        );
        if (this.state.loading) {
            form = <Spinner />;
        }
        return (
            <div className="ContactData">
               <h4>Enter your contact data</h4> 
               {form}
            </div>
        )
    }
}

export default ContactData
