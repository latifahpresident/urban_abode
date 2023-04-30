import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';
import { auth } from '../firebase_config';
import instance from '../axiosInstance';
import { useAppDispatch } from '../app/hooks';
import { setUser } from '../../Store/Actions/Users/Users';

export function useAuth() {
    const dispatch = useAppDispatch();
    const [currentUser, setCurrentUser] = useState< User | null>(null);

    useEffect(() => {
        console.log('rendering on auth state change')
        const authorize = async () => {
            onAuthStateChanged(auth, async (user) => {
                if (user) {
                    console.log("firebase user", user)
                    const token = await user.getIdToken()
                    dispatch(setUser(user.uid))
                    setCurrentUser(user)
                    if(token) {
                        instance.defaults.headers.common['Authorization'] = token 
                    }
                } else {
                    setCurrentUser(null)
                }
            })
        } 
            authorize()
    }, [currentUser, dispatch])

    return { currentUser }
};