import React, { useState } from 'react'
// home work
const Product = ({ name, price, imgUrl }) => {


    const [currprice, setPrice] = useState(price)

    const handleOnclick = () => {
        let newprice = 200;

        setPrice(newprice)

    }

    return (
        <figure onClick={handleOnclick}>
            <img src={imgUrl} alt="" />
            <h1> Name = {name}</h1>
            <h2>Price = ${currprice}</h2>
        </figure>
    )
}

export default Product
