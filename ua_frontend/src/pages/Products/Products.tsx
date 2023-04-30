
import { useNavigate } from 'react-router-dom';
import { Products } from '../../Store/products';
import ParagraphMediumBold from '../../components/ui/Typography/ParagraphBoldMedium';

  interface ProdListProps {
    products: Products[]

}

 export const ProductsList = ({ products } : ProdListProps) => {
    let navigate = useNavigate() 

    return (
        <div className='mt-4 mx-2 h-auto'>
            <div className='grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3'>
            {products.map((prod, index) => (
                <div key={index} className='h-84 flex justify-evenly mb-4 items-center flex-col md:h-auto' onClick={() => navigate(`/${prod.id}`)}>
                    <div  className='h-36 w-full md:h-64 md:w-64 lg:h-[463px] lg:w-[463px] shadow-xl'>
                        <img src={prod.images[0]} alt={prod.title} className="h-full w-full"/> 
                    </div>
                    <div className='flex flex-col min-h-[124px] h-48 justify-between w-full lg:w-11/12 mt-8 lg:self-center lg:w-10/12'>
                        <div className='flex flex-col'>
                            <ParagraphMediumBold className=' text-sm'>Available colors:</ParagraphMediumBold>
                            <div className='flex grid grid-cols-3 lg:grid-cols-4 justify-around items-center mt-3'>
                                {prod.colors.map((color, index) => (
                                    <div key={index} className='w-full'>
                                        <button key={index} className='h-4 w-9 md:h-12 md:w-12 rounded focus:border focus:border-black' style={{backgroundColor: `${color}`}}/>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className='flex flex-col h-full justify-evenly'>
                            <ParagraphMediumBold className='capitalize text-md font-medium mt-4 text-darkGreen'>{prod.title}</ParagraphMediumBold>
                            <ParagraphMediumBold className='capitalize text-md font-medium mt-4 items-end text-redAccent'>{`$ ${prod.price}`}</ParagraphMediumBold>
                        </div>
                    </div>
                </div>
            ))}  
            </div>
        </div>
    )
 }
