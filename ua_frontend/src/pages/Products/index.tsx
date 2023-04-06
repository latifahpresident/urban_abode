import { useEffect } from 'react';
import {useAppDispatch, useAppSelector } from '../../util/app/hooks'
import { getProducts } from '../../Store/Actions/Products/Products';
import { ProductsList } from './Products';
import { useSearchParams } from 'react-router-dom';

export const Products = () => {
   const dispatch = useAppDispatch()
   const [searchParams] = useSearchParams()
   const products = useAppSelector(state => state.products.products)
   const params =  searchParams.get('category')

   useEffect(() => {
       dispatch(getProducts(params || 'all'))
   }, [dispatch, params])
   
   console.log("params******", params)

   return (
       <ProductsList products={products}/>
   )
}