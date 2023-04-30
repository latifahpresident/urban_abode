import { Navigate, Outlet } from 'react-router-dom';
import { useAppSelector } from '../util/app/hooks';

const ProtectedRoutes = () => {
    const loggedIn = useAppSelector(state => state.user.loggedIn)

    return (loggedIn ? <Outlet/> : <Navigate to="/signup" replace={true} />)
}

export default ProtectedRoutes