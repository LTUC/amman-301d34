import './App.css';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pokemon: []
    }
  }
  getPokemon = async() => {
    const pokemonData = await axios.get(`${process.env.REACT_APP_MAIN_URL}/pokemon`)
    // console.log(pokemon.data.results);
    this.setState({
      pokemon: pokemonData.data.results
    });
    console.log(pokemonData)
  }
  
  render() {
    return (
      <div className="App">
        <h1>{process.env.REACT_APP_TITLE}</h1>
        <button onClick={this.getPokemon}>submit</button>
        {this.state.pokemon && this.state.pokemon.map(item => {
          return (
            <li>{item.name}</li>
          )
        })

        }
      </div>
    );
  }
}

export default App;
