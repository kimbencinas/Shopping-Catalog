import React from 'react';

function ProductCard({ name, image, price }) {
    return (
        <div className="flex flex-col items-center bg-white shadow-lg rounded-lg m-4 p-2">
            <img
                src={image}
                alt={name}
                
            />
            <div>
                <h2 className="font-semibold mt-2 text-lg text-left">{name}</h2>
                <p className="text-lg font-semibold text-center text-left text-blue-600">${price}</p>
                <button className="bg-blue-500 text-white p-2 rounded-md mb-2 mt-3 font-semibold text-sm">Add to Cart</button>
            </div>
        </div>
    )
}

export default ProductCard;