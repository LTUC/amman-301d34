import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

class UserModal extends React.Component {
    render() {
        return (
            <>
                <Modal show={this.props.showModal} onHide={this.props.handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Thank you for your response</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>Your name is: {this.props.userInfo.userName}</p>
                        <p>Your like to do:{this.props.userInfo.favActivity} </p>
                        <p> you are {this.props.userInfo.typeofPerson} type of a person </p>
                        {(this.props.userInfo.likeIceCream) ?
                            <p>I like ice cream</p> :
                            <p>I don't like ice cream</p>}

                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={this.props.handleClose}>
                            Close
                        </Button>

                    </Modal.Footer>
                </Modal>
            </>
        )
    }
}

export default UserModal;