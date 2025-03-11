'use client'
import ProductCard from '../ProductCard/ProductCard';
import getProducts from '../../service/products/products'
import { useEffect, useState } from 'react';
import {ProductTypes} from '../../types/product'

const OurAssortment = () => {

    const [data, setData] = useState<ProductTypes[]>([]);
    // const [loading, setLoading] = useState(true); 
    // const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const products = await getProducts();
                setData(products);
                // setLoading(false);
            } catch (err) {
                // setError('Failed to load products');
                // setLoading(false);
                console.log(err)
            }
        };

        fetchProducts();
    }, []);

    return(
        <div className="w-full h-full  px-6 lg:px-20 py-16 bg-white">
            <section>
                <h1 className='text-5xl text-black uppercase'>
                    Наш
                </h1>
                <h1 className='text-5xl text-red-600 uppercase'>
                    Асортимент
                </h1>
            </section>
            <section className="w-full pt-20 justify-items-center grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-6 [&>*:nth-child(n+3)]:sm:mt-10 md:[&>*:nth-child(n+3)]:mt-0">
                {data.map((element) => (
                    <ProductCard 
                        key={element.id} 
                        price={element.price} 
                        name={element.name} 
                        img={element.img} 
                        id={element.id}  
                    />
                ))}
            </section>


        </div>
    )
}


export default OurAssortment