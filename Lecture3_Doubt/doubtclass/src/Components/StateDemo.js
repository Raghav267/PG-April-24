import React, { useState } from 'react'

const StateDemo = () => {
    // let count = 0;

    const [count, setcount] = useState(0)
    const handleonClick = () => {

        // count = count + 1;
        setcount(count + 1);

        // console.log(count);
    }
    return (
        <div>
            <h1>Count  = {count} </h1>
            <button onClick={handleonClick}>Click me to increasee the count</button>

        </div>
    )
}

export default StateDemo
