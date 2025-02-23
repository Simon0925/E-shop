import { ReactNode } from 'react';
import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';

interface HeaderProps {
    burgerMenu: ReactNode;
}

const Header = ({burgerMenu}:HeaderProps) => {
    return(
        <header className='flex flex-row bg-white drop-shadow-2xl  fixed justify-between h-24 w-full items-center px-10'>
                
            <Logo />
            <Navigation />
            <section className="block lg:hidden " >
                {burgerMenu}
            </section>
        </header>
    )
}

export default Header