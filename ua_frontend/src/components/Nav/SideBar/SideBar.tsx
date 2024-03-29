import { NavLink, Link, useNavigate } from 'react-router-dom';
import Icon from '../../ui/Icons/Icon';
import { faShoppingCart, faX } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import Button from '../../ui/Button/Button';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';

interface Item  {
    name: string
    href: string
}

interface LinkProps {
    links: Item[]
    handleToggle: () => void
    open: Boolean
    userId: string
    cartId: number | undefined
    handleLogout: () => void
    loggedIn: boolean
}

//TODO: ADD ANIMATIONS ON CLOSE
const SideBar = ({ links, handleToggle, open, userId, cartId, loggedIn, handleLogout }:LinkProps) => {
    const navigate = useNavigate()
    return (
        <nav className={` ${open ? 'flex' : 'hidden'} flex-col bg-cream w-80 h-screen absolute top-0 animate-slideLeft`}>
            <div className='flex justify-between items-center pt-4'>
                <button className='pl-4' onClick={handleToggle}><Icon iconName={faX} className="text-darkGreen"/></button>

                <div className='w-1/3 flex justify-around text-lg'>
                    <Link to={`/user/${userId}`}><Icon iconName={faUser} className='text-darkGreen'/></Link>
                    <Link to={`/cart/${cartId}`}><Icon iconName={faShoppingCart} className='text-darkGreen'/></Link>   
                    {loggedIn && <Button color='cream'  className='p-0 border border-0 w-0' icon={true} iconName={faArrowRightFromBracket} onClick={ () => { handleLogout(); navigate('/')  }}/>}

                </div>
            </div>
           
            <ul className='mt-12 pl-5 h-1/2 flex flex-col justify-between'>
            {links.map((link, key) => (
                <li onClick={handleToggle} key={key} className='text-darkGreen uppercase text-sm cursor-pointer last:text-redBrown'>
                    <NavLink to={`${link.href}`}>{link.name}</NavLink>
                </li>
            ))}
            </ul>
        </nav>
    )
};

export default SideBar