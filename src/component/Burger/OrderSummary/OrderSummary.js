import React from 'react'
import Auxiliary from '../../../hoc/Auxiliary/Auxiliary'
import Button from '../../../component/UI/Modal/Button/Button'
import  '../../../component/UI/Modal/Button/Button.css'


const OrderSummary = (props) => {

    const ingredientSummary = Object.keys(props.ingredients)
    .map(igKey => {
        return <li>
            <span>{igKey}:</span>{props.ingredients[igKey]}
        </li>
    })
    return (
        <Auxiliary>
            
            <h3>Your Order</h3>
            <p>A delicious burger with following ingredients</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price : {props.price.toFixed(2)}</strong></p>
            <p>Continue to checkout ?</p>
            <Button btnType='Danger' clicked={props.purchaseCancelled}>Cancel</Button>
            <Button btnType='Success' clicked={props.purchaseContinued}>Continue</Button>
        </Auxiliary>
    )
}
export default OrderSummary;