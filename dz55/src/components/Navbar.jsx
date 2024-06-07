import { NavLink } from 'react-router-dom'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const activeLinkClass = ({ isActive }) => {
        return isActive ? 'red' : ''
    }

    const cartProducts = useSelector((state) => state.cart.products)

    return (
        <nav className='nav'>
            <ul>
                <li>
                    <NavLink to="/" className={activeLinkClass}>
                        Products
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/basket" className={activeLinkClass}>
                        basket {cartProducts.length}
                    </NavLink>
                </li>
            </ul>
        </nav>
    )
}

export default NavBar
