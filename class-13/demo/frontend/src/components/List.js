import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class List extends Component {
  render() {
    return (
      <ul>
        {
          this.props.catData.map(item => 
            <li>
              {item.name}
              <button onClick={() => this.props.deleteCat(item._id)}>delete</button>
              <Link to={`/cat/${item._id}`}>update</Link>
            </li>
          )
        }
      </ul>
    )
  }
}
