import React from 'react';
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

function Navbar() {
    return (
        <nav className="bg-linear-to-r from-blue-400 to-violet-500 p-4 flex justify-between font-bold">
            <Link to="/"><p className="text-white cursor-pointer">Digital Shop</p></Link>
            <Link to="/checkout"><FontAwesomeIcon icon={faShoppingCart} className="text-white cursor-pointer" /></Link>
        </nav>
    )
}

export default Navbar;