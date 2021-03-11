import React, { useState } from 'react';       /* IN ORDER TO PULL FROM THE PARENT*/
import TodoForm from './Todoform';         /* THIS IS THE PARENT TO THIS COMPONENT */
import { RiDeleteBin6Line } from 'react-icons/ri';     /* Below there is an icon, I picked this from a list on here>>>https://react-icons.github.io/react-icons/icons?name=ri  */
import { RiChatNewFill } from 'react-icons/ri';           /* Below there is an icon, I picked this from a list on here>>>https://react-icons.github.io/react-icons/icons?name=ri  */

/* In order to do anything with our Todo's we need to apply them to state. So we use state to create a todo, complete a todo, remove a todo, and update that todo later if we need to. */
const Todo = ({ todos, completeTodo, removeTodo, updateTodo }) => {
    const [edit, setEdit] = useState({
        id: null,          /* this value is null because it is not currentlly accesing anything from state. The Task Needs to be selected */
        value: ''         /* Later after we create a new todo there will be an Id associated with it because we cereated an id with math.floor in the template when we set up the inital state value. */
    });

    const submitUpdate = value => {       /* this is how we will handle the update when needed. After a todo is created the user can update the task if they need to */
        updateTodo(edit.id, value);   /* this is a clickable link that will allow us to update a specific todo, it is renderd in a list so you can simply select the task you want to update and then select update when completed, the id is stored in state. */
        setEdit({
            id: null,
            value: ''
        });
    };

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />;
    }

    return todos.map((todo, index) => (
        <div
            className={todo.isComplete ? 'todo-row complete' : 'todo-row'}
            key={index}
        >
            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className='icons'>
                <RiDeleteBin6Line
                    onClick={() => removeTodo(todo.id)}
                    className='delete-icon'
                />
                <RiChatNewFill        /* THIS IS HOW I WAS ABLE TO CHANGE THE BUTTON TO AN ICON USING npm install react-icons*/
                    onClick={() => setEdit({ id: todo.id, value: todo.text })}
                    className='edit-icon'
                />
            </div>
        </div>
    ));
};

export default Todo;