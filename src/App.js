import './App.css';
import { Component, React } from 'react';
import Ingredients from './components/Ingredients'
import Burger from './components/Burger'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      ingredients: [
          {name: 'Kaiser Bun', color: 'saddlebrown'},
          {name: 'Sesame Bun', color: 'sandybrown'},
          {name: 'Gluten Free Bun', color: 'peru'},
          {name: 'Lettuce Wrap', color: 'olivedrab'},
          {name: 'Beef Patty', color: '#3F250B'},
          {name: 'Soy Patty', color: '#3F250B'},
          {name: 'Black Bean Patty', color: '#3F250B'},
          {name: 'Chicken Patty', color: 'burlywood'},
          {name: 'Lettuce', color: 'lawngreen'},
          {name: 'Tomato', color: 'tomato'},
          {name: 'Bacon', color: 'maroon'},
          {name: 'Onion', color: 'lightyellow'}
      ],
      burger: []
    }
  }

  handleAddToBurger = (ingredient) => {
    const newBurger = [...this.state.burger]
    newBurger.push(ingredient)
    this.setState({burger: newBurger})
  }

  render() {
    return (
      <div>
        <div id="ingredients">
          <Ingredients ingredients={this.state.ingredients} handleAddToBurger={this.handleAddToBurger}/>
        </div>
        <div id="burger">
          <Burger burgerItem={this.state.burger}/>
        </div>
      </div>
    )
  }
}

export default App;
