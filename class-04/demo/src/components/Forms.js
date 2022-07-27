import React from 'react';

class Forms extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userInput: 'no user input yet',
            userStory : ''
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form has been submitted!");
        console.log(e.target.userInput.value)
        // the old way
        // let userInput = e.target.userInput.value;
        this.setState({
            userInput: e.target.userInput.value
        })
    }

    handleChange = (e) => { 
        console.log(e.target.value);
        this.setState({
            userStory: e.target.value
        })
    }

    render() {
        return (
            <>
                <h1>Forms</h1>
                <p>The user input is: { this.state.userInput}</p>
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="userInput">User Input</label>
                    <input type="text" id="userInput" placeholder='Write here....' />

                    <label htmlFor="userStory">User story</label>
                    <input type="text" id="userStory" placeholder='Write your story here....' onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                <p>The user story is: { this.state.userStory}</p>
            </>
        )
    }
}

export default Forms;

// Events:
// 1. where is the event
// 2. what is the event
// 3. what will happen