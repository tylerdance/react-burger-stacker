import React, { Component } from 'react';

class Ingredients extends Component {
    render() {
        const burgerIngredients = this.props.ingredients.map((ingredient, index) => {
            return (
            <div>
                <li key={index}>{ingredient.name}</li>
                <button onClick={() => this.props.handleAddToBurger(ingredient)}>Add to Burger</button>
            </div>
            )
        })

        return(
            <div>
                <h1>Choose Your Ingredients</h1>
                <ul>
                    <li>{burgerIngredients}</li>
                </ul>
            </div>
        )
    }
}

export default Ingredients;