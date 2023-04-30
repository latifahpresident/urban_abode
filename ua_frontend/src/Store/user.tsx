import {  createSlice } from '@reduxjs/toolkit';

export interface CartItem {
    cart_id?: number
    product_id: number
    quantity: number
    title: string
    price: number
    color: string
    images?: string[]
};

export interface CartDetails {
    id: number,
    quantity: number,
    total: number,
    user_uuid: string,
}
export interface Cart {
    cartDetails: CartDetails
    cartItems: CartItem []
}

export interface User {
    uuid?: string
    email: string
    first_name: string
    last_name: string
    address?: string
    city?: string
    state?: string
    zip?: string
    phone?: string
    cart_id?: number
    firebase_id: string 
}

export interface InitialStateProps {
    user: User 
    cart: Cart | null
    error: boolean | false
    errorMessage: string | undefined
    loading: boolean
    loggedIn: boolean
}

const initialState : InitialStateProps = {
    // user: null,
    user: {
        uuid: '',
        email: '',
        first_name: '',
        last_name: '',
        address: '',
        city: '',
        state: '',
        zip: '',
        phone: '',
        cart_id: 0,
        firebase_id: ''
    },
    cart: {
        cartDetails: {
            id: 0, 
            quantity: 0, 
            total: 0, 
            user_uuid: ''
        },
        cartItems: []  
    },
    error: false,
    errorMessage: '',
    loading: false,
    loggedIn: false
}


const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {
            state.cart?.cartItems.push({
                cart_id: action.payload.cart_id,
                product_id: action.payload.product_id,
                quantity: action.payload.quantity,
                title: action.payload.title,
                price: action.payload.price,
                color:action.payload.color,
                images:action.payload.images
            })
        },
        
        getUser(state, action) {
            state.user =  action.payload.user
            state.cart = 
                {
                    cartDetails: {
                        user_uuid: action.payload.cart.cartDetails[0].user_uuid,
                        id:  action.payload.cart.cartDetails[0].id,
                        total: action.payload.cart.cartDetails[0].total,
                        quantity: action.payload.cart.cartDetails[0].quanity,
                    },
                    cartItems: action.payload.cart.cartItems
                }
        },

        addUser(state, action) {
            state.user = action.payload
        },

        logOut(state) {
           state.user = {
            uuid: '',
            email: '',
            first_name: '',
            last_name: '',
            address: '',
            city: '',
            state: '',
            zip: '',
            phone: '',
            cart_id: 0,
            firebase_id: ''
        }
           state.cart =  {
            cartDetails: {
                id: 0, 
                quantity: 0, 
                total: 0, 
                user_uuid: ''
            },
            cartItems: []  
        }
        state.loggedIn = false
        },
        logIn(state, action) {
            state.loggedIn = action.payload
        },

        setUser(state, action) {
            state.loggedIn = true
            state.user.firebase_id = action.payload.firebase_id
        }
    }
});

export const usersActions = userSlice.actions
export default userSlice;