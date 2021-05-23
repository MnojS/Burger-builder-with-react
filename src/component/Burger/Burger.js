import React from 'react'
import './Burger.css'
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger = (props) => {
    let transformedIngredient = Object.keys(props.ingredients)
    .map(igKey => {
        return [...Array(props.ingredients[igKey])].map((_, i ) => {
            return <BurgerIngredient key ={igKey + i} type={igKey} />
        }) // [,]
    })
    .reduce((arr , el) => {
        return arr.concat(el);
    } , []);
    if (transformedIngredient.length === 0){
        transformedIngredient = <p>Please start adding ingredient</p>
    }
    console.log(transformedIngredient);
    return (
        <div className={"Burger"} >
            <BurgerIngredient type="bread-top" />
            {/* dynamically */}
            {transformedIngredient}
            {/* <BurgerIngredient type="cheese" />
            <BurgerIngredient type="meat" /> */}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};
export default burger;