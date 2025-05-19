import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';

function ProductDetailPage () {
    const { id }  = useParams();
    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        fetch(`https://cart-api.alexrodriguez.workers.dev/products/${id}`)
        .then(response => response.json())
        .then(data => setProductInfo(data))
    }, [id]);

    if (!productInfo) {
        return <div className="flex justify-center mt-8">Loading...</div>
    }

    return (
        <>
            <nav className="bg-linear-to-r from-blue-400 to-violet-500 p-4 flex justify-between font-bold">
                <p className="text-white">Digital Shop</p>
                <p>Cart</p>
            </nav>
            <div className="flex flex items-center justify-center p-10">
                <div className="flex justify-center mt-8">
                    <img src={productInfo.image} alt={productInfo.name} className="w-72" />
                </div>
                <div className="flex flex-col items-center mt-4">
                    <h1 className="text-2xl font-bold">{productInfo.name}</h1>
                    <p className="text-lg font-semibold">${productInfo.price}</p>
                    <p className="mt-4">{productInfo.description}</p>
                </div>
            </div>
        </>
    )
}

export default ProductDetailPage;