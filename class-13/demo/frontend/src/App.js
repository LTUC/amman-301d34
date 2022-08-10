import axios from 'axios';
import React from 'react'
import Form from './components/Form';
import List from './components/List';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      cats: []
    }
  }


  getCats = async () => {
    const res = await axios.get('http://localhost:3001/cat');
    this.setState({ cats: res.data });
    console.log(this.state);
  }

  componentDidMount() {
    console.log("inside the componentDidMount");
    this.getCats();
  }

  deleteCat = async (id) => {
    console.log(id);
    await axios.delete(`http://localhost:3001/cat/${id}`);
    this.getCats()
  }

  createCat = async (e) => {
    e.preventDefault();
    const newCat = {
      'name': e.target.catName.value,
      'age': e.target.catAge.value,
      'isAdopted': true
    }
    await axios.post('http://localhost:3001/cat', {newCat});
    this.getCats();
  }


  render() {
    return (
      <div>
        <Form submitHandler = {this.createCat}/>
        <button onClick={this.getCats}>
          Get Cats Data
        </button>
        <List deleteCat={this.deleteCat} catData={this.state.cats}/>
      </div>
    )
  }
}

export default App