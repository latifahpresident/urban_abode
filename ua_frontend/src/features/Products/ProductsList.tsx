 import { useEffect } from 'react';
 import {useAppDispatch, useAppSelector } from '../../util/app/hooks'
import { getProducts } from '../../Store/Actions/Products/Products';

 const ProductsList = () => {
    const dispatch = useAppDispatch()
    const products = useAppSelector(state => state.products.products)
    
    useEffect(() => {
        dispatch(getProducts())
    }, [dispatch])
    
    console.log('products',products)
    return (
        <div>
            products list 
        </div>
    )
 }

 export default ProductsList;