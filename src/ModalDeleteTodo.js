import React, {useState} from 'react';
import {Button, Col, Modal, ModalBody, ModalFooter, ModalHeader, Input} from "reactstrap";


function ModalDeleteTodo(props) {
    const {todo} = props;
    const [inputValue, setInputValue] = useState('');
    const [btnDisabled, setBtnDisabled] = useState(true);

    const deleteButtonHandler = () => {
        props.deleteTodo()
        props.setIsModalOpen(false)
    }

    const inputHandler = (e) => {
        setInputValue(e.target.value)
        validate();
    }

    const validate = () => {
        if (inputValue === todo.title) setBtnDisabled(false)
        else setBtnDisabled(true)
    }

    return (
        <Col>
            <Modal isOpen={props.isModalOpen}>
                <ModalHeader>Type <strong>{todo.title}</strong> to delete todo</ModalHeader>

                <ModalBody>
                    <Input value={inputValue}
                           type="text"
                           onChange={inputHandler}
                    />
                </ModalBody>

                <ModalFooter>
                    <Button disabled={btnDisabled} onClick={deleteButtonHandler}>Delete</Button>
                    <Button onClick={() => props.setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    );
}

export default ModalDeleteTodo;