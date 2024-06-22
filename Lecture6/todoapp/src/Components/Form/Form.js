import React, { useRef } from 'react'

const Form = ({ addTodo }) => {

    const InputText = useRef();

    const handleFormSubmit = (event) => {

        event.preventDefault();
        // console.log(InputText.current.value);
        const text = InputText.current.value
        if (text) {
            addTodo(text);
        }
        else {
            alert("Enter the todo: ")
        }

        InputText.current.value = "";

    }
    return (

        <form onSubmit={handleFormSubmit}>
            <div>
                <label htmlFor="add">Add your todo here</label>
                <input type="text" id="add" placeholder='Enter your tod here' ref={InputText} />
            </div>
            <button>Add</button>
        </form>
    )
}

export default Form
