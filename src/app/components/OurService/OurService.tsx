import s from './s.jpg'
import Image from "next/image";

const OurService = () => {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 bg-gray-100">
            <div className="w-full lg:w-1/2 flex justify-center">
                <Image
                    src={s}
                    alt="image"
                    width={1200}  
                    height={800} 
                    className=" object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </div>
        </div>
    );
}

export default OurService;
