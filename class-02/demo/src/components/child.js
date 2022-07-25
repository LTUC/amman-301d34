import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clickCounter: 0
    }
  }

  handleClick = () => {
    this.setState({clickCounter: this.state.clickCounter + 1})
  }

  render() {
    return (
      <>
        <h2>{this.props.name}</h2>
        <img src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=772&q=80" alt="" onClick={this.handleClick}/>
        <span>👏{this.state.clickCounter}</span>
      </>
    )
  }
}

export default Child;