import React, { useRef } from 'react'

const Form = () => {

    const InputText = useRef();

    const handleFormSubmit = (event) => {

        event.preventDefault();
        // console.log(InputText.current.value)
        console.log(InputText.current.value)

    }
    return (

        <form onSubmit={handleFormSubmit}>
            <div>
                <label for="add">Add your todo here</label>
                <input type="text" id="add" placeholder='Enter your tod here' ref={InputText} />
            </div>
            <button>Add</button>
        </form>
    )
}

export default Form
