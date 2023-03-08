import { createSlice } from '@reduxjs/toolkit';



interface NotificationProps {
    status: string
    title: string
    message: string
}

export interface InitialStateProps  {
    notification: NotificationProps
}

const initialState : InitialStateProps = {
    notification: {
        status: '',
        title: '',
        message: ''
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
                message: action.payload.title
            }
        }
       
    }
});

export const uiActions =  uiSlice.actions;
export default uiSlice;