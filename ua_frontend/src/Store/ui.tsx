import { createSlice } from '@reduxjs/toolkit';



interface NotificationProps {
    status: string
    title: string
    message: string
    loading: Boolean
}

export interface InitialStateProps  {
    notification: NotificationProps
}

const initialState : InitialStateProps = {
    notification: {
        status: '',
        title: '',
        message: '',
        loading: false
    }
}


const uiSlice = createSlice({
    name: 'ui',
    initialState,
    reducers: {
        showNotification(state, action) {
            state.notification = {
                status: action.payload.status,
                title: action.payload.title,
                message: action.payload.title,
                loading: action.payload.loading
            }
        }
       
    }
});

export const uiActions =  uiSlice.actions;
export default uiSlice;