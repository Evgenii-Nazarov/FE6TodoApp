import React, {useState} from 'react';
import {Button} from "reactstrap";
import ModalAddTodo from "./ModalAddTodo";


function Controller(props) {
    const [isModalOpen, setIsModalOpen] = useState(false);


    return (
        <div>
            <Button onClick={() => setIsModalOpen(true)}>Add new</Button>

            <ModalAddTodo addTodo={props.addTodo}
                          isModalOpen={isModalOpen}
                          setIsModalOpen={setIsModalOpen}
            />
        </div>
    );
}

export default Controller;