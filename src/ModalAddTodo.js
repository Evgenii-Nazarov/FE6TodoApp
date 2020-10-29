import React, {useState} from 'react';
import {Col, Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


function ModalAddTodo(props) {
    const [titleInputValue, setTitleInputValue] = useState('')
    const [statusSelectValue, setStatusSelectValue] = useState(false)


    const saveButtonHandler = () => {
        props.addTodo(titleInputValue, statusSelectValue)
        props.setIsModalOpen(false)
    }

    const selectHandler = (e) => {
        setStatusSelectValue(e.target.value)
    }

    return (
        <Col>
            <Modal isOpen={props.isModalOpen}>
                <ModalHeader>Add new todo</ModalHeader>

                <ModalBody>

                    <Label >New title</Label>
                    <Input value={titleInputValue}
                           onChange={(e) => setTitleInputValue(e.target.value)}
                           type="text"/>

                    <Label >New status</Label>
                    <Input value={statusSelectValue}
                           onChange={selectHandler}
                           type="select"
                           name="select"
                           id="exampleSelect">
                        <option value={true}>done</option>
                        <option value={false}>not done</option>
                    </Input>

                </ModalBody>

                <ModalFooter>
                    <Button onClick={saveButtonHandler}>Save</Button>
                    <Button onClick={() => props.setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    );
}

export default ModalAddTodo;