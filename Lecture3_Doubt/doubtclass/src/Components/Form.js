import React, { useState } from 'react'

const Form = ({ handleArray }) => {


    const [name, setName] = useState("")
    const [price, setPrice] = useState()
    const [img, setImg] = useState("")

    const handelName = (event) => {
        setName(event.target.value);
        console.log(name);

    }

    const handlePrice = (event) => {
        setPrice(event.target.value);

    }

    const handleimg = (event) => {
        setImg(event.target.value);
    }



    const handleSubmmit = (event) => {
        event.preventDefault();
        handleArray({ name: name, imgURL: img, price: price });
        console.log("Returning too default value");
        setName("");
        setPrice();
        setImg("#");




    }


    return (
        <form onSubmit={handleSubmmit}>
            <div>
                <label htmlFor="name">Name</label>
                <input onChange={handelName} type="text" placeholder='Enter the name of your product' id="name" value={name} />

            </div>
            <div>
                <label htmlFor="price">Price</label>
                <input onChange={handlePrice} type="number" placeholder='Enter the Price of your product' id="price" value={price} />

            </div>
            <div>
                <label htmlFor="img">IMG URL</label>
                <input onChange={handleimg} type="text" placeholder='Enter the URL' id="img" value={img} />

            </div>
            <button  >Submit

            </button>



        </form>
    )
}

export default Form
