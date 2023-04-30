import { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../util/app/hooks'
import { getProducts } from '../../Store/Actions/Products/Products';
import { ProductsList } from './Products';
import { useParams } from 'react-router-dom';

export const Products = () => {
   const dispatch = useAppDispatch();
   const {category} = useParams();
   const products = useAppSelector(state => state.products.products)

   useEffect(() => {
       dispatch(getProducts(category || 'all'))
   }, [dispatch, category])
   
   return (
       <ProductsList products={products}/>
   )
}