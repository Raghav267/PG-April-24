import React, { useState } from 'react'

const useToggle = (initialValue = true) => {

    const [toggle, setToggle] = useState(initialValue)
    const changeToggle = () => {
        let count= 2;
        
        setToggle(!toggle);
  
    }

    return (
        [toggle, changeToggle]


    )
}

export default useToggle
