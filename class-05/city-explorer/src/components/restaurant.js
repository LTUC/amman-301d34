import { Component } from "react";

export default class Restaurant extends Component {
  render() {
    console.log(this.props.data);
    return (
      <>
        <ul>
          {
            this.props.data && this.props.data.map((item, idx) => (
              <li key={idx}>
                <h3>{item.restaurant}</h3>
                <p>{item.cuisines}</p>
              </li>
            ))
          }
        </ul>
      </>
    )
  }
}