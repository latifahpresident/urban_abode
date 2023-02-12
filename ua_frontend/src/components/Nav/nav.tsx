import { NavLink } from 'react-router-dom';
// import SideBar from './SideBar/SideBar';

interface Item  {
    name: string
    href: string
}

interface LinkProps {
    links: Item[]
}

const Nav = ({links}: LinkProps) => {
    return (
        <>
            <nav className='hidden lg:block w-full h-16'>
                <ul className='flex justify-evenly items-center relative h-full'>
                    {links.map((link, key) => (
                        <li key={key} className='text-yellowAccent uppercase text-sm cursor-pointer'>
                            <NavLink to={`${link.href}`}>{link.name}</NavLink>
                        </li>
                    ))}
                </ul>
            </nav>
            {/* <SideBar links={links}/> */}
        </>
    )
}

export default Nav