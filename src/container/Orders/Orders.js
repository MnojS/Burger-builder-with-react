import React, { Component } from 'react'
import Order from '../../component/Order/Order'
import axios from '../../axios-orders'

class Orders extends Component {
    state = {
        orders : [],
        loading:true
    }
    componentDidMount() {
        axios.get('/orders')
            .then(res => {
                // console.log(res.data);
                const fetchOrders = [];
                for(let key in res.data){
                    fetchOrders.push({
                        ...res.data[key],
                        id:key
                    });
                }
                this.setState({loading:false , orders: fetchOrders})
            })
            .catch(err => {
                this.setState({loading:false})
            })
    }
    render() {
        return (
            <div>
                <Order />
                <Order />
            </div>
        )
    }
}

export default Orders
