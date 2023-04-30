import { useState } from 'react';
import Button from '../../components/ui/Button/Button';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <input value={email} onChange={(e) => setEmail(e.target.value)}/>
            <input value={password} onChange={(e) => setPassword(e.target.value)}/>
            <Button color='darkGreen' title='Sign In'/>
        </div>
    )
}

export default SignIn;