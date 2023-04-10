import { createSlice, PayloadAction} from '@reduxjs/toolkit';

export interface Products {
    id: number
    title: string
    description: string
    price: number
    category_name: string
    quantity: number
    outOfStock: boolean
    colors: string[]
    images: string[]
}


export interface InitialStateProps {
    products: Products[]
    error: boolean
    errorMessage: string | undefined
    loading: boolean
}

const initialState: InitialStateProps = {
    products: [],
    error: false,
    errorMessage: undefined,
    loading: false,
    // deleted: false,
    // deletedMsg: null,
    // edit: false,
    // editMsg: null,
    // editSuccess: false,
    // deleteSucces: false,
    // count: 0
}

const productSlice = createSlice({
    name: 'products',
    initialState: initialState,

    reducers: {
        // addProduct(state, action: PayloadAction<Init[]>) {
        //     const newItem = action.payload
        //     const existingItem = state.products.find(item => item.name === newItem.name)
        //     if(!existingItem) {
        //         state.products.push({
        //             name: newItem.name,
        //             description: newItem.description,
        //             price: newItem.price,
        //             category: newItem.category,
        //             quanity: newItem.quantity,
        //             outOfStock: newItem.outOfStock
        //         })
        //     }
            
        // },
        getProductsData(state, action: PayloadAction<Products[]>) {
            state.products = action.payload
        },
        getProductData(state, action: PayloadAction<Products[]>) {
            state.products = action.payload
        },
    }
});

export const productsActions = productSlice.actions
export default productSlice;
