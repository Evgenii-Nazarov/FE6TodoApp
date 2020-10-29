import React, {useState} from 'react';
import {Col, Button, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader} from "reactstrap";


function ModalEditTodo(props) {
    const {todo} = props;

    const [titleInputValue, setTitleInputValue] = useState(todo.title)
    const [statusSelectValue, setStatusSelectValue] = useState(todo.done)


    const saveButtonHandler = () => {
        props.editTodo(todo.id, titleInputValue, statusSelectValue)
        props.setIsModalOpen(false)
    }

    const selectHandler = (e) => {
        setStatusSelectValue(e.target.value)
    }

    return (
        <Col>
            <Modal isOpen={props.isModalOpen}>
                <ModalHeader>Edit todo</ModalHeader>

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
                    <Button onClick={saveButtonHandler}>Edit</Button>
                    <Button onClick={() => props.setIsModalOpen(false)}>Cancel</Button>
                </ModalFooter>
            </Modal>
        </Col>
    );
}

export default ModalEditTodo;