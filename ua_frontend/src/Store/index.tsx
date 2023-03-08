import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
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
    }
})

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
export default store;