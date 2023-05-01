import { useEffect } from "react";
import { useAppSelector, useAppDispatch} from "../../util/app/hooks";
import { getUserByUUId } from "../../Store/Actions/Users/Users";
import { useAuth } from "../../util/hooks/useAuth";

const Profile = () => {
    const dispatch = useAppDispatch();
    const user = useAppSelector(state => state.user?.user);
    const loading = useAppSelector(state => state.ui.notification.loading)
    const { currentUser } = useAuth()

    useEffect(() => {
        dispatch(getUserByUUId(currentUser?.uid))
    }, [dispatch, currentUser?.uid]);

    const LoadingComp = () => {
        return (
            <div>Loading</div>
        )
    }
    if (loading) {
        <LoadingComp/>
    }

    return (
         loading ? <div>loading</div> :<div>Profile: {user?.first_name}
            {/* {cart.id}
         {cartItems.map((item, index) => (
            <div key={index}> {item.title}</div>
         ))} */}
         </div> 
        
    )
};

export default Profile;
