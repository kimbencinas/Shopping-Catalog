import React from 'react';
import { useNavigate } from 'react-router-dom';

function ProductCard({ id, name, image, price }) {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate(`/products/${id}`);
    };

    return (
        <div 
            className="flex flex-col items-center bg-white shadow-lg rounded-lg m-4 p-2 cursor-pointer hover:shadow-xl transition-shadow duration-300"
            onClick={handleClick}
        >
            <img
                src={image}
                alt={name}
            />
            <div className="xs:text-center">
                <h2 className="font-semibold mt-2 text-lg text-left">{name}</h2>
                <p className="text-lg font-semibold text-center text-left text-blue-600">${price}</p>
                <button className="bg-blue-500 text-white p-2 rounded-md mb-2 mt-3 font-semibold text-sm w-full">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;