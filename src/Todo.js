import React, {useState} from 'react';
import {Button, Card, CardBody, CardTitle, Input, Label, Row} from "reactstrap";
import ModalDeleteTodo from "./ModalDeleteTodo";
import ModalEditTodo from "./ModalEditTodo";

const style = {
    'textDecoration': 'line-through'
}

function Todo(props) {
    const {todo = {}, isFirst, isLast} = props;
    const {done} = todo;

    const [inputValue, setInputValue] = useState(todo.title)
    const [isEditMode, setIsEditMode] = useState(false)
    const [isDeleteMode, setIsDeleteMode] = useState(false)

    const deleteTodo = () => {
        props.deleteTodoItem(todo.id)
    }
    const isDone = done ? style : {}

    const saveButtonHandler = () => {
        props.editTodo(todo.id, inputValue)
        setInputValue(todo.title)
        setIsEditMode(false)
    }

    const changeDeleteMode = () => {
        setIsDeleteMode(!isDeleteMode)
    }

    const changeEditMode = () => {
        setIsEditMode(!isEditMode)
    }

    return (
        <Row className='d-flex justify-content-center'>

            <Card className='m-0'>
                <ModalDeleteTodo todo={todo}

                                 setIsModalOpen={changeDeleteMode}
                                 isModalOpen={isDeleteMode}
                                 deleteTodo={deleteTodo}
                />

                <ModalEditTodo todo={todo}
                               isModalOpen={isEditMode}
                               setIsModalOpen={changeEditMode}
                               editTodo={props.editTodo}
                />



                <CardBody>
                    <CardTitle style={isDone}>{todo.title}</CardTitle>
                    <Button onClick={() => setIsDeleteMode(true)}>delete</Button>
                    <Button onClick={() => props.updateTodo(todo.id)}>upd</Button>
                    <Button disabled={isFirst}
                            onClick={() => props.moveUp(props.index, props.index - 1)}>
                        ↑
                    </Button>
                    <Button disabled={isLast} onClick={() => props.moveUp(props.index, props.index + 1)}>↓</Button>

                    <Button onClick={() => setIsEditMode(!isEditMode)}>edit</Button>


                </CardBody>
            </Card>
        </Row>
    );
}

export default Todo;