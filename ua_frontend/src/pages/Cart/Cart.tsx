import {  useEffect, useState } from 'react';
import HeadingLarge from "../../components/ui/Typography/Headings/HeadingLarge";
import { useAppSelector, useAppDispatch } from "../../util/app/hooks";
import ButtonLink from '../../components/ui/Button/ButtonLink';
import { getCart } from '../../Store/Actions/Cart/cart';
import { useParams, Link } from 'react-router-dom';
import ProductLoader from '../../components/ui/Loaders/ProductLoader';
import ParagraphLarge from '../../components/ui/Typography/ParagraphLarge';
import ParagraphExtraSmall from '../../components/ui/Typography/ParagraphExtraSmall';
import Button from '../../components/ui/Button/Button';

const Cart = () => {
    const cartItems = useAppSelector(state => state.cartSlice.items);
    const cart = useAppSelector(state => state.cartSlice.cart)
    const loading = useAppSelector(state => state.ui.notification.loading);
    const [,setValue] = useState(0 || '');
    const dispatch = useAppDispatch();
    const { cartId } = useParams();

    useEffect(() => {
        dispatch(getCart(Number(cartId)))
    },[dispatch, cartId])

    if(loading ) return <ProductLoader/>
    return (
        <div className='bg-semiLightGray h-full overflow-auto py-12 lg:px-4'>
            <HeadingLarge className='lg:text-2xl lg:pb-0 underline underline-offset-8'>Shopping Cart</HeadingLarge>
            <div className='flex flex-col lg:flex-row w-full justify-between lg:ml-4'>
                <div className='flex items-start justify-between flex lg:w-8/12 w-full'>
                    <div className='lg:w-full'>
                    {cartItems?.map((item, index) => (
                    <div  key={index} className=" flex flex-col border border-1 bg-whiteAccent border-mediumGray p-2 lg:w-full lg:h-72 ">
                        <div className='border'>
                            <h1 className='lg:text-lg capitalize mt-4'>{item.title}</h1>
                            <div className='flex justify-between lg:flex-row'>
                                <div className='h-36 w-36 max-h-36 lg:h-52 lg:max-h-52 lg:w-52 '>{item.images && <img className='w-full h-full' src={item.images[0]} alt={item.title}/>}</div>
                                <div className='mr-4 flex flex-col ml-4'>
                                    <p className='text-xl font-medium'>$ {item.price}</p>
                                    <div className='flex flex-col justify-between h-20 w-40 lg:h-28 lg:w-52 mt-2'>
                                        <div className='flex items-end'>
                                            <input className='w-16 h-11 border rounded-none text-center mr-4' type='text' value={item.quantity || ''} onChange={(e) => setValue(e.target.value)}/>
                                            <ButtonLink>Update</ButtonLink>
                                        </div>
                                       

                                        <div className='flex justify-between'>
                                            <ButtonLink className='text-xs'>Remove</ButtonLink>
                                            <ButtonLink className='text-xs'>Save For Later</ButtonLink>
                                        </div>
                                    </div>
                                </div>
                            
                            </div>
                            
                        </div>
                
                    </div>
                    ))}
                    </div>
                    
                </div>

                <div className='bg-whiteAccent h-[450px] w-80 p-3.5 border border-1 border-mediumGray mr-8'>
                        <HeadingLarge className='lg:text-lg lg:pb-0 font-bold'>Order Summary</HeadingLarge>
                        <div className='flex w-full justify-between items-end mb-3'>
                            <div className='flex items-center'>
                                <ParagraphLarge>Subtotal</ParagraphLarge>
                                <span className='text-sm ml-1'>{`(${cart.quantity} Items)`}</span>
                            </div>
                            
                            <span>${cart.total}</span>
                        </div>

                        <ParagraphExtraSmall className='fonr-thin'>Total does not include shipping, gift wrap, discounts & tax.</ParagraphExtraSmall>
                        <Button color='redAccent' title='Checkout' className='text-whiteAccent border bg-redAccent mt-8 w-full text-lg h-12'/>
                        <Button color='yellowAccent' title='Continue Shopping' className='text-whiteAccent border bg-darkGreen mt-8 w-full text-lg h-12'/>
                        <p className='text-xs font-semibold mt-8'>Financing available for orders over <span className='text-redAccent'>$50</span> <Link to='/https://www.affirm.com/'><span className='underline'>Learn more</span></Link></p>


                </div>
            </div>
        </div>
    )
};

export default Cart