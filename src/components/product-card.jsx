import React from 'react';

function ProductCard({ name, image, price }) {
    return (
        <div>
            <img
                src={image}
                alt={name}
                
            />
            <h2>{name}</h2>
            <p>${price}</p>
        </div>
    )
}

export default ProductCard;