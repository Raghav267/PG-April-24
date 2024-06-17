import { useState } from 'react'
import useToggle from './Hooks/useToggle'

const Toggle = () => {

    // let isHappy = true;
    // const [isHappy, setisHappy] = useState(true)
    const [happy, setHappy] = useToggle(true)
    return (


        <div>
            <h1 onClick={() => setHappy(!happy)}>{(happy ? '😀' : '😞')}</h1>

        </div>
    )
}

export default Toggle
