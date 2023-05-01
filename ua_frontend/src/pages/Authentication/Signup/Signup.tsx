import { useState } from 'react';
import Button from '../../../components/ui/Button/Button';
import { useAppDispatch, } from '../../../util/app/hooks';
import { addUser } from '../../../Store/Actions/Users/Users';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../util/hooks/useAuth';
export interface NewUser {
    email: string
    password: string
    first_name: string
    last_name: string
}

const Signup = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    // const firebase_id = useAppSelector(state => state.user.user.firebase_id)
    const { currentUser } = useAuth()
    const signup = async () => {
        const newUser = {
            email: email,
            password: password,
            first_name: first_name,
            last_name: last_name
        }

        try {
            await dispatch(addUser(newUser))

            navigate(`/user/${currentUser?.uid}`)
        } catch (error) {
            throw new Error(`${error}`)
        }
    };

    return (
        <div className='flex flex-col border border-2 mt-8'>
            <input className='border border-2' placeholder='email' type='email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input className='border border-2' placeholder='password' type='password' value={password} onChange={(e) => setPassword(e.target.value)}/>
            <input className='border border-2' placeholder='first name' type='first_name' value={first_name} onChange={(e) => setFirstName(e.target.value)}/>
            <input className='border border-2' placeholder='last name' type='last_name' value={last_name} onChange={(e) => setLastName(e.target.value)}/>
            <Button color='darkGreen' title='SignUp' className='border border-cream'  onClick={() => signup()}/>

        </div>
    )
};

export default Signup