import { configureStore, ThunkAction, ThunkDispatch, AnyAction } from '@reduxjs/toolkit';
import logger from 'redux-logger'
import productSlice from './products';
import cartSlice from './cart';
import userSlice from './user';
import uiSlice from './ui';

const store = configureStore({
    reducer: {
        cartSlice: cartSlice.reducer,
        products: productSlice.reducer,
        ui: uiSlice.reducer,
        user: userSlice.reducer,
    },
    middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(logger)
})





export type AppDispatch = typeof store.dispatch

export type RootState = ReturnType<typeof store.getState>
export type TypedDispatch = ThunkDispatch<RootState, any, AnyAction>;

export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  AnyAction
>;
export default store;