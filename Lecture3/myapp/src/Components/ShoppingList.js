import React from 'react'
import Product from './Product'

const ShoppingList = () => {

    const Proudcts = [
        {
            name: "Iphone14",
            imgUrl: "https://images.unsplash.com/photo-1675467369399-5022df8eba71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
            price: 150

        },
        {
            name: "Iphone14",
            imgUrl: "https://images.unsplash.com/photo-1675467369399-5022df8eba71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
            price: 150

        },
        {
            name: "Iphone14",
            imgUrl: "https://images.unsplash.com/photo-1675467369399-5022df8eba71?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8aXBob25lJTIwMTR8ZW58MHx8MHx8fDA%3D",
            price: 150

        }
    ]




    return (
        <div>

            {Proudcts.map((product) => {

                return (

                    <Product
                        name={product.name}
                        imgUrl={product.imgUrl}
                        price={product.price}
                    >
                    </Product>

                )

            })}




        </div >
    )
}

export default ShoppingList
