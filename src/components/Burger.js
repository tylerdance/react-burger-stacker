import React, {Component} from 'react';

class Burger extends Component {
    render() {
        const burgerIngredients = this.props.burgerItem.map((ingredient, index) => {
            return(
                <div>
                    <li key={index}>{ingredient.name}</li>
                </div>
            )
        })

        return(
            <div>
                <h1>Burger</h1>
                {burgerIngredients}
            </div>
        )
    }

}

export default Burger;