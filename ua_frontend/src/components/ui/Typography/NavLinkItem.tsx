import { NavLink } from 'react-router-dom';

interface NavLinks {
    title: string
    href: string
}

const NavLinkItem = ({ title, href }: NavLinks) => {

   return (
    <li className='text-yellowAccent uppercase text-sm cursor-pointer'>
        <NavLink to={`${href}`}>{title}</NavLink>
    </li>   
   )
}

export default NavLinkItem