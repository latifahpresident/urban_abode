import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector } from '../../util/app/hooks'
import { getProductById } from '../../Store/Actions/Products/Products';
import ParagraphMediumBold from '../../components/ui/Typography/ParagraphBoldMedium';
import { addToCart } from '../../Store/Actions/Users/Users';
import { Items } from '../../Store/cart';

const Product = () => {
    const dispatch = useAppDispatch()
    const product = useAppSelector(state => state.products.products[0]);
    const cart_id = useAppSelector(state => state.cartSlice.cart.id)
    const loading = useAppSelector(state => state.ui.notification.loading);
    const [currentImage, setCurrentImage] = useState(0);
    const [value, setValue] = useState(1);
    const [selectedColor, setSelectedColor] = useState('' || product.colors[0]);

    const { id } = useParams();
    const navigate = useNavigate();


    useEffect(() => {
        dispatch(getProductById (Number(id)))
        if(product) {
            setSelectedColor(product.colors[0])
        }
    }, [dispatch, id])

    const Loading = () => {
        return (
            <p>loading</p>
        )
    };

    const handleCurrentImage = (index: number) => {
        setCurrentImage(index)
    };

    const addProductToCart = (item: Items) => {
        dispatch(addToCart(item))
        navigate(`/cart/${cart_id}`)
    };

    //TODO MAKE THE DETAILS SECTION INTO A SEPARATE COMPONENT 
    return (
        loading || product === undefined ? <Loading/> : 
        <div className='flex flex-col lg:p-12'>
           <div className='flex flex-col lg:flex-row-reverse lg:justify-between lg:items-start'>
                <h1 className='lg:hidden capitalize p-4 md:text-2xl'>{product.title}</h1>
                <p className='lg:hidden p-4 md:text-2xl text-redAccent font-semibold lg:text-xl lg:my-4'> $ {product.price}</p>

                {/* WILL MOVE THIS INTO REUSABLE COMPONENT */}
                <div className='hidden lg:flex flex-col justify-between h-1/5 overflow-auto w-1/4 items-start p-4'>
                    <h1 className='lg:text-3xl capitalize'>{product.title}</h1>
                    <p className='text-sm text-redAccent font-semibold lg:text-xl lg:my-4'> $ {product.price}</p>
                    <div className='flex w-1/2 my-6'>
                        <button disabled={value === 0 ? true : false} className='border border-darkGreen h-11 w-11' onClick={() => setValue(value - 1)}>-</button>
                        <input className='h-11 w-11 text-center border-darkGreen border-t border-b rounded-none' type='text' aria-label='quantity' placeholder='qty' value={value} onChange={() => setValue(value)}/>
                        <button disabled={value === product.quantity ? true : false} className='border border-darkGreen h-11 w-11' onClick={() => setValue(value + 1)}>+</button>
                    </div>
                    <ParagraphMediumBold className='mb-4 text-lg'>Select color:</ParagraphMediumBold>
                    <div className='flex flex-col w-96 justify-around items-center lg:items-start bg-lightGray mt-6 lg:p-4 h-96'>
                        <div className='p-4 w-full h-full flex flex-col justify-between'>
                            <div className='flex w-full justify-around items-start lg:grid lg:grid-cols-4 lg:gap-x-2 lg:h-96'>
                                {product.colors.map((color, index) => (
                                    <div key={index} className='border-darkGreen border border-2 h-16 w-16 shadow-xl' onClick={() => setSelectedColor(color)} style={{backgroundColor: `${color}`}}>
                                        <button   className='p-4 w-full h-full focus:border focus:border-2 focus:border-lightGray focus:shadow-xl' style={{backgroundColor: `${color}`,}}/>
                                    </div>
                                ))}
                            </div>
                            <div className='hidden lg:block border border-2 border-darkGreen' style={{boxShadow: `0 20px 25px -5px, 0 8px 10px -6px `, color: `${selectedColor}`}}>
                                <div className='border-lightGray border border-2 w-full h-32 ' style={{backgroundColor: `${selectedColor}`}}></div>
                            </div>
                        </div>

                    </div>
                    
                    <h1 className='lg:text-3xl capitalize mt-4'>Why you'll love it:</h1>
                    <p className='text-xs my-4 lg:text-lg'>{product.description}</p>
                    <div className='flex flex-col md:flex-col-reverse'>
                        <h1 className='font-bold text-md leading-3 my-4'>Free Shipping <span className='font-normal text-xs'>locally to Austin, San Antonio, and Waco</span></h1>
                        <p className='text-xs font-semibold'>Financing available for orders over <span className='text-redAccent'>$50</span> <Link to='/https://www.affirm.com/'><span className='underline'>Learn more</span></Link></p>
                        <button onClick={() => { addProductToCart({cart_id: cart_id, product_id: product.id, quantity: value, title: product.title, price: product.price, color: selectedColor, images: product.images[0]}); navigate(`/cart/${cart_id}`)}} className='font-bold w-full bg-redAccent text-whiteAccent my-4 h-12'>Add To Cart</button> 
                    </div>
                    
                </div>

                {/* END OF DETAIL SECTION FOR DESKTOP */}

                <div className='my-4 h-72 w-full md:h-5/6 lg:w-1/2 lg:h-2/5  shadow-xl'>
                    <img className='w-full h-full' src={product.images[currentImage]} alt={product.title}/>
                </div>
                <div className='flex lg:flex-col overflow-x-auto my-4 items-center justify-between pr-4 lg:h-[800px]'>
                    {product.images.map((image, index) => (
                        <button key={index} className=' flex items-center flex-shrink-0 border-darkGreen border border-2 focus:border focus:border-darkGreen focus:border-2 h-24 w-28  lg:h-28 lg:w-36 m-8' onClick={() => handleCurrentImage(index)}>
                            <img className='w-full h-full border border-2 border-lightGray' src={image} alt={`${product.category_name}-${index}`}/>
                        </button>
                    ))}
                </div>
            </div>

            <div className='lg:hidden p-4'>
                <h1 className='lg:text-3xl capitalize'>Why you'll love it:</h1>
                <p className='text-xs my-4'>{product.description}</p>
                <h1 className='my-4 g:text-3xl capitalize'>Select color:</h1>
                <div className='flex w-full justify-between items-start lg:items-center'>
                    {product.colors.map((color, index) => (
                        <button key={index} className='p-4 h-12 w-12 focus:border-2 focus:border-black' style={{backgroundColor: `${color}`}}/>
                    ))}
                </div>
            
                <div className='flex w-1/2 my-6'>
                    <button disabled={value === 0 ? true : false} className='border border-darkGreen h-11 w-11' onClick={() => setValue(value - 1)}>-</button>
                    <input className='h-11 w-11 text-center border-darkGreen border-t border-b rounded-none' type='text' aria-label='quantity' placeholder='qty' value={value} onChange={() => setValue(value)}/>
                    <button disabled={value === product.quantity ? true : false} className='border border-darkGreen h-11 w-11' onClick={() => setValue(value + 1)}>+</button>
                </div>
                <div className='flex flex-col md:flex-col-reverse'>
                    <h1 className='font-bold text-md leading-3 my-4'>Free Shipping <span className='font-normal text-xs'>locally to Austin, San Antonio, and Waco</span></h1>
                    <p className='text-xs font-semibold'>Financing available for orders over <span className='text-redAccent'>$50</span> <Link to='/https://www.affirm.com/'><span className='underline'>Learn more</span></Link></p>
                    <button onClick={() => { addProductToCart({cart_id: cart_id, product_id: product.id, quantity: value, title: product.title, price: product.price, color: selectedColor, images: product.images[0]});  navigate(`/cart/${cart_id}`)} } className='font-bold w-full bg-redAccent text-whiteAccent my-4 h-12'>Add To Cart</button> 
                </div>
            </div>
        </div>
         
        
    )
}

export default Product