import React, { Component } from 'react'

export default class Form extends Component {
  render() {
    return (
      <form onSubmit={this.props.submitHandler}>
        <label htmlFor="">Cat name</label>
        <input type="text" id='catName'/>
        <br />
        <label htmlFor="">Cat age</label>
        <input type="text" name="" id="catAge" />
        <br />
        <button type='submit'>save</button>
      </form>
    )
  }
}
