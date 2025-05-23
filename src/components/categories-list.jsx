import { useState, useEffect } from 'react';

function CategoriesList({ setSelectedCategory}) {
    const [isOpen, setIsOpen] = useState(false);
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('https://cart-api.alexrodriguez.workers.dev/products')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error! ${response.status}`);
            }
            return response.json()
        })
        .then((data) => {
            const categoryList = [];
            data.forEach((item) => {
                if (!categoryList.includes(item.category)) {
                    categoryList.push(item.category);
                }
            });
            setCategories(categoryList);
        })
        .catch((error) => {
            console.error('Error fetching categories:', error);
        });
    }, []);

    const handleSelectCategory = (category) => {
        setSelectedCategory(category);
        setIsOpen(false);
    };
    
    return (
        <div className="relative inline-block text-left">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex justify-between border border-gray-400"
            >
            Select a category
            <svg
                className="ml-2 h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
            >
                <path d="M5.5 7l4.5 4.5L14.5 7h-9z" />
            </svg>
            </button>
            {isOpen && (
                <div className="bg-gray-100 border border-gray-400">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleSelectCategory(category)}
                        className="flex flex-col"
                      >
                        {category}
                      </button>
                    ))}
                </div>
            )}
        </div>
    )
}

export default CategoriesList;