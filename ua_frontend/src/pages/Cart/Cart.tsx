import {  useEffect, useState } from 'react';
import HeadingLarge from "../../components/ui/Typography/Headings/HeadingLarge";
import { useAppSelector, useAppDispatch } from "../../util/app/hooks";
import ButtonLink from '../../components/ui/Button/ButtonLink';
import { getCart } from '../../Store/Actions/Cart/cart';
import { useParams } from 'react-router-dom';
import ProductLoader from '../../components/ui/Loaders/ProductLoader';


const Cart = () => {
    const cartItems = useAppSelector(state => state.cartSlice.items);
    const loading = useAppSelector(state => state.ui.notification.loading);
    const [,setValue] = useState(0 || '');
    const dispatch = useAppDispatch();
    const { cartId } = useParams();

    useEffect(() => {
        dispatch(getCart(Number(cartId)))
    },[dispatch, cartId])

    if(loading) return <ProductLoader/>
    return (
        <div className='bg-semiLightGray h-full overflow-auto py-12'>
            <HeadingLarge className='lg:text-2xl lg:pb-0'>Shopping Cart</HeadingLarge>
            <div className='flex w-full justify-between ml-4'>
                <div className='flex items-start justify-between flex w-8/12'>
                    <div className='lg:w-full'>
                    {cartItems?.map((item, index) => (
                    <div  key={index} className=" flex flex-col border border-1 bg-whiteAccent border-mediumGray p-2 w-full h-72">
                        <div>
                            <h1 className='lg:text-lg capitalize mt-4'>{item.title}</h1>
                            <div className='flex justify-between '>
                                <div className='h-52 max-h-52 w-52'>{item.images && <img className='w-full h-full' src={item.images[0]} alt={item.title}/>}</div>
                                <div className='mr-4 flex flex-col '>
                                    <p className='text-xl font-medium'>$ {item.price}</p>
                                    <div className='flex flex-col justify-between h-28 w-52 mt-2'>
                                        <div className='flex items-end'>
                                            <input className='w-16 h-11 border rounded-none text-center mr-4' type='text' value={item.quantity || ''} onChange={(e) => setValue(e.target.value)}/>
                                            <ButtonLink>Update</ButtonLink>
                                        </div>
                                       

                                        <div className='flex justify-between'>
                                            <ButtonLink>Remove</ButtonLink>
                                            <ButtonLink>Save For Later</ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                
                    </div>
                    ))}
                    </div>
                    
                </div>
                <div className='bg-whiteAccent h-[515px] w-80 p-3.5 border border-1 border-mediumGray mr-8'>
                        <HeadingLarge className='lg:text-lg lg:pb-0 font-bold'>Order Summary</HeadingLarge>
                </div>
            </div>
        </div>
    )
};

export default Cart