import HeadingLarge from "../../components/ui/Typography/Headings/HeadingLarge";
import { useAppSelector } from "../../util/app/hooks";

const Cart = () => {
    const cartItems = useAppSelector(state => state.user.cart?.cartItems);

    return (
        <div className='bg-semiLightGray h-screen p-12 border border-redAccent'>
            <HeadingLarge className='lg:text-2xl lg:pb-0'>Shopping Cart</HeadingLarge>
            <div className='flex items-start justify-between flex border'>
                <div className='lg:w-3/4'>
                {cartItems?.map((item, index) => (
                <div  key={index} className=" flex flex-col border border-1 bg-semiLightGray border-mediumGray p-2 w-full  h-72">
                    <div>
                        <h1 className='lg:text-lg capitalize mt-4'>{item.title}</h1>
                        <div className='flex justify-between border'>
                            <div className='h-52 max-h-52 w-52 border'>{item.images && <img className='w-full h-full' src={item.images[0]} alt={item.title}/>}</div>
                            <div>
                                <p className='text-xl font-medium'>$ {item.price}</p>
                                <div>{item.quantity}</div>
                            </div>
                           
                        </div>
                        
                    </div>
            
                </div>
                ))}
                </div>
                <div className='bg-whiteAccent h-[515px] w-80 p-3.5'>
                    <HeadingLarge className='lg:text-lg lg:pb-0 font-bold'>Order Summary</HeadingLarge>
                </div>
            </div>
     
        </div>
    )
};

export default Cart