import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/product-card';
import Navbar from '../components/navbar';
import CategoriesList from '../components/categories-list';

function Home() {
    const [products, setProducts] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);

    useEffect(() => {
        fetch('https://cart-api.alexrodriguez.workers.dev/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error! ${response.status}`);
            }
            return response.json()
        })
        .then(data => setProducts(data))
        .catch(error => {
            console.error('Error fetching products:', error);
        });
    }, []);

    const filteredProducts = selectedCategory
        ? products.filter(product => product.category === selectedCategory)
        : products;

    return (
    <>
        <div>
            <Navbar />  
            <div className="bg-gray-100 min-h-screen">
                <div className="xs:flex xs:flex-col xs:items-center md:flex justify-evenly items-center">
                    <h1 className="font-semibold text-2xl text-center pt-12">Shopping Catalog</h1>
                    <CategoriesList setSelectedCategory={setSelectedCategory} />
                </div>
                <div className="card-container md:flex justify-center xs:flex xs:flex-col mt-4">
                    {filteredProducts.map(product => (
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
        </div>
    </>
    )
}

export default Home;