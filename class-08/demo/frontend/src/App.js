import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInput: "",
      photosArr: [],
    }
  }
  updateUserInput = (e) => {
    this.setState({
      userInput: e.target.value
    })
  }

  // send a req to my server to recieve the photo array of objects
  // http://localhost:8080/photos?photoName=book
  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form is Submitted");
    const url = `${process.env.REACT_APP_SERVER_LINK}/photos?photoName=${this.state.userInput}`;
    const serverResponse = await axios.get(url);
    console.log(serverResponse.data);
    this.setState({
      photosArr: serverResponse.data,
    });
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Find Photos About...</Form.Label>
            <Form.Control onChange={this.updateUserInput} type="text" placeholder="Enter a search term" />
          </Form.Group>
        </Form>

        <div>
          {this.state.photosArr.length > 0 && (
            this.state.photosArr.map(photoObject => {
              return (
                <>
                  <img src={photoObject.image_url} alt={photoObject.name} />
                  <h2>{photoObject.name}</h2>
                  <p>{photoObject.description}</p>
                </>
              )
            })
          )

          }
        </div>
      </>
    )
  }
}

export default App;
