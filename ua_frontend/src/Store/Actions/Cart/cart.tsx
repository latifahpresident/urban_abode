import { Dispatch } from 'redux';
import { uiActions } from '../../ui';
import axios from './../../../util/axiosInstance';
import { cartActions } from '../../cart';

export const getCart = (id: number) => {
    return async (dispatch: Dispatch) => {
        dispatch(
            uiActions.showNotification({
             status: 'Pending',
             title: 'Loading...',
             message: 'Getting cart data!',
             loading: true
            }) 
         )

        const getCartItems = async () => {
            const response = await axios.get(`/users/cart/${id}`);
            if(response.status === 404) {
                throw new Error (`${response.data.message}`)
            } 

            return response.data.cart
        }

        try {
            const cartData = await getCartItems();
            if(cartData) {
                dispatch(cartActions.getCart({
                    cart: cartData[1],
                    items: cartData[0]
                }))

                dispatch(
                    uiActions.showNotification({
                     status: 'Success',
                     title: 'Success',
                     message: 'Cart data fetched successfully!',
                     loading: false
                    }) 
                 )
            } else if(cartData.length === 0) {
                dispatch(uiActions.showNotification({
                     status: 'Message',
                     title: 'Message',
                     message: `You haven't added any items to your cart yet.`,
                     loading: false
                    }) 
                 )
            }
            
        } catch (error) {
            dispatch(
                uiActions.showNotification({
                 status: 'Error',
                 title: 'Error',
                 message: 'Error getting your cart!',
                 loading: false
                }) 
             )
            throw new Error(`${error}`)
        }
    }
}