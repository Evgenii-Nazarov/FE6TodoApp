import React, {useState} from 'react';
import List from "./List";
import {Container} from "reactstrap";
import Controller from "./Controller";

function App() {
    const initialList = [
        {id: 1, title: 'Learn', done: false, status: ''},
        {id: 2, title: 'Learn Js', done: true},
        {id: 3, title: 'Sleep', done: false},
        {id: 4, title: 'Drink Coffee', done: true}
    ]

    const [list, setList] = useState(initialList)

    const doTodo = (cardId) => {
        const newList = list.map((el) => {
            if (cardId === el.id) {
                return {...el, done: !el.done}
            }
            return el
        })
        setList(newList)
    }

    const addTodo = (newTitle, newStatus) => {
        newStatus = newStatus === 'true'

        const newTodo = {
            id: Math.random(),
            title: newTitle,
            done: newStatus,
        }

        const newList = [...list, newTodo];
        setList(newList);
    }

    const changeTitle = () => {
        const newList = [...list]

        setList(newList)
    }

    const deleteTodo = (todoId) => {
        const newList = list.filter(el => el.id !== todoId);
        setList(newList);

    }

    const editTodo = (todoId, newTitle, newStatus) => {
        newStatus = newStatus === 'true'

        const newList = list.map((el) => {
            if (el.id === todoId) {
                el.title = newTitle
                el.done = newStatus
            }
            return el
        })
        setList(newList)
    }

    const moveUp = (currentIndex, nextIndex) => {
        const newList = [...list]

        const currentTodo = newList[currentIndex]
        const prevTodo = newList[nextIndex]

        newList[currentIndex] = prevTodo
        newList[nextIndex] = currentTodo

        setList(newList)
    }

    return (
        <Container>

            <Controller addTodo={addTodo}/>


            <List list={list}
                  deleteTodo={deleteTodo}
                  updateTodo={doTodo}
                  moveUp={moveUp}
                  changeTitle={changeTitle}
                  editTodo={editTodo}

            />

        </Container>
    );
}

export default App;
