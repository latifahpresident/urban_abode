import { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import {useAppDispatch, useAppSelector } from '../../util/app/hooks'
import { getProductById } from '../../Store/Actions/Products/Products';
import ParagraphMediumBold from '../../components/ui/Typography/ParagraphBoldMedium';
const Product = () => {
    const dispatch = useAppDispatch()
    const product = useAppSelector(state => state.products.products[0]);
    const loading = useAppSelector(state => state.ui.notification.loading);
    const [currentImage, setCurrentImage] = useState(0);
    const [value, setValue] = useState(0);

    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(getProductById (Number(id)))
    }, [dispatch, id])

    const Loading = () => {
        return (
            <p>loading</p>
        )
    };

    const handleCurrentImage = (index: number) => {
        setCurrentImage(index)
    };

    return (
        loading || product === undefined ? <Loading/> : 
        <div className='flex flex-col p-4'>
            <div>
                <h1>{product.title}</h1>
                <p className='text-sm text-redAccent font-semibold'> $ {product.price}</p>
            </div>
           
            <div className='my-4 w-72 h-72'>
                <img className='w-full h-full' src={product.images[currentImage]} alt={product.title}/>
            </div>
            <div className='flex overflow-x-auto space-x-8 mb-4'>
                {product.images.map((image, index) => (
                    <button key={index} className=' flex items-center flex-shrink-0 focus:border focus:border-darkGreen h-24 w-32' onClick={() => handleCurrentImage(index)}>
                        <img className='w-full h-full' src={image} alt={`${product.category_name}-${index}`}/>
                    </button>
                ))}
            </div>
           
            <p className='text-xs'>{product.description}</p>
            <ParagraphMediumBold className='mb-4'>Select color:</ParagraphMediumBold>
            <div className='flex w-full justify-around items-center'>
                {product.colors.map((color, index) => (
                    <button key={index} className='p-4 h-12 w-12 focus:border-2 focus:border-black' style={{backgroundColor: `${color}`}}/>
                ))}
            </div>
           
            <div className='flex w-1/2 my-4'>
                <button disabled={value === 0 ? true : false} className='border border-darkGreen h-11 w-11' onClick={() => setValue(value - 1)}>-</button>
                <input className='h-11 w-11 text-center border-darkGreen border-t border-b' type='number' aria-label='quantity' placeholder='qty' value={value} onChange={() => setValue(value)}/>
                <button disabled={value === product.quantity ? true : false} className='border border-darkGreen h-11 w-11' onClick={() => setValue(value + 1)}>+</button>
            </div>

            <h1 className='font-bold text-md leading-3 my-4'>Free Shipping <span className='font-normal text-xs'>locally to Austin, San Antonio, and Waco</span></h1>
            <p className='text-xs font-semibold'>Financing available for orders over <span className='text-redAccent'>$50</span> <Link to='/https://www.affirm.com/'><span className='underline'>Learn more</span></Link></p>
            <button onClick={() => navigate('/cart')} className='font-bold w-full bg-redAccent text-whiteAccent my-4 h-12'>Add To Cart</button>
        </div>
         
        
    )
}

export default Product