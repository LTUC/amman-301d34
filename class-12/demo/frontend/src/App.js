import axios from 'axios';
import React from 'react'

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }

  // componentDidMount = ()=>{
  //   this.getCats();
  // }

  getCats = async () => {

    let catsData = await axios.get(`${process.env.REACT_APP_SERVER}/cats`)
    this.setState({
      cats: catsData.data
    })
    // console.log(this.state.cats)

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