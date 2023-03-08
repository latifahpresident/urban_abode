import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

interface Item  {
    name: string
    href: string
}

interface LinkProps {
    links: Item[]
}

const Nav = ({links}: LinkProps) => {
    const location = useLocation()
    const isHome = location.pathname
    return (
        <>
            <nav className={`hidden lg:block w-full h-16 ${isHome != '/' ? 'bg-darkGreen' : 'bg-transparent'}`}>
                <ul className='flex justify-evenly items-center relative h-full'>
                    {links.map((link, key) => (
                        <li key={key} className='text-yellowAccent uppercase text-sm cursor-pointer'>
                            <NavLink to={`${link.href}`}>{link.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
        </>
    )
}

export default Nav