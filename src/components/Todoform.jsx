import React, { useState, useEffect, useRef } from 'react';   /* THIS LINK IS ON THE PLATFORM!!! >>> https://reactjs.org/docs/forwarding-refs.html */
/* useRef-------DEEPER DIVE >> LOOK HERE FOR DETAILS >> reactjs.org/docs/refs-and-the-dom.html reactjs.org reference */

function TodoForm(props) {   /* MORE ON HOW TO USE STATE HOOK link>>>> https://www.codementor.io/@damcosset/how-to-use-the-state-hook-in-react-12s2yklevf */
    const [input, setInput] = useState(props.edit ? props.edit.value : '');  /* USE STATE HOOK link >>> https://reactjs.org/docs/hooks-state.html */

    const inputRef = useRef(null);
    /* now that we created a ref, we can useEffect, We will use this with the icon for update and delete later on the todo list component the effect hook lets us do side effects in function components link>>https://reactjs.org/docs/hooks-effect.html#gatsby-focus-wrapper */
    useEffect(() => {
        /* This will directly focus the text input on the DOM API
        "current" to get the DOM NODE **reactjs.org/docs/refs-and-the-dom.html reactjs.org reference** */
        inputRef.current.focus();
    });

    const handleChange = e => {
        setInput(e.target.value); /* this is how we target the props, in this case we are tageting the event target value setting a mutiable variable. in this case that is */
    };
    const handleSubmit = e => {
        e.preventDefault();
        /* event prevent default will prevent the submit from refreshing the page */

        props.onSubmit({
            /* The math.floor will help create a random id 0-500 for the task input, 
            the input type is text, this will reference the props and set input value for text and id */
            id: Math.floor(Math.random() * 500),
            text: input
        });
        setInput('');  /* Just as stated this is going to set the input to a string, */
    };

    return (

        <form onSubmit={handleSubmit} className='todo-form'>
            {props.edit ? (
                <>
                    <input
                        /* This will handle the update button for the user to change the task that has been renderd already */
                        placeholder='Update your item'
                        value={input}
                        onChange={handleChange}
                        name='text'
                        ref={inputRef}
                        className='todo-input edit'
                    />
                    <button onClick={handleSubmit} className='todo-button edit'> {/* this is the submit next to the input field class name is for css later */}
                        Update
            </button>
                </>
            ) : (
                <>
                    <input
                        placeholder='Add a todo'    /* this is what will show by default--PLACEHOLDER VALUE */
                        value={input}                    /* THIS IS THE INPUT THE USER WILL TYPE...the {Todo Task} */
                        onChange={handleChange}          /*  */
                        name='text'
                        className='todo-input'
                        ref={inputRef}     /* using the import {useref}  from 'react' we can now have mutable objects, this will let me set up child elements for styling and reference purposes >>>> https://www.codementor.io/@dhananjaykumar/useref-hook-as-mutable-ref-object-ykb77fwvk*/
                    />
                    <button onClick={handleSubmit} className='todo-button'>
                        Add todo
            </button>
                </>
            )}
        </form>
    );
}

export default TodoForm;