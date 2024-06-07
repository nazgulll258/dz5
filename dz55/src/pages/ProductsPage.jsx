import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'

const ProductsPage = () => {
    const products = useSelector((state) => state.products.products)
    const cartProducts = useSelector((state) => state.cart.products)
    const dispatch = useDispatch()

    const addToBasket = (id, name, price) => {
        dispatch({ type: 'ADD_PRODUCT', payload: { id, name, price } })
    }
    return (
        <div>
            <ul className="products">
                {products.map((product) => (
                    <li key={product._id}>
                        {product.name} - {product.price}
                        <button
                            onClick={() =>
                                addToBasket(
                                    product._id,
                                    product.name,
                                    product.price,
                                )
                            }
                            disabled={cartProducts
                                .map((product) => product.id)
                                .includes(product._id)}
                        >
                            {cartProducts
                                .map((product) => product.id)
                                .includes(product._id)
                                ? 'in basket'
                                : 'buy'}
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default ProductsPage
