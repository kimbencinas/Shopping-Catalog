import React from 'react';
import ProductCard from '../components/product-card';

function Home() {

    return (
    <>
        <div>
            <nav className="bg-blue-400 p-4 flex justify-between font-bold">
                <p>Digital Shop</p>
                <p>Cart</p>
            </nav>
            <h1 className="font-semibold text-2xl text-center mt-8">Shopping Catalog</h1>
            <div className="card-container flex justify-center">
                {products.map(product => (
                    <ProductCard
                    
                    />
                ))}
            </div>
        </div>
    </>
    )
}

export default Home;