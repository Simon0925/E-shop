import GuaranteeSVG from '@/app/SVG/GuaranteeSVG';
import s from './s.jpg'
import Image from "next/image";
import DeliverySVG from '@/app/SVG/DeliverySVG';
import HelmetSVG from '@/app/SVG/HelmetSVG';
import TopSVG from '@/app/SVG/TopSVG';

const OurService = () => {
    return (
        <div className="w-full h-full flex flex-col lg:flex-row bg-gray-100">
            <section className="w-full hidden lg:w-1/2 lg:flex justify-center">
                <Image
                    src={s}
                    alt="image"
                    width={1200}  
                    height={800} 
                    className=" object-cover"
                    priority
                    sizes="(max-width: 768px) 100vw, 50vw"
                />
            </section>
            <section className='w-full p-10 lg:w-1/2 flex flex-col gap-4'>

                <div>
                    <h1 className='text-5xl text-black uppercase'>
                        Наш
                    </h1>
                    <h1 className='text-5xl text-red-600 uppercase'>
                        сервис
                    </h1>
                </div>
              
                <div className='grid grid-flow-col-4 lg:grid-flow-col grid-rows-1 lg:grid-rows-2 gap-4'>
                    <div className='flex flex-col gap-2'>
                        <GuaranteeSVG />
                        <h3 className=' text-red-600 text-xl'>Гарантия 1 год</h3>
                        <p>В случае беспричинной поломки мы отремонтируем ваш самокат в кратчайшие сроки, ведь все необходимые запчасти у нас в наличии в отличии от других продавцов-однодневок.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <DeliverySVG />
                        <h3 className=' text-red-600 text-xl'>Быстрая бесплатная доставка</h3>
                        <p>Отправляем самокат день-в-день, если заказ поступил до 17-00, отправка по всей России.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <HelmetSVG />
                        <h3 className=' text-red-600 text-xl'>В комплект идёт бесплатаная экипировка</h3>
                        <p>Наколенники, налокотники, шлем.</p>
                    </div>

                    <div className='flex flex-col gap-2'>
                        <TopSVG />
                        <h3 className=' text-red-600 text-xl'>TOP 5 причин приобретения городского электросамоката</h3>
                        <p>Портативность. <br/>
                            Простота использования.<br/>
                            Веселые прогулки.<br/>
                            Низкий износ.<br/>
                            Езда без заряда.
                        </p>
                    </div>
                 
                </div>
            </section>
        </div>
    );
}

export default OurService;
