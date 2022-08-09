import axios from 'axios';
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }


  getCats = async () => {
    const res = await axios.get('http://localhost:3001/cats');
    this.setState({ cats: res.data });
    console.log(this.state);
  }

  componentDidMount() {
    console.log("inside the componentDidMount");
    this.getCats();
  }


  render() {
    return (
      <div>
        <button onClick={this.getCats}>
          Get Cats Data
        </button>
      </div>
    )
  }
}

export default App