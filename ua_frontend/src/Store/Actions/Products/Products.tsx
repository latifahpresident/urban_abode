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
            const response = await axios.get(`/products/${category}`)

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
};

export const getProductById =  (id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(
            uiActions.showNotification({
             status: 'Pending',
             title: 'Loading...',
             message: 'Sending data!',
             loading: true
            }) 
         )
        const getData = async () => {
            const response = await axios.get(`/${id}`)

            if(response.status !== 200) {
                throw new Error(response.data.message)
            }
            console.log("response from get by id", response.data.product)
            const data = response.data.product
            return data
        }

        try {
            const productData = await getData()
            console.log("response from get by id", productData[0].quantity            )

            dispatch(productsActions.getProductData(productData))
            dispatch(
                uiActions.showNotification({
                 status: 'Success',
                 title: 'Success!',
                 message: 'Products fetch successfully!',
                 loading: false
                }) 
             )
        } catch (error : any) {
            dispatch(
                uiActions.showNotification({
                 status: 'Error',
                 title: 'Error!',
                 message: `Getting products data failed! ${error.message}`,
                 loading: false
                }) 
             ) 
        }
    }
};