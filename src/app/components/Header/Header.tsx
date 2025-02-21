import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


const Header = () => {
    return(
        <header className="w-dvw h-screen bg-no-repeat bg-fixed bg-cover bg-center "
            style={{ backgroundImage: "url('Header/baner.jpg')" }}>
                <section className='flex flex-row justify-between p-10 bg-white'>
                    <Logo />
                    <Navigation />
                </section>
        </header>
    )
}

export default Header