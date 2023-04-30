import { useEffect } from "react";
import { useAppSelector, useAppDispatch} from "../../util/app/hooks";
import { getUserByUUId } from "../../Store/Actions/Users/Users";
import { useAuth } from "../../util/hooks/useAuth";
// import { useParams } from "react-router-dom";
const Profile = () => {
    const dispatch = useAppDispatch();
    // const { userId } = useParams();
    const user = useAppSelector(state => state.user.user);
    // const cart = useAppSelector(state => state.user.cart.cartDetails);
    // const cartItems = useAppSelector(state => state.user.cart.cartItems);
    // const token = localStorage.getItem('token');
    const loading = useAppSelector(state => state.ui.notification.loading)
    const { currentUser } = useAuth()

    console.log("currentUser", currentUser)
    // const getUser = async () => {
    //     dispatch(getUserByUUId(user.firebase_id))

    // }
    useEffect(() => {
        dispatch(getUserByUUId(user.firebase_id))
    }, [dispatch, user.firebase_id]);

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
