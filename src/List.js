import React from 'react';
import Todo from "./Todo";
import {Col} from "reactstrap";


function List(props){
    // const list = props.list
    const {list=[]} = props;

    return (
        <Col>
            {list.map((el, index)=>
                <Todo todo={el}
                      key={el.id}
                      deleteTodoItem={props.deleteTodo}
                      updateTodo={props.updateTodo}
                      moveUp={props.moveUp}
                      index={index}
                      isFirst={index === 0}
                      isLast={index === list.length - 1}
                      changeTitle={props.changeTitle}
                      inputChangeOne={props.inputChangeOne}
                      editTodo={props.editTodo}
                />
            )}
        </Col>
);
}
export  default  List;