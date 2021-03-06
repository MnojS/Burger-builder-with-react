import React, { Component } from 'react'
import Auxiliary from '../../hoc/Auxiliary/Auxiliary'
import Burger from '../../component/Burger/Burger'
import BuildControls from '../../component/Burger/BuildControls/BuildControls'
import Modal from '../../component/UI/Modal/Modal'
import OrderSummary from '../../component/Burger/OrderSummary/OrderSummary'
import Spinner from '../../component/UI/Modal/Spinner/Spinner'

import axios from '../../axios-orders'

const INGREDIENT_PRICES = { 
    salad : 0.5,
    cheese : 0.4,
    meat : 1.3,
    bacon : 0.7
}

class BurgerBuilder extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             ingredients: {
             salad:0,
             bacon:0,
             cheese:0,
             meat:0

        },
        totalPrice : 4,
        purchaseable : false,
        purchasing : false,
        loading : false
    }
    }

    addIngredientHandler = (type) => {
        const oldCount = this.state.ingredients[type];
        const updateCount = oldCount + 1;
        const updateIngredients = {...this.state.ingredients}

        updateIngredients[type] = updateCount;
        const priceAddtion = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddtion ;

        this.setState({
            totalPrice : newPrice , 
            ingredients : updateIngredients
        })
        this.updatePurchaseState(updateIngredients);
    }
    removeIngredientsHandler = (type) => {
        
        const oldCount = this.state.ingredients[type];
        if (oldCount <= 0) {
            return;
        }
        const updateCount = oldCount - 1;
        const updateIngredients = {...this.state.ingredients}

        updateIngredients[type] = updateCount;
        const priceDeduction = INGREDIENT_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction ;

        this.setState({
            totalPrice : newPrice , 
            ingredients : updateIngredients
        })
        this.updatePurchaseState(updateIngredients);
    }
    updatePurchaseState(ingredients){
 
        const sum  = Object.keys(ingredients)
            .map(igKey => {
                return ingredients[igKey];
            })
            .reduce((sum , el) => {
                return sum + el;
            } , 0);
            this.setState({
                purchaseable : sum > 0
            })
    }
    purchaseHandler = ()=> {
        this.setState({purchasing : true})
    };
    purchaseCancelledHandler = () => {
        this.setState({purchasing : false})
    }
    purchaseContinue = () => {
        // alert('You Continue !')
       
        const queryParams = [];
        for (let i in this.state.ingredients){
            queryParams.push(encodeURIComponent(i) + '=' + encodeURIComponent(this.state.ingredients[i]));
        }
        queryParams.push('price=' + this.state.totalPrice)
        const queryString = queryParams.join('&');
        this.props.history.push({
            pathname:'/checkout',
            search : '?' + queryString
        });
    }
    
    render() {
        const disabledInfo = {
            ...this.state.ingredients
        };
        for (let key in disabledInfo) {
            disabledInfo[key] = disabledInfo[key] <= 0;
            
        }
        let orderSummary = <OrderSummary ingredients = {this.state.ingredients} 
        purchaseCancelled = {this.purchaseCancelledHandler}
        purchaseContinued ={this.purchaseContinue}
        price = {this.state.totalPrice}/>

        if(this.state.loading){
            orderSummary = <Spinner />
        }

        return (
            <Auxiliary>
                    <Modal show = {this.state.purchasing} modalClosed={this.purchaseCancelledHandler}>
                        {orderSummary}
                    </Modal>
                    <Burger ingredients = {this.state.ingredients}/>
                    <BuildControls 
                    ingredientAdded = {this.addIngredientHandler}
                    ingredientRemoved = {this.removeIngredientsHandler} 
                    disabled = {disabledInfo}
                    purchaseable = {this.state.purchaseable}
                    price = {this.state.totalPrice}
                    ordered = {this.purchaseHandler}/>
            </Auxiliary>
        )
    }
}
export default BurgerBuilder;