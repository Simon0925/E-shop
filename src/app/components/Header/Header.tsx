import Logo from '../Logo/Logo';


const Header = () => {
    return(
        <header className="relative w-dvw h-screen bg-no-repeat bg-fixed bg-cover bg-center"
            style={{ backgroundImage: "url('Header/baner.jpg')" }}>
             <Logo />

        </header>
    )
}

export default Header