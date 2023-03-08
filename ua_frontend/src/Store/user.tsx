import { createSlice} from '@reduxjs/toolkit';

const initialState = {
    user: []
}

const userSlice = createSlice({
    name: 'user',
    initialState: initialState,
    reducers: {
        // addProduct(state, action) {
        //     state.user = action.payload.products
        // },
        // getProducts(state) {
        //     state.user
        // },
    }
});

export const productsActions = userSlice.actions
export default userSlice;