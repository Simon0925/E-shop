import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';


const Header = () => {
    return(
        <header className="w-dvw h-screen bg-no-repeat bg-fixed bg-cover bg-center flex flex-row p-10 justify-between"
            style={{ backgroundImage: "url('Header/baner.jpg')" }}>
             <Logo />
            <Navigation />
        </header>
    )
}

export default Header