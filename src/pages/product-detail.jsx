import { useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

function ProductDetailPage () {
    const { id }  = useParams();
    const [productInfo, setProductInfo] = useState(null);

    useEffect(() => {
        fetch(`https://cart-api.alexrodriguez.workers.dev/products/${id}`)
        .then(response => {
            if(!response.ok) {
                throw new Error(`Error! ${response.status}`);
            }
            return response.json();
        })
        .then(data => setProductInfo(data))
        .catch(error => {
            console.error('Error fetching product details:', error);
        });
    }, [id]);

    if (!productInfo) {
        return <div className="flex justify-center mt-8">Loading...</div>
    }

    return (
        <>
            <Navbar />
            <Link to="/">
                <div className="xs:flex xs:flex-col flex items-center gap-x-2 px-4 py-10 ml-12 mt-0 cursor-pointer">
                    <FontAwesomeIcon icon={faArrowLeft} />
                    <p>Back to catalog</p>
                </div>
            </Link>
            <div className="xs:flex xs:flex-col xs:text-center md:flex items-center justify-center">
                <div className="flex justify-center mt-8">
                    <img src={productInfo.image} alt={productInfo.name} className="w-80" />
                </div>
                <div className="xs:text-center flex flex-col items-center mt-4 ml-8 md:p-6">
                    <h1 className="text-2xl font-bold">{productInfo.name}</h1>
                    <p className="text-lg font-semibold">${productInfo.price}</p>
                    <p className="mt-4">{productInfo.description}</p>
                    <button className="bg-blue-500 text-white p-2 rounded-md mb-2 xs:w-auto w-72 mt-3 font-semibold text-sm cursor-pointer">Add to Cart</button>
                </div>
            </div>
        </>
    )
}

export default ProductDetailPage;