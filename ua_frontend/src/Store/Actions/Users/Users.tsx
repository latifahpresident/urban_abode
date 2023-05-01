import { CartItem, usersActions } from './../../user';
import axios from './../../../util/axiosInstance';
import { Dispatch } from 'redux';
import { uiActions } from '../../ui';
import { auth } from '../../../util/firebase_config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { NewUser } from '../../../pages/Authentication/Signup/Signup';
import { cartActions } from '../../cart';

export const setUser = (firebase_id: string) => {
    return async (dispatch: Dispatch) => {
        dispatch(
            uiActions.showNotification({
                status: 'Pending',
                title: 'Loading...',
                message: 'Sending authentication data!',
                loading: true
            })
        )
        
        if(firebase_id) {
            dispatch(
                usersActions.setUser({
                    firebase_id: firebase_id
                })
            )

            dispatch(uiActions.showNotification({
                status: 'Success',
                title: 'Success!',
                message: 'User signin successfully!',
                loading: false

            }))
           
        } else {
            dispatch(
                uiActions.showNotification({
                    status: 'Error',
                    title: 'Error',
                    message: 'Error authenticating user',
                    loading: false
                })
            )
        }

    }
   
}

export const logout = () => {
    return async (dispatch: Dispatch) => {
        try {
            await signOut(auth)
            dispatch(usersActions.logOut())
        } catch (error) {
           throw new Error(`Error logging out, ${error}`);
        }
    }
   
};

export const getUserByUUId = (id: string | undefined) => {
    return async (dispatch: Dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Loading...',
            message: 'Sending data!'
        }))

        const getUser = async () => {
            if(id) {
                const response = await axios.get(`/users/${id}`) 
                if(response.status !== 200) {
                    throw new Error (`Error getting that user`)
                } else {
                    return response.data
                }
            }
        }
        try {
           const userData = await getUser();
           if (userData) {
            dispatch(usersActions.getUser({
                 user: userData.user[0],
                 error: false,
                 loading: false,
                 errorMessage: ''
             }))
             dispatch(cartActions.getCart({
                 cart: userData.user[1].cart.cartDetails[0],
                 items: userData.user[1].cart.cartItems
             }))
           }
          
           
        } catch (error: any) {
            dispatch(
                uiActions.showNotification({
                    status: 'Error',
                    title: 'Error!',
                    message: `Getting user data failed! ${error.message}`
                })
            )
            throw new Error(`Error getting the user, ${error}`)
        }
    }
}

export const addToCart = (item : CartItem) => {

    return async (dispatch: Dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Loading...',
            message: 'Adding item to cart!',
            loading: true
        }))
        try {

            if(item) {
                const response = await axios.post(`/users/add_to_cart`, {cart_id: item.cart_id, title: item.title, price: item.price, product_id: item.product_id, quantity: item.quantity, color: item.color}) 

                if(response.status !== 201) {
                    throw new Error (`Error adding item to cart, ${response.data.message}`)
                } else {
                    dispatch(cartActions.addItemToCart(item))
                    dispatch(uiActions.showNotification({
                        status: 'Success',
                        title: 'Success',
                        message: 'Item added to cart',
                        loading: false
                    }))
                }
            }

           
        } catch (error: any) {
            dispatch(
                uiActions.showNotification({
                    status: 'Error',
                    title: 'Error!',
                    message: `${error.response.data.message}`,
                    loading: false
                })
            )
            throw new Error(`${error.response.data.message}`)
        }
    }
};

export const addUser = (newuser: NewUser) => {
    return async (dispatch: Dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Loading...',
            message: 'Sending data!'
        }))

        const newUser = async () => {
            const userCredential = await createUserWithEmailAndPassword(auth, newuser.email , newuser.password);
            const user = userCredential.user

            if(!user) {
                throw new Error(`Error authenticatiing user`)
            } else {
            const data = {
                email: newuser.email,
                first_name: newuser.first_name,
                last_name: newuser.last_name,
                firebase_id: user.uid
            }
            const response = await axios.post(`/users/newUser`,{ data })
    
            if(response.status === 201) {
                return data
            }
            } 
        }

        try {
            const newUserData = await newUser();
            dispatch(usersActions.addUser(newUserData));
            dispatch(uiActions.showNotification({
                status: 'Success',
                title: 'Success!',
                message: 'User added successfully!',
                loading: false

            }))
        } catch (error: any) {
            dispatch(uiActions.showNotification({
                status: 'Error',
                title: 'Error!',
                message: `Getting user data failed! ${error.message}`
            }))
            throw new Error(`Error adding user ${error}`)
        }
    }
}

export const signIn = (email: string, password: string) => {
    return async (dispatch: Dispatch) => {
       
            const userCredential = await signInWithEmailAndPassword(auth, email, password);
            const user = userCredential.user

            if (!user ) {
                throw new Error (`Error signing in`)
            } else {
                dispatch(usersActions.logIn(true))
            }
        
    }
}
