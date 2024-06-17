import React, { useState } from 'react'
import Prodcut from './Prodcut'
import Form from './Form'

const Shoppinglist = () => {
    const DummyProducts = [
        {
            name: "Iphone14",
            imgURL: "https://images.unsplash.com/photo-1675467369399-5022df8eba71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
            price: 150
        },
        {
            name: "tabllet",
            imgURL: "https://images.unsplash.com/photo-1527698266440-12104e498b76?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGFibGV0fGVufDB8fDB8fHww",
            price: 500
        }
    ]

    const [Products, setProducts] = useState(DummyProducts)

    const handleArray = (newProdct) => {
        // <h1>We are inside the new</h1>
        console.log("We are in handelArray");
        setProducts([...Products, newProdct]);



    }

    return (
        <div>
            <Form handleArray={handleArray} />


            {
                Products.map((product) => {
                    return (
                        <Prodcut
                            name={product.name}
                            price={product.price}
                            imgUrl={product.imgURL} >  </Prodcut>
                    )
                })
            }



        </div>
    )
}

export default Shoppinglist
