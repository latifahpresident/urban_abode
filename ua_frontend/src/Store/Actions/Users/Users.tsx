import { CartItem, usersActions } from './../../user';
import axios from './../../../util/axiosInstance';
import { Dispatch } from 'redux';
import { uiActions } from '../../ui';
import { auth } from '../../../util/firebase_config';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { NewUser } from '../../../pages/Authentication/Signup/Signup';

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
           const userData = await getUser()
           dispatch(usersActions.getUser({
                user: userData.user[0],
                cart: userData.user[1].cart,
                error: false,
                loading: false,
                errorMessage: ''
            }))
           
        } catch (error: any) {
            dispatch(
                uiActions.showNotification({
                    status: 'Error',
                    title: 'Error!',
                    message: `Getting user data failed! ${error.message}`
                })
            )
            throw new Error(`Error getting the user, ${error.message}`)
        }
    }
}

export const addToCart = (item : CartItem) => {

    return async (dispatch: Dispatch) => {
        dispatch(uiActions.showNotification({
            status: 'Pending',
            title: 'Loading...',
            message: 'Adding item to cart!'
        }))

        // const addItem = async () => {
        //     if(item) {
        //         const response = await axios.post(`/users/add_to_cart`, item) 

        //         if(response.status !== 201) {
        //             throw new Error (`Error adding item to cart`)
        //         } 
        //     }
        // }
        try {

            if(item) {
                const response = await axios.post(`/users/add_to_cart`, item) 

                if(response.status !== 201) {
                    throw new Error (`Error adding item to cart`)
                } else {
                    dispatch(usersActions.addProduct(item))

                }
            }

           
        } catch (error: any) {
            dispatch(
                uiActions.showNotification({
                    status: 'Error',
                    title: 'Error!',
                    message: `Getting user data failed! ${error.message}`
                })
            )
            throw new Error(`Error getting the user, ${error.message}`)
        }
    }






    // return async (dispatch: Dispatch) => {
    //     dispatch(
    //         uiActions.showNotification({
    //             status: 'Pending',
    //             title: 'Loading...',
    //             message: 'Sending data!'
    //         })
    //     )

    //     console.log("ITEM", item)
    //     const addItem = async () => {
    //         const response = await axios.post(`/users/add_to_cart`, item)
    //         console.log('response', response)
    //         if (response.status !== 200 ) {
    //             throw new Error(`Error adding cart please try again`)
    //         }
    //         return response.data
    //     }

    //     try {
    //         const newItem = await addItem();

    //         console.log(newItem)

    //         dispatch(usersActions.addProduct(item))
    //         dispatch(uiActions.showNotification({
    //             status: 'Success',
    //             title: 'Success!',
    //             message: 'Items added successfully!',
    //             loading: false

    //         }))
    //     } catch(error: any) {
    //         dispatch(uiActions.showNotification({
    //             status: 'Error',
    //             title: 'Error!',
    //             message: `Getting item data failed! ${error.message}`
    //         }))
    //         console.log("error fromad to cart", error)
    //         throw new Error(`Error adding product to cart`)
            
    //     }
    // }
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

            console.log("USER CREDENTIALS", user)
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
                console.log('returned new user', data)
                return data
            }
            } 
        }

        try {
            const newUserData = await newUser();
            console.log('new user data', newUserData)

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
