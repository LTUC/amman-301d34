import React from 'react';
import Child from './child';
import Card from 'react-bootstrap/Card';
import mom from './assets/child.jpg';

class Parent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      billyMoney: 0,
      money: 100
    }
  }

  giveMoneyToBilly = (value) => {
    this.setState({
      billyMoney: this.state.billyMoney + value,
      money: this.state.money - value
    })
  }

  render() {
    return (
      <div>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={mom} />
          <Card.Body>
            <Card.Text>
              I am the parent, I have {this.state.money} dollars
            </Card.Text>
          </Card.Body>
        </Card>

        <Child billyMoney={this.state.billyMoney} askForMoney={this.giveMoneyToBilly}/>
      </div>
    )
  }
}

export default Parent;