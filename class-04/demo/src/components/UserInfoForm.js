import React from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import UserModal from './Modal';

class UserInfo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userName: '',
            favActivity: '',
            likeIceCream: false,
            typeofPerson: '',
            showModal : false
        }
    }
    handleClose = () => {
        this.setState({
            showModal: false
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            userName: e.target.userName.value,
            favActivity: e.target.activity.value,
            likeIceCream: e.target.iceCream.checked, // true or false
            typeofPerson: e.target.typeOfPerson.value,
            showModal : true
        });

        console.log({
            userName: e.target.userName.value,
            favActivity: e.target.activity.value,
            likeIceCream: e.target.iceCream.checked, // true or false
            typeofPerson: e.target.typeOfPerson.value
        })
    }

    render() {
        return (
            <>
                <h1>Add your info here: </h1>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group className="mb-3">
                        <Form.Label>User Name: </Form.Label>
                        <Form.Control type="text" placeholder="Enter name" id="userName" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Your fav activity: </Form.Label>
                        <Form.Control type="text" placeholder="Write your activity here" id="activity" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Do you like ice cream? " id="iceCream" />
                    </Form.Group>

                    <Form.Group className="mb-3">
                        <Form.Label htmlFor="typeOfPerson">What type of person you are?</Form.Label>
                        <Form.Select id="typeOfPerson">
                            <option value="cat">Cat Person</option>
                            <option value="dog">Dog Person</option>
                            <option value="none">I don't like animals</option>
                        </Form.Select>
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
                <UserModal
                    showModal={this.state.showModal}
                    handleClose={this.handleClose}
                    userInfo = {this.state}
                />
            </>
        )
    }
}

export default UserInfo;