import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface Cart {
    id: number,
    quantity: number,
    total: number,
    user_uuid: string,
}

export interface Items {
    id?: number
    title: string
    price: number
    quantity: number
    product_id: number
    cart_id: number
    color: string
    images: string | string[]
}

export interface InitialStateProps {
    items: Items[]
    cart: Cart
}

const initialState : InitialStateProps = {
    items: [],
    cart: {
        id: 0, 
        quantity: 0, 
        total: 0, 
        user_uuid: ''
    },
    
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        getCart(state, action) {
            state.cart = action.payload.cart
            state.items = action.payload.items
        },
        addItemToCart(state, action: PayloadAction<Items>) {
            const newItem = action.payload
                const existingItem = state.items.find(item => item.product_id === newItem.product_id)
                // state.items.quantity++
                if(!existingItem) {
                    state.items.push({
                        cart_id: action.payload.cart_id,
                        product_id: action.payload.product_id,
                        quantity: action.payload.quantity,
                        title: action.payload.title,
                        price: action.payload.price,
                        color:action.payload.color,
                        images:action.payload.images
                    })
                } else {
                    existingItem.quantity = existingItem.quantity + newItem.quantity;
                    existingItem.price = existingItem.price + newItem.price;
                }
        },
        clearCart(state) {
            state.cart =  {
                id: 0, 
                quantity: 0, 
                total: 0, 
                user_uuid: ''
            }

            state.items = []
        }
        // addItemToCart(state, action) {
        //     const newItem = action.payload
        //     const existingItem = state.items.find(item => item.id === newItem.id)
        //     state.totalQuantity++
        //     if(!existingItem) {
        //        state.items.push({
        //         id: newItem.id,
        //         name: newItem.name,
        //         price: newItem.price,
        //         quantity: newItem.quantity,
        //         totalPrice: newItem.price
        //        }) 
        //     } else {
        //         existingItem.quantity++
        //         existingItem.totalPrice = existingItem.totalPrice + newItem.price
        //     }
        // },
        // removeItemFromCart(state, action) {
        //     const id = action.payload

        //     const existingItem = state.items.find(item => item.id === id)
        //     // state.totalQuantity--
        //     if(existingItem === undefined) return //add some error handling here
        //     if( existingItem.quantity === 1) {
        //         state.items = state.items.filter(item => item.id !== id) //keep all id's that don't match the payload
        //     } else {
        //         existingItem.quantity - new
        //         existingItem.totalPrice = existingItem.totalPrice - existingItem.price
        //     }
        // }
    }
});

export const cartActions = cartSlice.actions
export default cartSlice;