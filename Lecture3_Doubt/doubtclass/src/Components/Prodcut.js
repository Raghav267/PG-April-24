import React from 'react'
import "./Product.css"


const Prodcut = ({ name, imgUrl, price }) => {
    return (
        <figure className="prodcut">
            <img src={imgUrl} />
            <h2>Name: {name}</h2>
            <h2>Price: ${price}</h2>
        </figure>


    )
}

export default Prodcut
