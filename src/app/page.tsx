import AplicationForm from "./components/AplicationForm/AplicationForm";
import Footer from "./components/Footer/Footer";
import Greetings from "./components/Greetings/Greetings";
import OurAssortment from "./components/OurAssortment/OurAssortment";
import OurService from "./components/OurService/OurService";


export default function Home() {
  return (
    <main className="pt-24">
      <section className="w-full flex justify-center mt-24 ">
        <AplicationForm />
      </section>
      <section className="w-full flex flex-col text-center justify-center mt-24">
        <h1 className="text-6xl text-white uppercase">
          будь готов к
        </h1>
        <h1 className="text-4xl sm:text-6xl text-red-600 uppercase">
          приключениям
        </h1>
      </section>
      <section className="w-full mt-24 " >
        <Greetings />
      </section>
      <section className="w-full" >
        <OurService />
      </section>
      <section className="w-ful" >
        <OurAssortment />
      </section>
      <Footer/>
    </main>
  );
}
