import React from 'react';
import Form from 'react-bootstrap/Form';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
    }
  }

  handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted");
  }

  render() {
    return (
      <>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>Find Photos About...</Form.Label>
            <Form.Control  type="text" placeholder="Enter a search term" />
          </Form.Group>
        </Form>
      </>
    )
  }
}

export default App;
