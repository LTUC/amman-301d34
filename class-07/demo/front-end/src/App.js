import './App.css';
import axios from 'axios';
import { Component } from 'react';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listOfName: []
    }
  }

  getDataFromServer = async() => {
    const nameData = await axios.get('http://localhost:3000/userlist')
    console.log(nameData.data)
    this.setState({listOfName: nameData.data.listOfName})
  }

  render () {
    return (
      <div className="App">
        <button onClick={this.getDataFromServer}>fetch</button>
        {
          this.state.listOfName.map(item => {
            return (
              <li>{item}</li>
            )
          })
        }
      </div>
    );
  }
}

export default App;
