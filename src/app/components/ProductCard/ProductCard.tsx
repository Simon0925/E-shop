
import Image from "next/image";
import Button from "@/app/UI/Button/Button";


import {ProductTypes} from '../../types/product'

const ProductCard = ({price,name,img,id}:ProductTypes) => {

    const newPrice = price / 100 * 80 ;

    return(
        <article className="flex flex-col items-center shadow-2xl w-72 py-8 rounded-xl gap-4 ">
            <figure >
                <Image 
                    src={img} 
                    alt={"Product Card img"}
                    width={100}
                    layout="responsive"
                    height={100}
                 />
            </figure>
             <header>
                <h2 className="text-xl">{name}</h2>
            </header>
                <div className="flex w-full justify-around ">
                    <p className="line-through text-lg">{price}</p>
                    <p className="text-lg">{newPrice}</p>
                </div>
            <div className="w-full px-4">
                <Button name={"Подробнее"} link={`${id}`} />
            </div>
        </article>
    )
}


export default ProductCard