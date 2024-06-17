import { useState, useRef, useEffect } from "react";
import Toggle from "./Toggle";
import useToggle from "./Hooks/useToggle";

const Form = () => {

    const [email, setemail] = useState("");
    const mbile_no = useRef();

    const handleEmail = (event) => {
        setemail(event.target.value);

    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(email);
        console.log(mbile_no.current.value);
        console.log(count);


    }
    let count = 0;


    useEffect(() => {

        count = count + Math.random() * 10;




    });



    return (

        <section>
            <h1>Using the useRef hook and useStae hook</h1>
            <form onSubmit={handleSubmit}>



                <div>
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" onChange={handleEmail} />

                </div>

                <div>
                    <label htmlFor="passowrd">Mobile No.</label>
                    <input type="number" id="passowrd" ref={mbile_no} />

                </div>


                <button >Submit</button>
            </form>
        </section>
    )
}

export default Form;