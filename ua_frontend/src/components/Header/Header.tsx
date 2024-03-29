import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Nav from '../Nav/nav';
import Search from '../Search/Search';
import { faShoppingCart, faBars, faX } from '@fortawesome/free-solid-svg-icons'
import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'
import Icon from '../ui/Icons/Icon';
import { Link } from 'react-router-dom';
import SideBar from '../Nav/SideBar/SideBar';
import Button from '../ui/Button/Button';
import { faArrowRightFromBracket } from '@fortawesome/free-solid-svg-icons';
import { useAppDispatch, useAppSelector } from '../../util/app/hooks';
import { logout } from '../../Store/Actions/Users/Users';

export interface NavLinks {
    name: string;
    href: string;
}

export const links: NavLinks[] = [
    {
        name: 'Living Room',
        href: '/products/Living Room'
    }, 
    {
        name: 'Dining',
        href: '/products/Dining'
    }, 
    {
        name: 'Bedroom',
        href: '/products/Bedroom'
    }, 
    {
        name: 'Office',
        href: '/products/Office'
    }, 
    {
        name: 'Kids',
        href: '/products/Kids'
    }, 
    {
        name: 'Outdoor',
        href: '/products/Outdoor'
    },
    {
        name: 'Best Sellers',
        href: '/products/Best Sellers'
    },
    {
        name: 'Decore & Mirrors',
        href: '/products/Decore'
    },
    {
        name: 'Lighting',
        href: '/products/Lighting'
    },
    {
        name: 'Sale',
        href: '/products/Sale'
    },
]

const Header = () => {
    const [toggle, setToggle] = useState(false);
    const iconClassNames = 'text-cream text-xl'
    const location = useLocation();
    const isHome = location.pathname;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const userId = useAppSelector(state => state.user.user)
    const loggedIn = useAppSelector(state => state.user.loggedIn)
    const cartQuantity = useAppSelector(state => state.cartSlice.cart.quantity)

    const handleToggle = () => {
        setToggle(!toggle)
    };

    const handleLogout = () => {
        dispatch(logout())
    }
    
    const showBadge =  cartQuantity > 0 
    //TODO: IMPROVE NAVIGATION CONDITIONAL STYLING
    //TODO: REMOVE HREF FROM THE LINKS ARRAY. WE WANT TO SEND THE CATEGORY TO THE BACKEND WITH A SPACE.
    return (
        <>
            <div className={`z-50 absolute w-full  transition ease-in-out duration-300 delay-500 ${isHome !== '/' ? 'bg-darkGreen relative' : ''}`}> 
            <header className='w-full p-0 lg:px-14 py-2 sm:py-6 max-w-full relative mb-4'>
                {/**REMOVED MB-4 MAY NEED TO ADD IT BACK */}
                {/* <header className='w-full p-0 lg:px-14 py-2 sm:py-6 max-w-full relative mb-4'> */}
                    <div className='flex justify-between align-center box-border'>
                        <button className='pl-4 lg:hidden' onClick={handleToggle}><Icon iconName={toggle ? faX : faBars} className={isHome !== '/' ? 'text-yellowAccent' : 'text-darkGreen'}  /></button>
                        <Search/>
                        <Link to='/'>
                            <div className='uppercase text-sm sm:text-3xl font-bold tracking-widest flex flex-col text-cream sm:w-72 items-end sm:items-center justify-between pr-4 sm:p-0 animate-fade-in-down'>Urban Abode <br/> <span className='text-xs self-center'>furniture</span></div>
                        </Link>
                        <div className='hidden lg:flex w-36 flex justify-between items-center'>
                            <Link to={`/user/${userId.firebase_id}`}>
                                    <Icon iconName={faUser} className={iconClassNames}/>
                            </Link>
                            <Link to={`/favs`}>
                                    <Icon iconName={faHeart} className={iconClassNames}/>
                            </Link>
                            <div className='relative'>
                                { showBadge && <div className='border rounded-full h-4 w-4 bg-redAccent absolute text-xs text-cream font-medium flex justify-center items-center -top-2 -right-2'>{cartQuantity}</div> }
                                <Link to={`/cart/${userId.cart_id}`}>
                                        <Icon iconName={faShoppingCart} className={iconClassNames}/>
                                </Link>
                            </div>
                            
                            {loggedIn && <Button color='cream'  className='p-0 border border-0 w-0' icon={true} iconName={faArrowRightFromBracket} onClick={ () => { handleLogout(); navigate('/')  }}/>}
                            
                        </div>
                    </div>
                </header>
                <Nav links={links}/>
                <SideBar userId={userId.firebase_id} cartId={userId.cart_id} links={links} handleToggle={handleToggle} open={toggle} loggedIn={loggedIn} handleLogout={handleLogout} />
            </div>
        </>
    )
};

export default Header