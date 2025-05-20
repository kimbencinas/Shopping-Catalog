import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card';
import Navbar from '../components/navbar';

function Home() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://cart-api.alexrodriguez.workers.dev/products')
        .then(response => {
            if (!response.ok) {
                throw new Error('Error! ${response.status}');
            }
            return response.json()
        })
        .then(data => setProducts(data))
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    return (
    <>
        <div>
            <Navbar />  
            <h1 className="font-semibold text-2xl text-center mt-8">Shopping Catalog</h1>
            <div className="card-container md:flex justify-center xs:flex xs:flex-col mt-4">
                {products.map(product => (
                    <ProductCard
                        key={product.id}
                        id={product.id}
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