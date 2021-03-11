import React, { useState } from 'react';
import TodoForm from './Todoform';
import Todo from './Todo';

function TodoList() {
    const [todos, setTodos] = useState([]);

    const addTodo = todo => {
        if (!todo.text || /^\s*$/.test(todo.text)) {
            return;
        }

        const newTodos = [todo, ...todos];
        /*  */
        setTodos(newTodos);
        console.log(...todos);
    };
    /* This is how you can update a task that has been rendered, 
    select the pen and pad Icon to update your entry, 
    after you have updated you can select update next to the text field */
    const updateTodo = (todoId, newValue) => {
        if (!newValue.text || /^\s*$/.test(newValue.text)) {
            console.log(Todo)
            return;
        }

        setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
    };
    /* This is how you can remove a task that was created, click the Icon with an x to remove that task */
    const removeTodo = id => {
        const removedArr = [...todos].filter(todo => todo.id !== id);

        setTodos(removedArr);
    };
    /* complete Todo will put a strike through the task,
    each task that is completed on click will have a line through it */
    const completeTodo = id => {
        let updatedTodos = todos.map(todo => {
            if (todo.id === id) {
                todo.isComplete = !todo.isComplete;
            }
            return todo;
        });
        setTodos(updatedTodos);
    };

    return (
        <>
            {/* THIS IS THE FORM PAGE RENDERING TEMPLATE */}
            <h1>Let's Create A Todo List</h1>
            <TodoForm onSubmit={addTodo} /> {/* this is the button to create a new todo its a functional component so we can use this to pass data to parent and child */}
            <Todo
                todos={todos}            /* this will be the list that is renderd as individual elements below the todo entry field */
                completeTodo={completeTodo}  /* this is where you will be able see the task completed by clicking the todo and it will put a cross through to show complete,  */
                removeTodo={removeTodo}         /* this will allow you to see the revome icon imported from npm install react-icons */
                updateTodo={updateTodo}          /* this is going to allow you to see the update icon and the ability to "update" the entry  imported from npm install react-icons */
                />
                
        </>
    );
}

export default TodoList;