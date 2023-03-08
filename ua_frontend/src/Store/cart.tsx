import { createSlice } from '@reduxjs/toolkit';

interface Items {
    id: number
    name: string
    price: number
    quantity: number
    totalPrice: number
}

export interface initialStateProps {
    items: Items[]
    totalQuantity: number 
}

const initialState : initialStateProps = {
    items: [],
    totalQuantity: 0
}


const cartSlice = createSlice({
    name: 'cart',
    initialState: initialState,
    reducers: {
        addItemToCart(state, action) {
            const newItem = action.payload
            const existingItem = state.items.find(item => item.id === newItem.id)
            state.totalQuantity++
            if(!existingItem) {
               state.items.push({
                id: newItem.id,
                name: newItem.name,
                price: newItem.price,
                quantity: newItem.quantity,
                totalPrice: newItem.price
               }) 
            } else {
                existingItem.quantity++
                existingItem.totalPrice = existingItem.totalPrice + newItem.price
            }
        },
        removeItemFromCart(state, action) {
            const id = action.payload

            const existingItem = state.items.find(item => item.id === id)
            state.totalQuantity--
            if(existingItem === undefined) return //add some error handling here
            if( existingItem.quantity === 1) {
                state.items = state.items.filter(item => item.id !== id) //keep all id's that don't match the payload
            } else {
                existingItem.quantity--
                existingItem.totalPrice = existingItem.totalPrice - existingItem.price
            }
        }
    }
});

export const cartActions = cartSlice.actions
export default cartSlice;