import { useState, useEffect } from 'react';
import ProductCard from '../components/product-card';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cart-api.alexrodriguez.workers.dev/products')
        .then(response => response.json())
        .then(data => setProducts(data))
    }, []);

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
                        key={product.id}
                        name={product.name}
                        image={product.image}
                        price={product.price}
                    />
                ))}
            </div>
        </div>
    </>
    )
}

export default Home;