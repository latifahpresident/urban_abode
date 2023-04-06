import { productsActions } from '../../products';
import { uiActions } from '../../ui';
import axios from './../../../util/axiosInstance';
import { Dispatch } from 'redux';

export const getProducts =  (category: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(
            uiActions.showNotification({
             status: 'Pending',
             title: 'Loading...',
             message: 'Sending data!'
            }) 
         )
        const getData = async () => {
            const response = await axios.get(`/products/?category=${category}`)

            if(response.status !== 200) {
                throw new Error(response.data.message)
            }

            const data = response.data.products
            return data
        }

        try {
            const productData = await getData()
            dispatch(productsActions.getProductsData(productData))
            dispatch(
                uiActions.showNotification({
                 status: 'Success',
                 title: 'Success!',
                 message: 'Products fetch successfully!'
                }) 
             )
        } catch (error : any) {
            dispatch(
                uiActions.showNotification({
                 status: 'Error',
                 title: 'Error!',
                 message: `Getting products data failed! ${error.message}`
                }) 
             ) 
        }

       
    }
}