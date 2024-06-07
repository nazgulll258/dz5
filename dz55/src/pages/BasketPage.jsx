import React from 'react'
import { useSelector } from 'react-redux'

const BasketPage = () => {
    const cartProducts = useSelector((state) => state.cart.products)

    return (
        <div>
            <ul className="products">
                {cartProducts.map((item) => (
                    <li key={item.id}>
                        {item.name} - {item.price}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default BasketPage
