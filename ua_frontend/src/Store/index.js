import { createSlice, configureStore } from '@reduxjs/toolkit'
const initialState = {
    products: [],
    colors: [],
    images: [],
    error: false,
    errorMsg: null,
    loading: false,
    deleted: false,
    deletedMsg: null,
    edit: false,
    editMsg: null,
    editSuccess: false,
    deleteSucces: false,
    count: 0
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,
    reducers: {
        addProduct(state, action) {

        },
        getProduct(state, action) {
            state.products
        },
    }
})
const productsReducer = (store = initialState, action) => {}
const store = configureStore({
    reducer: {
        products: productSlice.reducer,
        //users: userSlice.reducer
    }
})

export const productActions = productSlice.actions //redux will create unique unique action type name
export default store;