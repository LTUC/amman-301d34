import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import kids from './assets/child.jpg'

class Child extends React.Component {
  askFor10Dollars = () => {
    this.props.askForMoney(10);
  }

  askFor20Dollars = () => {
    this.props.askForMoney(20);
  }

  render() {
    return (
      <>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={kids} />
          <Card.Body>
            <Card.Title>Billy</Card.Title>
            <Card.Text>
              I am Billy, I have {this.props.billyMoney} dollar
            </Card.Text>
            <Button onClick={this.askFor10Dollars} variant="primary">Ask parent for 10 dollars</Button>
            <Button onClick={this.askFor20Dollars} variant="primary">Ask parent for 20 dollars</Button>
          </Card.Body>
        </Card>
      </>
    )
  }
}

export default Child;