import Button from '@/app/UI/Button/Button';
import h from './h.jpg'
import noImageAvailable from '../../../../public/no-image-available.jpg'
import Image from "next/image";

const Greetings = () => {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row items-center gap-10 px-6 lg:px-20 py-16 bg-white">
            <section className="flex flex-col gap-10 lg:h-full w-full lg:w-1/2">
                <div>
                    <h1 className="text-4xl sm:text-5xl uppercase text-black">Вас приветствует</h1>
                    <h1 className="text-4xl sm:text-5xl uppercase text-red-600">E-Movement</h1>
                </div>
                <p className="text-base sm:text-lg">
                    Наш интернет-магазин представляет вашему вниманию огромный выбор товаров
                    высокого качества по приемлемой стоимости. Мы осуществляем продажу товаров
                    на протяжении четырех лет.
                </p>
                <p className="text-base sm:text-lg">
                    Одной из основных наших целей является продажа продукции высокого качества
                    по приемлемой стоимости. Цена на наши товары одна из самых низких, ведь мы
                    работаем напрямую с заводами-изготовителями и не пользуемся услугами
                    посредников.
                </p>
                
               <Button name={'Читать подробнее'} link={''} />
            </section>
            <div className="w-full lg:w-1/2 flex justify-center">
            <Image
                src={h}
                alt="image"
                width={1200}  
                height={800} 
                className="rounded-lg object-cover"
                priority
                sizes="(max-width: 768px) 100vw, 50vw" 
            />
            </div>
        </div>
    );
}

export default Greetings;
